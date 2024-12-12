import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {
  CourseLanguages,
  CourseSubtitles,
  CreateCourseRequestDTO,
} from 'src/app/core';
import { CourseService } from '../services/course.service';
import { lastValueFrom } from 'rxjs';
import { LoadingServiceService } from 'src/app/core/services/loading-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
})
export class CreateCourseComponent {
  courseForm: FormGroup;
  isUploading = false;
  selectedImageFile: File | null = null;
  selectedImageName: string = '';

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private _loadingService: LoadingServiceService,
    private _router: Router
  ) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      sections: this.fb.array([]),
    });
  }

  get sections(): FormArray {
    return this.courseForm.get('sections') as FormArray;
  }

  addSection(): void {
    this.sections.push(
      this.fb.group({
        title: ['', Validators.required],
        lectures: this.fb.array([]),
      })
    );
  }

  removeSection(index: number): void {
    this.sections.removeAt(index);
  }

  addLecture(sectionIndex: number): void {
    const lectures = this.getLectures(sectionIndex);
    lectures.push(
      this.fb.group({
        title: ['', Validators.required],
        link: [null, Validators.required],
        subtitles: this.fb.array([]),
      })
    );
  }

  removeLecture(sectionIndex: number, lectureIndex: number): void {
    const lectures = this.getLectures(sectionIndex);
    lectures.removeAt(lectureIndex);
  }

  addSubtitle(sectionIndex: number, lectureIndex: number): void {
    const subtitles = this.getSubtitles(sectionIndex, lectureIndex);
    subtitles.push(
      this.fb.group({
        language: ['English', Validators.required], // Default language
        url: [null, Validators.required], // Subtitle file link
      })
    );
  }
  removeSubtitle(
    sectionIndex: number,
    lectureIndex: number,
    subtitleIndex: number
  ): void {
    const subtitles = this.getSubtitles(sectionIndex, lectureIndex);
    subtitles.removeAt(subtitleIndex);
  }

  getSubtitles(sectionIndex: number, lectureIndex: number): FormArray {
    const lectures = this.getLectures(sectionIndex);
    return lectures.at(lectureIndex).get('subtitles') as FormArray;
  }

  getLectures(sectionIndex: number): FormArray {
    return this.sections.at(sectionIndex).get('lectures') as FormArray;
  }

  onImageSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedImageFile = fileInput.files[0];
      this.selectedImageName = this.selectedImageFile.name;
    }
  }

  onFileSelected(
    event: Event,
    type: 'lecture' | 'subtitle',
    sectionIndex: number,
    lectureIndex: number,
    subtitleIndex?: number
  ): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      if (type === 'lecture') {
        const lectures = this.getLectures(sectionIndex);
        lectures.at(lectureIndex).patchValue({ link: file });
      } else if (type === 'subtitle' && subtitleIndex !== undefined) {
        const subtitles = this.getSubtitles(sectionIndex, lectureIndex);
        console.log(subtitles, 'subss');

        subtitles.at(subtitleIndex).patchValue({ url: file });
      }
    }
  }

  async onSubmit(): Promise<void> {
    if (this.courseForm.invalid) {
      console.error('Form is invalid!');
      return;
    }

    try {
      this._loadingService.show();
      console.log('Uploading Started');

      const formValue = this.courseForm.value;
      console.log('formValue ::', formValue);

      // Upload course image
      const imageResponse = await lastValueFrom(
        this.courseService.uploadCourseImage('image/png')
      );
      if (!imageResponse) {
        throw new Error('Image upload failed');
      }

      await this.uploadFileToAWS(
        imageResponse.url,
        imageResponse.fields,
        this.selectedImageFile!
      );

      // Process sections and lectures
      for (const section of formValue.sections) {
        for (const lecture of section.lectures) {
          const videoFile = lecture.link; // This now holds the File object
          const videoResponse = await lastValueFrom(
            this.courseService.uploadCourseLectureVideo('video/mp4')
          );
          if (!videoResponse) throw new Error('Video upload failed');
          await this.uploadFileToAWS(
            videoResponse.url,
            videoResponse.fields,
            videoFile
          );

          lecture.link = videoResponse.url + '/' + videoResponse.fields.key; // Update with the uploaded URL

          for (const subtitle of lecture.subtitles) {
            const subtitleFile = subtitle.url; // This now holds the File object
            const captionsResponse = await lastValueFrom(
              this.courseService.uploadCourseLectureSubtitle('text/vtt')
            );
            if (!captionsResponse) throw new Error('Captions upload failed');
            await this.uploadFileToAWS(
              captionsResponse.url,
              captionsResponse.fields,
              subtitleFile
            );

            subtitle.url =
              captionsResponse.url + '/' + captionsResponse.fields.key; // Update with the uploaded URL
          }
        }
      }

      const createCourseRequest: CreateCourseRequestDTO = {
        title: formValue.title,
        description: formValue.description,
        category: 'PROGRAMMING',
        languages: [CourseLanguages.english],
        subtitles: [CourseSubtitles.english],
        learnings: ['Some learnings'],
        materialsAndOffers: ['Some materials'],
        price: { currency: 'USD', value: 100 },
        image: imageResponse.url + '/' + imageResponse.fields.key,
        sections: formValue.sections.map(
          (section: { lectures: any[] }, sectionIndex: number) => ({
            ...section,
            order: sectionIndex + 1,
            lectures: section.lectures.map((lecture, lectureIndex) => ({
              ...lecture,
              description: 'Test description',
              order: lectureIndex + 1,
              subtitles: lecture.subtitles.map((subtitle: { url: any }) => ({
                ...subtitle,
                url: subtitle.url, // Map uploaded URL if needed
              })),
            })),
          })
        ),
      };

      const response = await lastValueFrom(
        this.courseService.createCourse(createCourseRequest)
      );
      console.log('Course created successfully:', response);
    } catch (error) {
      console.error('Error uploading or creating course:', error);
    } finally {
      this.isUploading = false;
      this._loadingService.hide();
      this._router.navigate(['/']);
      console.log('Uploading ENded');
    }
  }

  private async uploadFileToAWS(
    url: string,
    fields: any,
    file: File
  ): Promise<void> {
    const formData = new FormData();
    Object.keys(fields).forEach((key) => formData.append(key, fields[key]));
    formData.append('file', file);

    await lastValueFrom(this.courseService.uploadAnAssetToAwsS3(url, formData));
  }
}
