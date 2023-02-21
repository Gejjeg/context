import React from "react";
import { LanguageContext } from "./LanguageContext";

const text = {
    en: {
        lang: "Good Morning"
    },
    it: {
        lang: "Buongiorno",
    },
    or: {
        lang: "Alagha"
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