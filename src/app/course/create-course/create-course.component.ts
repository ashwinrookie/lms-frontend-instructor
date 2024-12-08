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
      title: ['', Validators.required], // Course title
      description: ['', Validators.required], // Course description
      sections: this.fb.array([]), // Main sections array
    });
  }

  // Getter for sections FormArray
  get sections(): FormArray {
    return this.courseForm.get('sections') as FormArray;
  }

  // Add a new section
  addSection(): void {
    this.sections.push(
      this.fb.group({
        sectionTitle: ['', Validators.required], // Section title field
        lectures: this.fb.array([]), // Nested lectures array
      })
    );
  }

  // Remove a section
  removeSection(index: number): void {
    this.sections.removeAt(index);
  }

  // Add a new lecture to a specific section
  addLecture(sectionIndex: number): void {
    const lectures = this.getLectures(sectionIndex);
    lectures.push(
      this.fb.group({
        lectureTitle: ['', Validators.required], // Lecture title field
        lectureVideo: [null, Validators.required], // Lecture video field
        lectureCaptions: [null, Validators.required], // Lecture captions field
      })
    );
  }

  // Remove a lecture from a specific section
  removeLecture(sectionIndex: number, lectureIndex: number): void {
    const lectures = this.getLectures(sectionIndex);
    lectures.removeAt(lectureIndex);
  }

  // Getter for lectures FormArray within a section
  getLectures(sectionIndex: number): FormArray {
    return this.sections.at(sectionIndex).get('lectures') as FormArray;
  }

  // Helper to get lecture controls for iteration in the template
  getLectureControls(sectionIndex: number): FormGroup[] {
    return this.getLectures(sectionIndex).controls as FormGroup[];
  }

  // Submit handler
  onSubmit(): void {
    if (this.courseForm.valid) {
      console.log('Form Submitted:', this.courseForm.value);
    } else {
      console.error('Form is invalid!');
    }
  }
}
