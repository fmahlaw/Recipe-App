// App.tsx


import React, { useState } from "react";
import { Recipe, useRecipeApp } from "./RecipeApp";

function App() {
  const { recipes, addRecipe, removeRecipe, searchRecipes } = useRecipeApp();
  const [newRecipe, setNewRecipe] = useState<Recipe>({
    title: "",
    ingredients: [],
    directions: [],
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleAddRecipe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addRecipe(newRecipe);
    setNewRecipe({
      title: "",
      ingredients: [],
      directions: [],
    });
  };

  const handleRemoveRecipe = (recipe: Recipe) => {
    removeRecipe(recipe);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecipes = searchRecipes(searchQuery);

  return (
    <div>
      <h1>My Recipe App</h1>
      <form onSubmit={handleAddRecipe}>
        <label>
          Title:
          <input
            type="text"
            value={newRecipe.title}
            onChange={(event) =>
              setNewRecipe({ ...newRecipe, title: event.target.value })
            }
          />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
      <input
        type="text"
        placeholder="Search recipes"
        value={searchQuery}
        onChange={handleSearch}
        />
      {filteredRecipes.length === 0 && <p>No recipes found.</p>}
      {filteredRecipes.map((recipe) => (
        <div key={recipe.title}>
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <ol>
            {recipe.directions.map((direction) => (
              <li key={direction}>{direction}</li>
            ))}
          </ol>
          <button onClick={() => handleRemoveRecipe(recipe)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;