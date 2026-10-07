import data from "../data/df_commands.json";

const CategoryBtns = ({ category, setCategory, lang }) => {
  const handle_category_btn = (text) => {
    if (category == text) {
      setCategory("");
    } else {
      setCategory(text);
    }
  };

  const uniqueCategories = [
    ...new Set(
      data.map((cmd) => (lang == "en" ? cmd.category : cmd.category_ar)),
    ),
  ];

  return (
    <ul className="lg:w-full md:w-1/2 mx-auto h-50 px-2 py-1 overflow-auto lg:overflow-visible hidden-scrollbar inset-shadow-b-sm inset-shadow-lime-600 lg:shadow-none grid grid-cols-1 lg:grid-cols-5 items-center justify-items-center gap-2">
      {uniqueCategories.map((cate) => (
        <li key={cate} className="h-full w-full">
          <button
            className={`
              group
              ${category == cate ? "border-primary/60 shadow-2xl shadow-primary/50 text-white" : "border-border-color"}
            bg-secondary
              border
            border-border-color
              rounded-md
              py-1.5
              px-2
              md:px-0
            text-unfocused
            hover:text-white
              transition
              duration-300
              cursor-pointer
              h-full
              w-full
              text-sm
            `}
            onClick={() => handle_category_btn(cate)}
          >
            {cate}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryBtns;
