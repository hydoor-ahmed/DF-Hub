import { useState } from "react";
import Cards from "./Cards";
import CategoryBtns from "./CategoryBtns";

const Landing = ({ lang }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <div className="c_container flex flex-col justify-center items-center h-[calc(100vh-150px)]">
        <h1 className="text-2xl md:text-4xl font-bold">
          {lang == "en"
            ? "Digital Forensics Linux 🐧"
            : "التحليل الجنائي الرقمي 🐧"}
        </h1>

        <input
          className="
          mt-6
          mb-8
          border-2
       border-border-color
          rounded-md
          px-1.5
          py-1
          md:w-1/2
          w-full
          focus:outline-2
       outline-primary/80
         placeholder:text-sm
        "
          type="text"
          placeholder={
            lang == "en"
              ? "Search (command, tool name, ...)"
              : "ألبحث (الاوامر, أسم الاداة,...)"
          }
          autoFocus
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        
          <CategoryBtns
            lang={lang}
            category={category}
            setCategory={setCategory}
          />
      </div>

      <Cards
        lang={lang}
        search={search}
        setSearch={setSearch}
        category={category}
      />
    </div>
  );
};

export default Landing;
