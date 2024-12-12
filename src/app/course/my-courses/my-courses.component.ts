import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllCoursesResponseDTO } from 'src/app/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss'],
})
export class MyCoursesComponent {
  private _courses: GetAllCoursesResponseDTO[];
  constructor(private _route: ActivatedRoute) {
    this._courses = this._route.snapshot.data[0];
    console.log('My Courses:', this._courses);
  }
  get courses() {
    return this._courses;
  }
}
