import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	CreateCourseRequestDTO,
	CreateCourseResponseDTO,
	GetAllCoursesResponseDTO,
	GetCourseResponseDTO,
	SKIP_AUTH,
	UpdateCourseRequestDTO,
	UpdateCourseResponseDTO,
	UploadCourseImageResponseDTO,
	UploadCourseLectureSubtitleResponseDTO,
	UploadCourseLectureVideoResponseDTO
} from 'src/app/core';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class CourseService {

	private _courseApiUrl = `${environment.apiUrl}/main/course`;

	constructor(
		private _httpClient: HttpClient
	) { }

	uploadCourseImage(mimeType: string): Observable<UploadCourseImageResponseDTO> {
		return this._httpClient.post<UploadCourseImageResponseDTO>(
			`${this._courseApiUrl}/upload-image`,
			{
				mimeType,
			}
		);
	}

	uploadCourseLectureVideo(mimeType: string): Observable<UploadCourseLectureVideoResponseDTO> {
		return this._httpClient.post<UploadCourseLectureVideoResponseDTO>(
			`${this._courseApiUrl}/upload-lecture-video`,
			{
				mimeType,
			}
		);
	}

	uploadCourseLectureSubtitle(mimeType: string): Observable<UploadCourseLectureSubtitleResponseDTO> {
		return this._httpClient.post<UploadCourseLectureSubtitleResponseDTO>(
			`${this._courseApiUrl}/upload-lecture-subtitle`,
			{
				mimeType,
			}
		);
	}

	uploadAnAssetToAwsS3(url: string, data: FormData): Observable<void> {
		return this._httpClient.post<void>(url, data, {
			context: new HttpContext().set(SKIP_AUTH, true)
		});
	}

	createCourse(course: CreateCourseRequestDTO): Observable<CreateCourseResponseDTO> {
		return this._httpClient.post<CreateCourseResponseDTO>(`${this._courseApiUrl}/create-by-instructor`, course);
	}

	updateCourse(course: UpdateCourseRequestDTO): Observable<UpdateCourseResponseDTO> {
		return this._httpClient.post<UpdateCourseResponseDTO>(`${this._courseApiUrl}/update-by-instructor`, course);
	}

	getAllCourses(): Observable<GetAllCoursesResponseDTO[]> {
		return this._httpClient.get<GetAllCoursesResponseDTO[]>(`${this._courseApiUrl}/all-by-instructor`);
	}

	getCourse(courseId: string): Observable<GetCourseResponseDTO> {
		return this._httpClient.get<GetCourseResponseDTO>(`${this._courseApiUrl}/by-instructor?courseId=${courseId}`);
	}
}
