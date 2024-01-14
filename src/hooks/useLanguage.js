import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import { languages } from "../utils/translate";

function useLanguage() {
    const { language } = useContext(LanguageContext);
    return (text) => {
        let lang = languages[language];
        return lang[text] || text;
    };
}

export default useLanguage;
