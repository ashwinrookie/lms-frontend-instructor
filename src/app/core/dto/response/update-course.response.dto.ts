import { CourseLanguages, CoursePriceCurrencies, CourseStatuses, CourseSubtitles } from "../../types";


interface UpdateCoursePriceResponseDTO {
	currency: CoursePriceCurrencies;
	value: number;
}

interface UpdateCourseCreatorResponseDTO {
	firstName: string;
	lastName: string;
	profilePicture: string | null;
	designation: string | null;
}

interface UpdateCourseRatingResponseDTO {
	value: number;
	totalCount: number;
}

interface UpdateCourseSectionLectureSubtitleResponseDTO {
	language: CourseSubtitles;
	url: string;
}

interface UpdateCourseSectionLectureResponseDTO {
	id: string;
	title: string;
	description: string;
	duration: number;
	link: string;
	thumbnail: string | null;
	subtitles: UpdateCourseSectionLectureSubtitleResponseDTO[];
	order: number;
}

interface UpdateCourseSectionResponseDTO {
	id: string;
	title: string;
	lectures: UpdateCourseSectionLectureResponseDTO[];
	lecturesCount: number;
	lecturesDuration: number;
	order: number;
}

interface UpdateCourseResponseDTO {
	id: string;
	status: CourseStatuses;
	title: string;
	description: string;
	category: string;
	rating: UpdateCourseRatingResponseDTO | null;
	totalStudents: number;
	creators: UpdateCourseCreatorResponseDTO[];
	lastUpdatedOn: Date;
	languages: CourseLanguages[];
	subtitles: CourseSubtitles[];
	materialsAndOffers: string[];
	price: UpdateCoursePriceResponseDTO;
	image: string;
	sections: UpdateCourseSectionResponseDTO[];
	totalSectionsCount: number;
	totalLecturesCount: number;
	totalDuration: number;
}


export {
	UpdateCourseResponseDTO
};