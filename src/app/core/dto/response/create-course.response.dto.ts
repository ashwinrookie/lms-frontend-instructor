import { CourseLanguages, CoursePriceCurrencies, CourseStatuses, CourseSubtitles } from "../../types";



interface CreateCoursePriceResponseDTO {
	currency: CoursePriceCurrencies;
	value: number;
}

interface CreateCourseCreatorResponseDTO {
	firstName: string;
	lastName: string;
	profilePicture: string | null;
	designation: string | null;
}

interface CreateCourseRatingResponseDTO {
	value: number;
	totalCount: number;
}

interface CreateCourseSectionLectureSubtitleResponseDTO {
	language: CourseSubtitles;
	url: string;
}

interface CreateCourseSectionLectureResponseDTO {
	id: string;
	title: string;
	description: string;
	duration: number;
	link: string;
	thumbnail: string | null;
	subtitles: CreateCourseSectionLectureSubtitleResponseDTO[];
	order: number;
}

interface CreateCourseSectionResponseDTO {
	id: string;
	title: string;
	lectures: CreateCourseSectionLectureResponseDTO[];
	lecturesCount: number;
	lecturesDuration: number;
	order: number;
}

interface CreateCourseResponseDTO {
	id: string;
	status: CourseStatuses;
	title: string;
	description: string;
	category: string;
	rating: CreateCourseRatingResponseDTO | null;
	totalStudents: number;
	creators: CreateCourseCreatorResponseDTO[];
	lastUpdatedOn: Date;
	languages: CourseLanguages[];
	subtitles: CourseSubtitles[];
	materialsAndOffers: string[];
	price: CreateCoursePriceResponseDTO;
	image: string;
	sections: CreateCourseSectionResponseDTO[];
	totalSectionsCount: number;
	totalLecturesCount: number;
	totalDuration: number;
}


export {
	CreateCourseResponseDTO
};