import { ErrorCodes } from "../errors";


function getErrorMessage(code: ErrorCodes) {
	switch (code) {
		case ErrorCodes.clientError: {
			return "Bad Request";
		}

		case ErrorCodes.forbidden: {
			return "Forbidden Request";
		}

		case ErrorCodes.conflict: {
			return "Input Conflict";
		}

		case ErrorCodes.googleAuthCodeRequired: {
			return "Google auth code is required";
		}

		case ErrorCodes.googleRedirectUriRequired: {
			return "Google redirect uri is required";
		}

		case ErrorCodes.internalError: {
			return "Something went wrong, please try again";
		}

		case ErrorCodes.invalidAuthorizationToken: {
			return "Authorization token is invalid";
		}

		case ErrorCodes.invalidCredentials: {
			return "Invalid Credentials";
		}

		case ErrorCodes.invalidInput: {
			return "Invalid Input";
		}

		case ErrorCodes.invalidPassword: {
			return "Invalid Credentials";
		}

		case ErrorCodes.invalidRefreshToken: {
			return "Refresh token is invalid";
		}

		case ErrorCodes.invalidUserTypeInToken: {
			return "Invalid user type in the token";
		}

		case ErrorCodes.noUseCase: {
			return "No use-case for the request";
		}

		case ErrorCodes.notFound: {
			return "Not Found";
		}

		case ErrorCodes.paymentRequired: {
			return "Payment Required";
		}

		case ErrorCodes.refreshTokenNotFound: {
			return "Refresh token not found";
		}

		case ErrorCodes.refreshTokenRequired: {
			return "Refresh token is required";
		}

		case ErrorCodes.instructorAlreadyExists: {
			return "instructor already exists";
		}

		case ErrorCodes.instructorEmailRequired: {
			return "instructor email is required";
		}

		case ErrorCodes.instructorFirstNameRequired: {
			return "instructor first name is required";
		}

		case ErrorCodes.instructorForgotPasswordEntryDoesNotExist: {
			return "instructor did not request for the forgot password";
		}

		case ErrorCodes.instructorForgotPasswordVerificationCodeDoesNotMatch: {
			return "Verification code is invalid";
		}

		case ErrorCodes.instructorLastNameRequired: {
			return "instructor last name is required";
		}

		case ErrorCodes.instructorMaySignupWithGmail: {
			return "You may have signed up using gmail";
		}

		case ErrorCodes.instructorNotFound: {
			return "instructor not found";
		}

		case ErrorCodes.instructorPasswordNotExists: {
			return "instructor password does not exist";
		}

		case ErrorCodes.instructorPasswordRequired: {
			return "instructor password is required";
		}

		case ErrorCodes.instructorProfilePictureMimeTypeRequired: {
			return "Mime type is required";
		}

		case ErrorCodes.instructorSignupMethodDoesNotMatch: {
			return "Signup method does not match";
		}

		case ErrorCodes.tooManyRequests: {
			return "Too many requests";
		}

		case ErrorCodes.unauthorized: {
			return "Unauthorized";
		}

		default: {
			return "Something went wrong, please try again"
		}
	}
}

export {
	getErrorMessage
};