"use strict";
// Recipe.ts
class Recipe {
    constructor(title, ingredients, directions) {
        this.title = title;
        this.ingredients = ingredients;
        this.directions = directions;
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
    removeIngredient(ingredient) {
        const index = this.ingredients.indexOf(ingredient);
        if (index !== -1) {
            this.ingredients.splice(index, 1);
        }
    }
    addDirection(direction) {
        this.directions.push(direction);
    }
    removeDirection(direction) {
        const index = this.directions.indexOf(direction);
        if (index !== -1) {
            this.directions.splice(index, 1);
        }
    }
}
// RecipeApp.ts
class RecipeApp {
    constructor() {
        this.recipes = [];
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
    }
    removeRecipe(recipe) {
        const index = this.recipes.indexOf(recipe);
        if (index !== -1) {
            this.recipes.splice(index, 1);
        }
    }
    getRecipes() {
        return this.recipes;
    }
    searchRecipes(query) {
        return this.recipes.filter((recipe) => recipe.title.toLowerCase().includes(query.toLowerCase()));
    }
    sortRecipesByTitle() {
        this.recipes.sort((a, b) => (a.title > b.title ? 1 : -1));
    }
}
