import type { Category } from "../../types";
interface CategoryProps {
  category: Category;
}

const CategoryCard = (category: CategoryProps) => {
  return (
    <div className="relative w-full h-72 rounded-lg flex items-end justify-start p-5 border-2 border-white">
      <img
        src={category.category.image}
        alt="bg"
        className="absolute left-0 top-0 inset-0 w-full h-full rounded-lg"
      />
      <div className="absolute w-full h-full bg-linear-to-t from-black/75 to-transparent left-0 top-0 rounded-lg" />
      <div className="space-y-2 text-white z-10">
        <h1 className="text-xl font-semibold">{category.category.title}</h1>
        <p>{category.category.description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
