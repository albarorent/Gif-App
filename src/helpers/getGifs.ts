export const gefGifs = async (category:string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ASmuPBF0o2gT0vge3J2oBvJeyzpMPWpt&q=${category}&limit=6`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img:ImageData) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};

interface ImageData {
  id: number;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}