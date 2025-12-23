import { DocumentInfo } from "@/models/doc-info/doc-info";

export function DocumentTitle(info: DocumentInfo): JSX.Element {
    return (
        <div className="document-title">
            {info.getSchoolName()}<br />
            {info.getSubjectInfo()}<br />
            {info.getDocumentTitle()}
        </div>
    )
};