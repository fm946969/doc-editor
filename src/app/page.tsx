import Image from "next/image";
import Document from "./doc/Document";
import { Semester } from "@/models/doc-info/semester";
import { DocumentInfo } from "@/models/doc-info/doc-info";
import { Subject } from "@/models/doc-info/subject";
import { DocumentType } from "@/models/doc-info/doc-type";
import { ChapterUnit } from "@/models/doc-info/chapterUnit";

import { PropsDocMcq, PropsDocParagraph, PropsDocSectionHeader, PropsDocStudentInfo, PropsDocTitle, PropsPageBreak, PropsScoreBox } from "./doc/Components/DocumentComponent";

export default function Home() {
  const info = new DocumentInfo(
    "Sample School",
    "2023-2024",
    Semester.Sem1,
    Subject.CT,
    DocumentType.Homework_A_Ans.code,
    new ChapterUnit(1, "Introduction to Creative Technology", "A", "Basics of CT"),
    "FWL"
  );

  const components = [
    new PropsDocTitle(info),
    new PropsDocStudentInfo(undefined, undefined, undefined, undefined),
    new PropsScoreBox(100),
    new PropsDocSectionHeader(1, "選擇題"),
    new PropsDocMcq(
      1,
      "What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?",
      [
        "Berlin",
        "London",
        "Paris",
        "Madrid"
      ],
      'B'
    ),
    new PropsDocMcq(
      1,
      "What is the capital of France?",
      [
        "Berlin",
        "London",
        "Paris",
        "Madrid"
      ],
      'B'
    ),
    new PropsDocMcq(
      1,
      "What is the capital of France?",
      [
        "Berlin",
        "London",
        "Paris",
        "Madrid"
      ],
      'B'
    ),
    new PropsDocMcq(
      1,
      "What is the capital of France?",
      [
        "Berlin",
        "London",
        "Paris",
        "Madrid"
      ],
      'B'
    ),
    new PropsDocMcq(
      1,
      "What is the capital of France?",
      [
        "Berlin",
        "London",
        "Paris",
        "Madrid"
      ],
      'B'
    ),
    new PropsPageBreak(),
    new PropsDocParagraph("This is another paragraph after a page break.")
  ];
  return (
    <Document info={info} components={components} />
  );
}
