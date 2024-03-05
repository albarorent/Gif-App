import { useEffect, useState } from "react";
import { gefGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [gif, setGif] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async () => {
    const res = await gefGifs(category);
    setGif(res);
    setisLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return {
    isLoading,
    gif,
  };
};
