// RecipeApp.ts
import { useState } from "react";
export class RecipeApp {
    constructor() {
        this.recipes = [];
    }
    getRecipes() {
        return this.recipes;
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
    }
    removeRecipe(recipe) {
        const index = this.recipes.indexOf(recipe);
        if (index > -1) {
            this.recipes.splice(index, 1);
        }
    }
    searchRecipes(query) {
        return this.recipes.filter((recipe) => recipe.title.toLowerCase().includes(query.toLowerCase()));
    }
}
export function useRecipeApp() {
    const [recipes, setRecipes] = useState([]);
    function addRecipe(recipe) {
        setRecipes((prevRecipes) => [...prevRecipes, recipe]);
    }
    function removeRecipe(recipe) {
        setRecipes((prevRecipes) => prevRecipes.filter((prevRecipe) => prevRecipe !== recipe));
    }
    function searchRecipes(query) {
        return recipes.filter((recipe) => recipe.title.toLowerCase().includes(query.toLowerCase()));
    }
    return { recipes, addRecipe, removeRecipe, searchRecipes };
}
