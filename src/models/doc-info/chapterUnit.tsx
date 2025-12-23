export class ChapterUnit {
    chapterNum?: number;
    chapterTitle?: string;
    unitCode?: string;
    unitTitle?: string;

    constructor(chapterNum?: number, chapterTitle?: string, unitCode?: string, unitTitle?: string) {
        this.chapterNum = chapterNum;
        this.chapterTitle = chapterTitle;
        this.unitCode = unitCode;
        this.unitTitle = unitTitle;
    }

    getTitle(): string {
        if (this.chapterNum && this.unitCode && this.unitTitle) {
            return `CH.${this.chapterNum?.toString().padStart(2, '0')}　單元${this.unitCode}　${this.unitTitle}`;
        } else if (this.chapterNum && this.chapterTitle) {
            return `CH.${this.chapterNum?.toString().padStart(2, '0')}　${this.chapterTitle}`;
        } else {
            return "";
        }
    }

    getFooter(): string {
        if (this.chapterNum && this.unitCode) {
            return `ch${this.chapterNum.toString().padStart(2, '0')}}-unit${this.unitCode}`;
        } else if (this.chapterNum) {
            return `ch　${this.chapterNum.toString().padStart(2, '0')}}`;
        } else {
            return "";
        }
    }
}