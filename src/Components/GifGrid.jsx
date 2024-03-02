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
    <div className="flex flex-col gap-5">
      <h3 className="text-4xl font-semibold">{category}</h3>
      <div className="card-grid">
        {gif.map((gifs) => (
          <GifItem key={gifs.id} {...gifs} />
        ))}
      </div>
    </div>
  );
}
