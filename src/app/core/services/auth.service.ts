import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {
	SignupInstructorRequestDTO,
	SignupInstructorResponseDTO
} from '../dto';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private _authApiUrl = `${environment.apiUrl}/auth`;

	constructor(private _httpClient: HttpClient) { }

	signupInstructor(
		SignupInstructorRequestDTO: SignupInstructorRequestDTO
	): Observable<SignupInstructorResponseDTO> {

		return this._httpClient
			.post<SignupInstructorResponseDTO>(
				`${this._authApiUrl}/instructor/register`,
				SignupInstructorRequestDTO
			);
	}
}
