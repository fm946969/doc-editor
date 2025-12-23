import { DocumentInfo } from "@/models/doc-info/doc-info";
import { JSX } from "react/jsx-dev-runtime";
import { json } from "stream/consumers";

export class PropsDocComponent {
    id: string;
    type: string;

    constructor(type: string) {
        this.id = crypto.randomUUID();
        this.type = type;
    }
}

export class PropsPageBreak extends PropsDocComponent {
    constructor() {
        super("page-break");
    }
}

export function PageBreak(): JSX.Element {
    return (
        <div className="page-break" />
    );
}

export class PropsDocTitle extends PropsDocComponent {
    info: DocumentInfo;

    constructor(info: DocumentInfo) {
        super("title"   );
        this.info = info;
    }
}

export function DocTitle(props: PropsDocTitle): JSX.Element {
    return (
        <div className="document-title" key={props.id}>
            {props.info.getSchoolName()}<br />
            {props.info.getSubjectInfo()}<br />
            {props.info.getDocumentTitle()}
        </div>
    )
};

export class PropsDocStudentInfo extends PropsDocComponent {
    name: string | undefined;
    className: string | undefined;
    classNumber: number | undefined;
    date: string | undefined;

    constructor(name: string | undefined = undefined, className: string | undefined = undefined, classNumber: number | undefined = undefined, date: string | undefined = undefined) {
        super("student-info");
        this.name = name;
        this.className = className;
        this.classNumber = classNumber;
        this.date = date;
    }
}

export function DocStudentInfo(props: PropsDocStudentInfo): JSX.Element {
    return (
        <div className="document-student-info" key={props.id}>
            <div className="document-student-label">姓名：</div>
            <div className="document-student-field document-student-field-name">{props.name}</div>
            <div className="document-student-label">班別：</div>
            {
                props.classNumber? (
                    <div className="document-student-field document-student-field-class">{props.className}（{props.classNumber}）</div>
                ) : (
                    <div className="document-student-field document-student-field-class">{props.className}（　　）</div>
                )
            }
            <div className="document-student-label">日期：</div>
            <div className="document-student-field document-student-field-date">{props.date}</div>
        </div>
    )
}

export class PropsScoreBox extends PropsDocComponent {
    score?: string;
    maxScore: number;
    constructor(maxScore: number) {
        super("score-box");
        this.maxScore = maxScore;
    }
}

export function ScoreBox(props: PropsScoreBox): JSX.Element {
    return (
        <div className="document-score-box" key={props.id}>
            <div style={{position: "relative"}}>
                {
                    props.score ? (
                        <div className="document-score-box-score">{props.score}</div>
                    ) : (
                        <div className="document-score-box-score">參考答案</div>
                    )
                }
                <div className="document-score-box-score-max">{props.maxScore}</div>
            </div>

            <label style={{ display: "inline-block", width: "20mm"}}>
                <input type="checkbox" style={{ marginRight: "5mm" }} />
                遲交
            </label>
            <p style={{ display: "inline-block", textOverflow: "ellipsis"}}>批改日期：
                <div className="document-student-field document-student-field-date" style={{ display: "inline-block", height: "4mm", width: "45mm", marginLeft: "3mm"}}/>
            </p>
        </div>
    )
}

export class PropsDocSectionHeader extends PropsDocComponent {
    index: number;
    text: string;
    constructor(index: number, text: string) {
        super("section-header");
        this.index = index;
        this.text = text;
    }
}

export function DocSectionHeader(props: PropsDocSectionHeader): JSX.Element {
    const num = [
        "零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"
    ]
    return (
        <div className="document-section-header" key={props.id}>
            {num[props.index]}、　{props.text}
        </div>
    );
}

export class PropsDocParagraph extends PropsDocComponent {
    text: string;

    constructor(text: string) {
        super("paragraph");
        this.text = text;
    }
}
export function DocParagraph(props: PropsDocParagraph): JSX.Element {
    return (
        <div className="document-paragraph" key={props.id}>
            {props.text}
        </div>
    );
}

export class PropsDocQuestion extends PropsDocComponent {
    questionNumber: number;
    question: string;
    constructor(questionNumber: number, question: string) {
        super("question");
        this.questionNumber = questionNumber;
        this.question = question;
    }
}

export class PropsDocMcq extends PropsDocQuestion {
    choices: string[];
    correctAnswer: string;

    constructor(questionNumber: number, question: string, choices: string[], correctAnswer: string) {
        super(questionNumber, question);
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }
}

export class PropsFillInBlankAnswer {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

export function DocFillInBlankAnswer(props: PropsFillInBlankAnswer): JSX.Element {
    return (
        <u className="document-fill-in-blank-answer">{props.content}</u>
    );
}

export class PropsExplanationBox extends PropsDocComponent {
    explanation: string;
    constructor(explanation: string) {
        super("explanation-box");
        this.explanation = explanation;
    }
}

export function ExplanationBox(props: PropsExplanationBox): JSX.Element {
    return (
        <div className="document-explanation-box hidden" key={props.id} onLoad={(evt) => {
            evt.currentTarget.parentElement?.addEventListener("click", (evtClick) => {
                // get children of type document-explanation-box
                evt.currentTarget.querySelector(".document-explanation-box")?.classList.toggle("hidden");
            })
        }}>
            <div className="document-explanation-box-close" onClick={(evt) => {
                evt.currentTarget.parentElement?.classList.toggle("hidden")
            }}>[x]</div>
            {props.explanation}
        </div>
    );
}

export class PropsDocFillInTheBlank extends PropsDocQuestion {
    blanks: number;

    constructor(questionNumber: number, question) {
        super(questionNumber, question);
    }

    countBlanks(): number {
        // regex to count number of <ans></ans> in question
        const regex = /<ans><\/ans>/g;
        const matches = this.question.match(regex);
        return matches ? matches.length : 0;
    }
}

export function DocMcq(props: PropsDocMcq): JSX.Element {
    return (
        <div className="document-mcq" key={props.id}>
            <span className="document-mcq-question-number">{props.questionNumber}.</span>
            <span className="document-mcq-question can-highlight">{props.question}</span>
            
            <ol className="document-mcq-choices" type="A">
                {props.choices.map((choice, index) => (
                    <li key={index} className="document-mcq-choice can-highlight">
                        {choice}
                    </li>
                ))}
            </ol>
            <div className="document-mcq-answer-box">
                {props.correctAnswer}
            </div>
        </div>
    );
}

export interface DocumentComponentFactoryProps {
    component: PropsDocTitle | PropsDocParagraph | PropsDocMcq | PropsPageBreak;
}

export function DocumentComponentFactory({ id, props }: { id: string, props: PropsDocComponent }): JSX.Element {
    if(props instanceof PropsPageBreak) {
        return (
            <PageBreak key={id} />
        );
    }
    // if props is instanceof TitleComponent
    if (props instanceof PropsDocTitle) {
        return (
            <DocTitle key={id} {...props} />
        );
    }

    if (props instanceof PropsScoreBox) {
        return (
            <ScoreBox key={id} {...props} />
        );
    }

    if (props instanceof PropsDocStudentInfo) {
        return (
            <DocStudentInfo key={id} {...props} />
        );
    }

    if (props instanceof PropsDocSectionHeader) {
        return (
            <DocSectionHeader key={id} {...props} />
        );
    }

    if (props instanceof PropsDocParagraph) {
        return (
            <DocParagraph key={id} {...props} />
        );
    }

    if (props instanceof PropsDocMcq) {
        return (
            <DocMcq key={id} {...props} />
        );
    }

    return (
        <div>Unknown component type: {JSON.stringify(props)}</div>
    )
}