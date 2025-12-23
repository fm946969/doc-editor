import { ChapterUnit } from "./chapterUnit";
import { Subject } from "./subject";
import { Semester } from "./semester";
import { DocumentType } from "./doc-type";

export class DocumentInfo {
    schoolName: string;
    academicYear: string;
    semester: Semester;
    subject: Subject;
    docTypeCode: number;
    chapterUnit: ChapterUnit;
    author: string;

    constructor(
        schoolName: string,
        academicYear: string,
        semester: Semester,
        subject: Subject,
        docTypeCode: number,
        chapterUnit: ChapterUnit,
        author: string
    ) {
        this.schoolName = schoolName;
        this.academicYear = academicYear;
        this.semester = semester;
        this.subject = subject;
        this.docTypeCode = docTypeCode;
        this.chapterUnit = chapterUnit;
        this.author = author;
    }

    getSchoolName() {
        return this.schoolName;
    }

    getSubjectInfo() {
        return `${this.academicYear}　${this.semester.nameZh}　${this.subject.nameZh}`;
    }

    getDocumentTitle() {
        return this.chapterUnit.getTitle();
    }

    getFooterInfo() {
        return `${this.academicYear}[${this.semester.nameEn}]-${this.subject.id}-${this.chapterUnit.getFooter()}-${DocumentType.getByCode(this.docTypeCode).nameZh}`;
    }

    getAuthorInfo() {
        return `${this.academicYear} > ${this.author}`;
    }
}
