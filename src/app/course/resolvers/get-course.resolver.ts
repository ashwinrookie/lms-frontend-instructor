import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { GetCourseResponseDTO } from 'src/app/core';
import { CourseService } from '../services/course.service';
import { catchError } from 'rxjs';


export function getCourseResolver(): ResolveFn<GetCourseResponseDTO> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		const courseService = inject(CourseService);

		return courseService.getCourse(route.params["id"]).pipe(
			catchError((error) => {
				throw error;
			})
		);
	};
}
