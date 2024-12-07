import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
})
export class CreateCourseComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      sections: this.fb.array([]), // Main sections array
    });
  }

  get sections(): FormArray {
    return this.courseForm.get('sections') as FormArray;
  }

  addSection(): void {
    this.sections.push(
      this.fb.group({
        sectionTitle: ['', Validators.required], // Section title field
        lectures: this.fb.array([]), // Nested lectures array
      })
    );
  }

  addLecture(sectionIndex: number): void {
    const lectures = this.getLectures(sectionIndex);
    lectures.push(
      this.fb.group({
        lectureTitle: ['', Validators.required], // Lecture title field
      })
    );
  }

  getLectures(sectionIndex: number): FormArray {
    return this.sections.at(sectionIndex).get('lectures') as FormArray;
  }

  getLectureControls(sectionIndex: number): FormGroup[] {
    return this.getLectures(sectionIndex).controls as FormGroup[];
  }
}
