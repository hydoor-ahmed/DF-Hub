import { useState } from "react";
import CategoryBtns from "./CategoryBtns";
import { ChevronDown, ChevronUp } from "lucide-react";

const Dropdown = ({ lang, category, setCategory }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="w-full md:w-1/2 mx-auto h-50 px-2 py-1 overflow-auto">
      <CategoryBtns lang={lang} category={category} setCategory={setCategory} />
    </div>
  );
};

export default Dropdown;
