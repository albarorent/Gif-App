import React, { useState } from "react";

export default function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState([]);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="search"
        name="buscar"
        placeholder="Buscar gifs"
        className="w-full p-2 border border-slate-300 rounded-md"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
