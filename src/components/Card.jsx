import { Dot, Info, MoveRight } from "lucide-react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("bash", bash);
const Card = ({ item, lang }) => {
  return (
    <div
      key={item.id}
      className="w-full max-w-full border border-border-color rounded-md p-2 flex flex-col justify-between"
    >
      <div>
        <h1 className="text-xl mb-4">
        {lang == "en" ? item.title : item.title_ar}
      </h1>
      <div className=" relative">
        <SyntaxHighlighter
          customStyle={{ background: "#10141E" }}
          dir="ltr"
          language="bash"
          style={vscDarkPlus}
          className="rounded-md bg-secondary"
        >
          {item.command}
        </SyntaxHighlighter>
        <span className="text-gray-600 absolute -top-2 left-2 text-xs px-2 bg-body rounded-md">Command</span>
      </div>

      {item.params.length > 0 && (
        <div
          dir="ltr"
          key={item.params[0]?.label}
          className="bg-secondary px-2 py-1 text-sm rounded-md flex flex-col gap-y-2 mt-4 mb-2 relative pt-4"
        >
        <span className="text-gray-600 absolute -top-2 left-2 text-xs px-2 bg-body rounded-md">Params</span>

          {/* Param #1 */}
          <div>
            <div className="flex items-center gap-1.5">
              <Dot size={20} className="animate-pulse text-primary -mr-2" />
              {"{"}
              {item.params[0]?.key}
              {"}"} <MoveRight className="text-primary" size={12} />
              <h1>
                {lang == "en"
                  ? item.params[0]?.label
                  : item.params[0]?.label_ar}
              </h1>
            </div>

            <div className="flex items-center gap-x-1.5 ml-4 text-unfocused">
              └── {lang == "en" ? "Default" : "القيمة الافتراضية"}{" "}
              <MoveRight size={12} />
              {item.params[0]?.default}
            </div>
          </div>
          
          {/* Param #2 */}
          {item.params.length > 1 && (
            <div>
              <div className="flex items-center gap-1.5 mt-2">
                <Dot size={20} className="animate-pulse text-primary -mr-2" />
                {"{"}
                {item.params[1]?.key}
                {"}"} <MoveRight className="text-primary" size={12} />
                <h1>
                  {lang == "en"
                    ? item.params[1]?.label
                    : item.params[1]?.label_ar}
                </h1>
              </div>
              <div className="flex items-center gap-x-1.5 ml-4 text-unfocused">
                └── {lang == "en" ? "Default" : "القيمة الافتراضية"}{" "}
                <MoveRight size={12} />
                {item.params[0]?.default}
              </div>
            </div>
          )}
        </div>
      )}

      <p className="mt-1 text-unfocused flex gap-1">
        <Info size={16} className="text-primary mt-1" />{" "}
        {lang == "en" ? item.description : item.description_ar}
      </p>
      </div>

      <h1 className="bg-secondary px-2 py-1 rounded-md text-xs mt-2 w-fit">
        {lang == "en" ? item.category : item.category_ar}
      </h1>
    </div>
  );
};

export default Card;
