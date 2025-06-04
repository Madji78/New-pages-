import { useState } from "react";
import { useTranslation } from "react-i18next";
import './index.css';

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("bg");

  const toggleLang = () => {
    const newLang = lang === "bg" ? "en" : "bg";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <div className="text-center p-4">
      <header className="text-2xl font-bold mb-2">{t("welcome")}</header>
      <p className="mb-4">{t("intro")}</p>
      <button onClick={toggleLang} className="px-4 py-2 bg-blue-500 text-white rounded">
        {lang === "bg" ? "EN" : "BG"}
      </button>
    </div>
  );
}

export default App;
