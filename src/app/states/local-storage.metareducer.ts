import { ActionReducer, INIT, MetaReducer } from '@ngrx/store';
import { AppState } from './app.state';
import { initialInstructorState } from './instructor';

const STATE_KEY = 'appState';

function saveStateToLocalStorage(state: AppState) {
	localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function loadStateFromLocalStorage(): Partial<AppState> | undefined {
	const stateJson = localStorage.getItem(STATE_KEY);

	try {
		return stateJson ? JSON.parse(stateJson) : undefined;
	} catch (error) {
		console.error('Error loading state from local storage:', error);
		return undefined;
	}
}

export function localStorageMetaReducer(
	reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
	return (state: AppState | undefined, action) => {

		if (action.type === INIT) {
			const loadedState = loadStateFromLocalStorage();
			state = {
				instructor: initialInstructorState,
				...loadedState,
				...state
			} as AppState;
		}

		const newState = reducer(
			state ?? { instructor: initialInstructorState },
			action
		);

		saveStateToLocalStorage(newState);

		return newState;
	};
}

export const metaReducers: MetaReducer<AppState>[] = [localStorageMetaReducer];