import CategoryCard from "../cards/categoryCard";
import { CATEGORIES } from "../../constant";

const Category = () => {
  return (
    <section className="grid grid-cols-3 place-items-center gap-5">
      {CATEGORIES.map((categ) => (
        <CategoryCard key={categ.title} category={categ} />
      ))}
    </section>
  );
};

export default Category;
