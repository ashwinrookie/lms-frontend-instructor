import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InstructorState } from './instructor.state';



const selectInstructorState = createFeatureSelector<InstructorState>('instructor');

const selectInstructorProfile = createSelector(
	selectInstructorState,
	(state: InstructorState) => state.student
);

const selectInstructorProfileLoaded = createSelector(
	selectInstructorState,
	(state: InstructorState) => state.loaded
);

const selectInstructorProfileError = createSelector(
	selectInstructorState,
	(state: InstructorState) => state.error
);



export {
	selectInstructorProfile,
	selectInstructorProfileLoaded,
	selectInstructorProfileError
};