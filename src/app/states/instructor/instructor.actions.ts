import { createAction, props } from '@ngrx/store';
import { Instructor } from './instructor.state';

const getInstructorProfile = createAction('[Instructor] Get Profile');
const getInstructorProfileSuccess = createAction(
	'[Instructor] Get Profile Success',
	props<{ instructor: Instructor }>()
);
const getInstructorProfileFailure = createAction(
	'[Instructor] Get Profile Failure',
	props<{ error: Error }>()
);

const removeInstructorProfile = createAction('[Instructor] Remove Profile');

export {
	getInstructorProfile,
	getInstructorProfileSuccess,
	getInstructorProfileFailure,
	removeInstructorProfile
};