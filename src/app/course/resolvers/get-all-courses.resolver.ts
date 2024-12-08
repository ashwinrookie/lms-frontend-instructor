import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { GetAllCoursesResponseDTO } from 'src/app/core';
import { CourseService } from '../services/course.service';
import { catchError } from 'rxjs';


export function getAllCoursesResolver(): ResolveFn<GetAllCoursesResponseDTO[]> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		const courseService = inject(CourseService);

		return courseService.getAllCourses().pipe(
			catchError((error) => {
				throw error;
			})
		);
	};
}
