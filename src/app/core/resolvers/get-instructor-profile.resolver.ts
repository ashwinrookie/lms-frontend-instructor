import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { catchError, filter, first, switchMap, throwError, map } from 'rxjs';
import {
	getInstructorProfile,
	Instructor,
	removeInstructorProfile,
	selectInstructorProfile,
	selectInstructorProfileLoaded
} from 'src/app/states';


export function getInstructorProfileResolver(): ResolveFn<Instructor> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		const store = inject(Store);

		store.dispatch(removeInstructorProfile());
		store.dispatch(getInstructorProfile());

		return store.pipe(
			select(selectInstructorProfileLoaded),
			filter(loaded => loaded),
			first(),
			switchMap(() =>
				store.pipe(
					select(selectInstructorProfile),
					map(profile => {
						if (!profile) {
							throw new Error('Instructor profile not found');
						}
						return profile;
					}),
					catchError((error) => throwError(() => error))
				)
			)
		);
	};
}