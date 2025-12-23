interface DocumentPageProps {
    pageNumber: number;
    footerInfo: string;
    footerAuthor: string;
}

export function DocumentPage(props: DocumentPageProps): JSX.Element {
    return (
        <div className="document-page">
            <div className="document-page-content">
                <div className="document-page-footer">
                    <div className="document-page-footer-info">{props.footerInfo}</div>
                    <div className="document-page-number">Page {props.pageNumber}</div>
                    <div className="document-page-footer-author">{props.footerAuthor}</div>
                </div>
            </div>
        </div>
    );
}