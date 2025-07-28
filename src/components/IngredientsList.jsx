import React from "react";

export default function IngredientsList(props) {
  return (
    <section className="section-container">
      <h2>Ingredients on hand:</h2>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      {props.ingredients.length > 2 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list ingredients.</p>
          </div>
          <button onClick={props.gerRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
