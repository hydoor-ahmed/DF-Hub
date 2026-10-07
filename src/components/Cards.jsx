import data from "../data/df_commands.json";
import Card from "./Card";

const Cards = ({ search, category, lang }) => {
  const filteredData = data.filter((item) => {
    const matchesChategory =
      category && category.length > 0
        ? item.category.toLowerCase().includes(category.toLowerCase())
        || item.category_ar.includes(category)
        : true;

    const matchesSearch =
      search && search.length > 0
        ? item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase()) ||
          item.command.toLowerCase().includes(search.toLowerCase()) ||
          item.title_ar.includes(search) ||
          item.description_ar.includes(search)
        : true;

    return matchesChategory && matchesSearch;
  });

  return (
    <div>
      <div className="c_container">
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredData.map((item) => (
              <Card key={item.id || item.title} item={item} lang={lang} />
            ))}
          </div>
        ) : (
          <h1 className="text-center">No Results Found!</h1>
        )}
      </div>
    </div>
  );
};

export default Cards;
