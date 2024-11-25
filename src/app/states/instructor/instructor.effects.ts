import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core';
import { getInstructorProfile, getInstructorProfileFailure, getInstructorProfileSuccess, removeInstructorProfile } from './instructor.actions';

@Injectable()
export class InstructorEffects {
  constructor(private _actions$: Actions, private _authService: AuthService) {}

  loadInstructorProfile$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getInstructorProfile),
      mergeMap(() =>
        this._authService.getInstructorProfile().pipe(
          map((student) => {
            return getInstructorProfileSuccess({
              instructor: {
                email: student.email,
                firstName: student.firstName,
                id: student.id,
                lastName: student.lastName,
                profilePicture: student.profilePicture,
				designation: student.designation
              },
            });
          }),
          catchError((error: Error) => {
            return of(getInstructorProfileFailure({ error }));
          })
        )
      )
    )
  );

  removeInstructorProfile$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(removeInstructorProfile),
        map(() => {
          // Add any side effects or API calls here, if needed
          console.log('Instructor profile removed');
        })
      ),
    { dispatch: false } // No further action dispatched
  );
}
