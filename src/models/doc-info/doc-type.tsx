export class DocumentType {
    code: number;
    nameEn: string;
    nameZh: string;

    constructor(code: number, nameEn: string, nameZh: string) {
        this.code = code;
        this.nameEn = nameEn;
        this.nameZh = nameZh;
    }

    static Ppt = new DocumentType(0, "PPT", "教學簡報");

    static LectureNotes_A_Ans = new DocumentType(100, "Notes(A)[Ans]", "課堂筆記（A）[答案]");
    static LectureNotes_A = new DocumentType(110, "Notes(A)", "課堂筆記（A）");
    static LectureNotes_B_Ans = new DocumentType(120, "Notes(B)[Ans]", "課堂筆記（B）[答案]");
    static LectureNotes_B = new DocumentType(130, "Notes(B)", "課堂筆記（B）")

    static Homework_A_Ans = new DocumentType(200, "Homework(A)[Ans]", "家課工作紙（A）[答案]");
    static Homework_A = new DocumentType(210, "Homework(A)", "家課工作紙（A）");
    static Homework_B_Ans = new DocumentType(220, "Homework(B)[Ans]", "家課工作紙（B）[答案]")
    static Homework_B = new DocumentType(230, "Homework(B)", "家課工作紙（B）");

    static Quiz_A_Ans = new DocumentType(300, "Quiz(A)[Ans]", "小測（A）[答案]");
    static Quiz_A = new DocumentType(310, "Quiz(A)", "小測（A）");
    static Quiz_B_Ans = new DocumentType(320, "Quiz(B)[Ans]", "小測（B）[答案]")
    static Quiz_B = new DocumentType(330, "Quiz(B)", "小測（B）");

    static Test_A_Ans = new DocumentType(400, "Test(A)[Ans]", "章測（A）[答案]");
    static Test_A = new DocumentType(410, "Test(A)", "章測（A）");
    static Test_B_Ans = new DocumentType(420, "Test(B)[Ans]", "章測（B）[答案]")
    static Test_B = new DocumentType(430, "Test(B)", "章測（B）");

    static Exam_A_Ans = new DocumentType(500, "Exam(A)[Ans]", "考卷（A）[答案]");
    static Exam_A = new DocumentType(510, "Exam(A)", "考卷（A）");
    static Exam_B_Ans = new DocumentType(520, "Exam(B)[Ans]", "考卷（B）[答案]")
    static Exam_B = new DocumentType(530, "Exam(B)", "考卷（B）");

    static DocumentTypes: { [nameZh: string]: DocumentType } = {
        [DocumentType.Ppt.nameZh]: DocumentType.Ppt,
        [DocumentType.LectureNotes_A_Ans.nameZh]: DocumentType.LectureNotes_A_Ans,
        [DocumentType.LectureNotes_A.nameZh]: DocumentType.LectureNotes_A,
        [DocumentType.LectureNotes_B_Ans.nameZh]: DocumentType.LectureNotes_B_Ans,
        [DocumentType.LectureNotes_B.nameZh]: DocumentType.LectureNotes_B,
        [DocumentType.Homework_A_Ans.nameZh]: DocumentType.Homework_A_Ans,
        [DocumentType.Homework_A.nameZh]: DocumentType.Homework_A,
        [DocumentType.Homework_B_Ans.nameZh]: DocumentType.Homework_B_Ans,
        [DocumentType.Homework_B.nameZh]: DocumentType.Homework_B,
        [DocumentType.Quiz_A_Ans.nameZh]: DocumentType.Quiz_A_Ans,
        [DocumentType.Quiz_A.nameZh]: DocumentType.Quiz_A,
        [DocumentType.Quiz_B_Ans.nameZh]: DocumentType.Quiz_B_Ans,
        [DocumentType.Quiz_B.nameZh]: DocumentType.Quiz_B,
        [DocumentType.Test_A_Ans.nameZh]: DocumentType.Test_A_Ans,
        [DocumentType.Test_A.nameZh]: DocumentType.Test_A,
        [DocumentType.Test_B_Ans.nameZh]: DocumentType.Test_B_Ans,
        [DocumentType.Test_B.nameZh]: DocumentType.Test_B,
        [DocumentType.Exam_A_Ans.nameZh]: DocumentType.Exam_A_Ans,
        [DocumentType.Exam_A.nameZh]: DocumentType.Exam_A,
        [DocumentType.Exam_B_Ans.nameZh]: DocumentType.Exam_B_Ans,
        [DocumentType.Exam_B.nameZh]: DocumentType.Exam_B,
    };

    static getByCode(code: number): DocumentType {
        for (const key in DocumentType.DocumentTypes) {
            const docType = DocumentType.DocumentTypes[key];
            if (docType.code === code) {
                return docType;
            }
        }
        throw new Error(`DocumentType not found for code: ${code}`);
    }
}
