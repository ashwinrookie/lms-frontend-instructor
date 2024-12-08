import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { getAllCoursesResolver } from './resolvers/get-all-courses.resolver';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { getCourseResolver } from './resolvers/get-course.resolver';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MyCoursesComponent,
        resolve: [getAllCoursesResolver()],
      },
      {
        path: 'create-course',
        component: CreateCourseComponent,
      },
      {
        path: 'update-course',
        component: UpdateCourseComponent,
        resolve: [getCourseResolver()],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
