import { createReducer, on } from '@ngrx/store';
import { initialInstructorState } from './instructor.state';
import {
	getInstructorProfile,
	getInstructorProfileFailure,
	getInstructorProfileSuccess,
	removeInstructorProfile
} from './instructor.actions';



const instructorReducer = createReducer(
	initialInstructorState,
	on(getInstructorProfile, (state) => ({ ...state, loaded: false })),
	on(getInstructorProfileSuccess, (state, { instructor }) => ({
		...state,
		instructor,
		loaded: true
	})),
	on(getInstructorProfileFailure, (state, { error }) => ({
		...state,
		error,
		loaded: false
	})),
	on(removeInstructorProfile, () => initialInstructorState)
);

export {
	instructorReducer
};