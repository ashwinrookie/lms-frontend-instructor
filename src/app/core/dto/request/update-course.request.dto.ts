import { CourseLanguages, CourseSubtitles } from "../../types";


interface UpdateCourseSectionLectureSubtitleRequestDTO {
	language: CourseSubtitles;
	url: string;
}

interface UpdateCourseSectionLectureRequestDTO {
	id: string;
	title: string;
	description: string;
	link: string;
	subtitles: UpdateCourseSectionLectureSubtitleRequestDTO[];
	order: number;
}

interface UpdateCourseSectionRequestDTO {
	id: string;
	title: string;
	lectures: UpdateCourseSectionLectureRequestDTO[];
	order: number;
}

interface UpdateCoursePriceRequestDTO {
	currency: string;
	value: number;
}

interface UpdateCourseRequestDTO {
	id: string;
	title: string;
	description: string;
	category: string;
	languages: CourseLanguages[];
	subtitles: CourseSubtitles[];
	learnings: CourseSubtitles[];
	materialsAndOffers: string[];
	price: UpdateCoursePriceRequestDTO;
	image: string;
	sections: UpdateCourseSectionRequestDTO[];
}

export {
	UpdateCourseRequestDTO
};