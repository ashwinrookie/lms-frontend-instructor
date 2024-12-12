import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor(
		private _authService: AuthService,
		private _router: Router
	) {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)])
		})
	}
	ngOnInit(): void {

	}
	onSubmit() {
		if (this.loginForm.invalid) return;
		const formData = this.loginForm.value;
		this._authService.signinInstructor(formData).subscribe({
			next: (signinresponse) => {
				localStorage.setItem('authToken', signinresponse.accessToken);
				localStorage.setItem('refreshToken', signinresponse.refreshToken);

				this._router.navigate(['/']);
			},
			error: (error: Error) => {
				console.log('error:', error);
			},
		});
	}
}
