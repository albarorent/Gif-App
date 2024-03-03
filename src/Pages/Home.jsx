import React, { useState } from "react";
import AddCategory from "../Components/AddCategory";
import GifGrid from "../Components/GifGrid";

export default function Home() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  const onDeleteCategory = () =>{
    
  }

  return (
    <>
      <div className="grid justify-center gap-8">
        <h1 className="text-3xl font-bold text-emerald-600">
          Todos los GIFS del mundo en un solo lugar.
        </h1>
        <p className="text-center font-semibold">Busca, mira y diviertete</p>
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      </div>
      <div>
        {categories.map((category) => (
          <GifGrid  key={category} category={category} />
        ))}
      </div>
    </>
  );
}
