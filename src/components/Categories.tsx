import { POST_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  categories: NonNullable<POST_QUERYResult>["categories"];
};

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <div key={category._id}>
      {category.title === "Announcements" ? (
        <span className="bg-red-50 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-red-700">
          {category.title}
        </span>
      ) : (
        <span className="bg-cyan-50 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700">
          {category.title}
        </span>
      )}
    </div>
  ));
}
