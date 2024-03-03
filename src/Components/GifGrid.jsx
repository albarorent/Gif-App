import { useEffect, useState } from "react";
import { gefGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export default function GifGrid({ category }) {
  const [gif, setGif] = useState([]);

  const getImages = async () => {
    const res = await gefGifs(category);
    setGif(res);
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return (
    <div className="flex flex-col gap-5 pt-5">
      <h3 className="text-4xl font-semibold">{category}</h3>
      <button className="text-center bg-red-600 p-1 w-28 rounded-lg text-slate-100">
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
