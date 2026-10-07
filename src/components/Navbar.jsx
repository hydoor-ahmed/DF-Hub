import { Languages } from "lucide-react";

const Navbar = ({ lang, setLang }) => {

  return (
    <div className="bg-secondary border-b border-border-color shadow-2xl shadow-primary/20">
      <div className={`c_container py-4 flex ${lang == "ar" && 'flex-row-reverse'} justify-between items-center`}>
        <h1>
          DF <span className="text-primary">HUB</span>
        </h1>
        <button
        dir="ltr"
          className="flex items-center gap-1 border border-border-color px-1.5 py-0.5 rounded-md cursor-pointer text-unfocused hover:text-white transition duration-300 text-sm"
          onClick={() => setLang((prev) => (prev == "ar" ? "en" : "ar"))}
        >
          <Languages size={16} className="text-primary" /> {lang == "en" ? "العربية" : "English"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
