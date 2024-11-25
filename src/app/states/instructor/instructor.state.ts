interface Instructor {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	profilePicture: string | null;
	designation: string | null;
}

interface InstructorState {
	student: Instructor | null;
	error: Error | null;
	loaded: boolean;
}

const initialInstructorState: InstructorState = {
	student: null,
	error: null,
	loaded: false,
};

export { Instructor, InstructorState, initialInstructorState };