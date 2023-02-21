// RecipeApp.ts

import { useState } from "react";

export type Recipe = {
  title: string;
  ingredients: string[];
  directions: string[];
};

export class RecipeApp {
  private recipes: Recipe[];

  constructor() {
    this.recipes = [];
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
  }

  removeRecipe(recipe: Recipe): void {
    const index = this.recipes.indexOf(recipe);
    if (index > -1) {
      this.recipes.splice(index, 1);
    }
  }

  searchRecipes(query: string): Recipe[] {
    return this.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}

export function useRecipeApp() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  function addRecipe(recipe: Recipe) {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  }

  function removeRecipe(recipe: Recipe) {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((prevRecipe) => prevRecipe !== recipe)
    );
  }

  function searchRecipes(query: string) {
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return { recipes, addRecipe, removeRecipe, searchRecipes };
}
