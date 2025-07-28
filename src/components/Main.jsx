import React, { useState } from "react";
import "./Main.css";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShow, setRecipeShow] = useState(false);

  const addIngredients = (formData) => {
    const newIngidient = formData.get("ingridient");
    setIngredients((prev) => [...prev, newIngidient.trim()]);
  };

  const gerRecipe = (e) => {
    e.preventDefault();
    setRecipeShow(!recipeShow);
  };

  return (
    <>
      <div className="main">
        <form action={addIngredients} className="form-css">
          <input type="text" placeholder="e.g red chilli" name="ingridient" />
          <button type="submit" className="btn-one">
            + Add ingredients
          </button>
        </form>
      </div>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} gerRecipe={gerRecipe} />
      )}
      {recipeShow && <ClaudeRecipe />}
    </>
  );
}

export default Main;
