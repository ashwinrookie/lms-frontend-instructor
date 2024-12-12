interface UploadCourseImageFieldsResponseDTO {
  key: string;
  bucket: string;
  'X-Amz-Algorithm': string;
  'X-Amz-Credential': string;
  'X-Amz-Date': string;
  Policy: string;
  'X-Amz-Signature': string;
}

interface UploadCourseImageResponseDTO {
  url: string;
  fields: UploadCourseImageFieldsResponseDTO;
}

export { UploadCourseImageResponseDTO };
