
enum ErrorCodes {
	clientError = "CLIENT_ERROR",
	unauthorized = "UNAUTHORIZED",
	paymentRequired = "PAYMENT_REQUIRED",
	forbidden = "FORBIDDEN",
	notFound = "NOT_FOUND",
	conflict = "CONFLICT",
	tooManyRequests = "TOO_MANY_REQUESTS",
	invalidInput = "INV_INPUT",
	noUseCase = "NO_USE_CASE",
	invalidCredentials = "INVALID_CREDENTIALS",
	invalidPassword = "INV_PASSWORD",
	invalidRefreshToken = "INVALID_REFRESH_TOKEN",
	internalError = "INTERNAL_ERROR",
	instructorEmailRequired = "INSTRUCTOR_EMAIL_REQUIRED",
	instructorFirstNameRequired = "INSTRUCTOR_FIRST_NAME_REQUIRED",
	instructorLastNameRequired = "INSTRUCTOR_LAST_NAME_REQUIRED",
	instructorPasswordRequired = "INSTRUCTOR_PASSWORD_REQUIRED",
	instructorNotFound = "INSTRUCTOR_NOT_FOUND",
	instructorAlreadyExists = "INSTRUCTOR_ALREADY_EXISTS",
	instructorPasswordNotExists = "INSTRUCTOR_PASSWORD_NOT_EXISTS",
	instructorMaySignupWithGmail = "INSTRUCTOR_MAY_SIGNUP_WITH_GMAIL",
	googleAuthCodeRequired = "GOOGLE_AUTH_CODE_REQUIRED",
	googleRedirectUriRequired = "GOOGLE_REDIRECT_URI_REQUIRED",
	instructorForgotPasswordEntryDoesNotExist = "INSTRUCTOR_FORGOT_PASSWORD_ENTRY_DOES_NOT_EXIST",
	instructorForgotPasswordVerificationCodeDoesNotMatch = "INSTRUCTOR_FORGOT_PASSWORD_VERIFICATION_CODE_DOES_NOT_MATCH",
	instructorSignupMethodDoesNotMatch = "INSTRUCTOR_SIGNUP_METHOD_DOES_NOT_MATCH",
	invalidAuthorizationToken = "INVALID_AUTHORIZATION_TOKEN",
	instructorProfilePictureMimeTypeRequired = "INSTRUCTOR_PROFILE_PICTURE_MIME_TYPE_REQUIRED",
	refreshTokenNotFound = "REFRESH_TOKEN_NOT_FOUND",
	invalidUserTypeInToken = "INVALID_USER_TYPE_IN_TOKEN",
	refreshTokenRequired = "REFRESH_TOKEN_REQUIRED"
}

export {
	ErrorCodes
};