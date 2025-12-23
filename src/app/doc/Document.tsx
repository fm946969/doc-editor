import { DocumentInfo } from "@/models/doc-info/doc-info";
import { DocumentComponentFactory, PropsDocComponent, PropsPageBreak } from "./Components/DocumentComponent";
import { JSX } from "react";

export default async function Document({ info, components }: { info: DocumentInfo, components: PropsDocComponent[] }): Promise<JSX.Element> {
    const pages = [];
    let newPage: PropsDocComponent[] = [];
    for (const component of components) {
        if (component instanceof PropsPageBreak) {
            pages.push(newPage);
            newPage = [];
        } else {
            newPage.push(component);
        }
    }
    if (newPage.length > 0) {
        pages.push(newPage);
    }

    return (
        <div className="document">
            {
                pages.map((page, index) => (
                    <div key={index}>
                        <div className="document-page">
                            <div className="document-content">
                                {page.map((component) => (
                                    <DocumentComponentFactory key={component.id} id={component.id} props={component} />
                                ))}

                                <div className="document-footer">
                                    <div className="document-footer-line">
                                        <span className="document-footer-info">{info.getFooterInfo()}</span>
                                        <span className="document-footer-page-number">- {index + 1} -</span>
                                        <span className="document-footer-author">{info.getAuthorInfo()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="document-page-break" key={`page-break-${index}`}>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}