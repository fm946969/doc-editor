export class Subject {
    id: string;
    nameEn: string;
    nameZh: string;

    constructor(id: string, nameEn: string, nameZh: string) {
        this.id = id;
        this.nameEn = nameEn;
        this.nameZh = nameZh;
    }

    static CT = new Subject("CT", "Creative Technology", "創意科技科");
    static ICT = new Subject("ICT", "Information and Communication Technology", "資訊及通訊科技");

    static Subjects = {
        "CT": Subject.CT,
        "ICT": Subject.ICT
    }
}
