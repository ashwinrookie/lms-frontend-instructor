
interface UploadCourseLectureVideoFieldsResponseDTO {
	key: string;
	bucket: string;
	"X-Amz-Algorithm": string;
	"X-Amz-Credential": string;
	"X-Amz-Date": string;
	Policy: string;
	"X-Amz-Signature": string;
}

interface UploadCourseLectureVideoResponseDTO {
	url: string;
	fields: UploadCourseLectureVideoFieldsResponseDTO[];
}

export {
	UploadCourseLectureVideoResponseDTO
};