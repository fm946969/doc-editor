export class Semester {
    semesterNumber: number;
    nameEn: string;
    nameZh: string;

    constructor(semesterNumber: number, nameEn: string, nameZh: string) {
        this.semesterNumber = semesterNumber;
        this.nameEn = nameEn;
        this.nameZh = nameZh;
    }

    static Sem1 = new Semester(1, "Semester 1", "上學期");
    static Sem2 = new Semester(2, "Semester 2", "下學期");
    static Semesters = {
        1: Semester.Sem1,
        2: Semester.Sem2
    }
}