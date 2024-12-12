import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {
	ForgotPasswordRequestDTO,
	GetInstructorProfileResponseDTO,
	GoogleSignInRequestDTO,
	GoogleSignInResponseDTO,
	ResetPasswordRequestDTO,
	SigninInstructorRequestDTO,
	SigninInstructorResponseDTO,
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
		signupInstructorRequestDTO: SignupInstructorRequestDTO
	): Observable<SignupInstructorResponseDTO> {

		return this._httpClient
			.post<SignupInstructorResponseDTO>(
				`${this._authApiUrl}/instructor/register`,
				signupInstructorRequestDTO
			);
	}

	getInstructorProfile(): Observable<GetInstructorProfileResponseDTO> {
		return this._httpClient.get<GetInstructorProfileResponseDTO>(
			`${this._authApiUrl}/instructor`
		);
	}

	signinInstructor(
		signinInstructorRequestDTO: SigninInstructorRequestDTO
	): Observable<SigninInstructorResponseDTO> {
		return this._httpClient.post<SigninInstructorResponseDTO>(
			`${this._authApiUrl}/instructor/sign-in`,
			signinInstructorRequestDTO
		);
	}

	forgotPassword(
		forgotPasswordRequestDTO: ForgotPasswordRequestDTO
	): Observable<null> {
		return this._httpClient.post<null>(
			`${this._authApiUrl}/instructor/forgot-password`,
			forgotPasswordRequestDTO
		);
	}

	resetPassword(
		resetPasswordRequestDTO: ResetPasswordRequestDTO
	): Observable<null> {
		return this._httpClient.post<null>(
			`${this._authApiUrl}/instructor/reset-password`,
			resetPasswordRequestDTO
		);
	}

	googleSignin(
		googleSigninRequestDTO: GoogleSignInRequestDTO
	): Observable<GoogleSignInResponseDTO> {
		return this._httpClient.post<GoogleSignInResponseDTO>(
			`${this._authApiUrl}/instructor/sign-in/gmail`,
			googleSigninRequestDTO
		);
	}
}
