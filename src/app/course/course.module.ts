import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [CourseComponent, MyCoursesComponent, CreateCourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAccordionModule,
  ],
})
export class CourseModule {}