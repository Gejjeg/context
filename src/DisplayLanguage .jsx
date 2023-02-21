import React from "react";
import { LanguageContext } from "./LanguageContext";

const text = {
    en: {
        lang: "English"
    },
    it: {
        lang: "Italiano",
    },
    or: {
        lang: "Oron"
    }
}

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <div>
                <LanguageContext.Consumer>
                    { language => {
                        return <h1>{text[language].lang} {this.props.name}</h1>

                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}