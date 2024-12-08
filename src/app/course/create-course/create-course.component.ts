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
				sectionTitle: ['', Validators.required],
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
				lectureTitle: ['', Validators.required],
				lectureVideo: [null, Validators.required],
				lectureCaptions: [null, Validators.required],
			})
		);
	}

	removeLecture(sectionIndex: number, lectureIndex: number): void {
		const lectures = this.getLectures(sectionIndex);
		lectures.removeAt(lectureIndex);
	}

	getLectures(sectionIndex: number): FormArray {
		return this.sections.at(sectionIndex).get('lectures') as FormArray;
	}

	getLectureControls(sectionIndex: number): FormGroup[] {
		return this.getLectures(sectionIndex).controls as FormGroup[];
	}

	onSubmit(): void {
		if (this.courseForm.valid) {
			console.log('Form Submitted:', this.courseForm.value);
		} else {
			console.error('Form is invalid!');
		}
	}
}
