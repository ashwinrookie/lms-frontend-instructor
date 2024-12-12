import { CourseLanguages, CoursePriceCurrencies, CourseStatuses, CourseSubtitles } from "../../types";



interface GetAllCoursesPriceResponseDTO {
	currency: CoursePriceCurrencies;
	value: number;
}

interface GetAllCoursesCreatorResponseDTO {
	firstName: string;
	lastName: string;
	profilePicture: string | null;
	designation: string | null;
}

interface GetAllCoursesRatingResponseDTO {
	value: number;
	totalCount: number;
}

interface GetAllCoursesSectionLectureSubtitleResponseDTO {
	language: CourseSubtitles;
	url: string;
}

interface GetAllCoursesSectionLectureResponseDTO {
	id: string;
	title: string;
	description: string;
	duration: number;
	link: string;
	thumbnail: string | null;
	order: number;
}

interface GetAllCoursesSectionResponseDTO {
	id: string;
	title: string;
	lectures: GetAllCoursesSectionLectureResponseDTO[];
	lecturesCount: number;
	lecturesDuration: number;
	order: number;
}

interface GetAllCoursesResponseDTO {
	id: string;
	status: CourseStatuses;
	title: string;
	description: string;
	category: string;
	rating: GetAllCoursesRatingResponseDTO | null;
	totalStudents: number;
	creators: GetAllCoursesCreatorResponseDTO[];
	lastUpdatedOn: Date;
	languages: CourseLanguages[];
	subtitles: CourseSubtitles[];
	materialsAndOffers: string[];
	price: GetAllCoursesPriceResponseDTO;
	image: string;
	sections: GetAllCoursesSectionResponseDTO[];
	totalSectionsCount: number;
	totalLecturesCount: number;
	totalDuration: number;
}


export {
	GetAllCoursesResponseDTO
};