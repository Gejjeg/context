import React from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage ";

export class App extends React.Component {
    state = {
        language: "en",
    }

    changeLanguage = (event) => {
        this.setState({
            language: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <select value={this.state.language} onChange={this.changeLanguage}>
                    <option value="en">English</option>
                    <option value="it">Italiano</option>
                    <option value="or">Oron</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </div>
        )
    }
}