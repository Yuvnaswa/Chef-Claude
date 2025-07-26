import React, { useState } from "react";
import "./Main.css";
function Main() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredients = (formData) => {
    const newIngidient = formData.get("ingridient");
    setIngredients((prev) => [...prev, newIngidient.trim()]);
  };

  return (
    <>
      <div className="main">
        <form
          action={addIngredients}
          className="form-css"
          //   onSubmit={handleSubmit}
        >
          <input type="text" placeholder="e.g red chilli" name="ingridient" />
          <button type="submit" className="btn-one">
            + Add ingredients
          </button>
        </form>
      </div>
      <div>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Main;
