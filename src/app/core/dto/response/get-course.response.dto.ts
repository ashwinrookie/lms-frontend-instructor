import { CourseLanguages, CoursePriceCurrencies, CourseStatuses, CourseSubtitles } from "../../types";



interface GetCourseByInstructorPriceResponseDTO {
	currency: CoursePriceCurrencies;
	value: number;
}

interface GetCourseCreatorResponseDTO {
	firstName: string;
	lastName: string;
	profilePicture: string | null;
	designation: string | null;
}

interface GetCourseRatingResponseDTO {
	value: number;
	totalCount: number;
}

interface GetCourseSectionLectureSubtitleResponseDTO {
	language: CourseSubtitles;
	url: string;
}

interface GetCourseSectionLectureResponseDTO {
	id: string;
	title: string;
	description: string;
	duration: number;
	link: string;
	thumbnail: string | null;
	subtitles: GetCourseSectionLectureSubtitleResponseDTO[];
	order: number;
}

interface GetCourseSectionResponseDTO {
	id: string;
	title: string;
	lectures: GetCourseSectionLectureResponseDTO[];
	lecturesCount: number;
	lecturesDuration: number;
	order: number;
}

interface GetCourseResponseDTO {
	id: string;
	status: CourseStatuses;
	title: string;
	description: string;
	category: string;
	rating: GetCourseRatingResponseDTO | null;
	totalStudents: number;
	creators: GetCourseCreatorResponseDTO[];
	lastUpdatedOn: Date;
	languages: CourseLanguages[];
	subtitles: CourseSubtitles[];
	materialsAndOffers: string[];
	price: GetCourseByInstructorPriceResponseDTO;
	image: string;
	sections: GetCourseSectionResponseDTO[];
	totalSectionsCount: number;
	totalLecturesCount: number;
	totalDuration: number;
}


export {
	GetCourseResponseDTO
};