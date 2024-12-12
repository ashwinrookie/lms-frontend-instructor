import { CourseLanguages, CourseSubtitles } from "../../types";


interface CreateCourseSectionLectureSubtitleRequestDTO {
	language: CourseSubtitles;
	url: string;
}

interface CreateCourseSectionLectureRequestDTO {
	title: string;
	description: string;
	link: string;
	subtitles: CreateCourseSectionLectureSubtitleRequestDTO[];
	order: number;
}

interface CreateCourseSectionRequestDTO {
	title: string;
	lectures: CreateCourseSectionLectureRequestDTO[];
	order: number;
}

interface CreateCoursePriceRequestDTO {
	currency: string;
	value: number;
}

interface CreateCourseRequestDTO {
	title: string;
	description: string;
	category: string;
	languages: CourseLanguages[];
	subtitles: CourseSubtitles[];
	learnings: CourseSubtitles[];
	materialsAndOffers: string[];
	price: CreateCoursePriceRequestDTO,
	image: string;
	sections: CreateCourseSectionRequestDTO[];
}

export {
	CreateCourseRequestDTO
};