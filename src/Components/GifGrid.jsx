import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export default function GifGrid({ category, setCategories, categories }) {
  const { isLoading, gif } = useFetchGifs(category);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const onDeleteCategory = (categorie) => {
    const deleteCategorie = categories.filter((cat) => cat !== categorie);
    setCategories(deleteCategorie);
  };

  return (
    <div className="flex flex-col gap-5 pt-5">
      <h3 className="text-4xl font-semibold">{category}</h3>

      <button
        className="text-center bg-red-600 p-1 w-28 rounded-lg text-slate-100"
        onClick={() => onDeleteCategory(category)}
      >
        Borrar
      </button>
      <div className="card-grid">
        {gif.map((gifs) => (
          <GifItem key={gifs.id} {...gifs} />
        ))}
      </div>
    </div>
  );
}
