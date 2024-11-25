import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, take } from 'rxjs/operators';
import {
	AppState,
	getInstructorProfile,
	removeInstructorProfile,
	selectInstructorProfileLoaded
} from 'src/app/states';


@Injectable({
	providedIn: 'root'
})
export class AppInitializerService {

	constructor(private _store: Store<AppState>) { }

	initializeApp(): Promise<any> {
		if (localStorage.getItem("authToken")) {
			return new Promise((resolve, reject) => {

				this._store.dispatch(removeInstructorProfile());

				this._store.dispatch(getInstructorProfile());

				this._store.pipe(
					select(selectInstructorProfileLoaded),
					filter(loaded => loaded),
					take(1)
				).subscribe({
					next: () => resolve(true),
					error: err => reject(err)
				});
			});
		} else {
			return Promise.resolve(true);
		}
	}
}