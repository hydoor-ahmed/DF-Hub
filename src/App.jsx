import { useEffect, useState } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

const App = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang"));

  useEffect(() => {
    const currentDir = lang == "en" ? "ltr" : "rtl";

    document.documentElement.dir = currentDir;
    document.documentElement.lang = lang;

    localStorage.setItem("lang", lang)
  }, [lang])

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <Landing lang={lang} />

      <footer>
        <h1 className="text-center text-sm text-gray-600 bg-secondary py-6 mt-6">
          By Error404 (Haidar Ahmed)
        </h1>
      </footer>
    </div>
  );
};

export default App;
