// Recipe.ts

class Recipe {
    public title: string;
    public ingredients: string[];
    public directions: string[];
  
    constructor(title: string, ingredients: string[], directions: string[]) {
      this.title = title;
      this.ingredients = ingredients;
      this.directions = directions;
    }
  
    public addIngredient(ingredient: string): void {
      this.ingredients.push(ingredient);
    }
  
    public removeIngredient(ingredient: string): void {
      const index = this.ingredients.indexOf(ingredient);
      if (index !== -1) {
        this.ingredients.splice(index, 1);
      }
    }
  
    public addDirection(direction: string): void {
      this.directions.push(direction);
    }
  
    public removeDirection(direction: string): void {
      const index = this.directions.indexOf(direction);
      if (index !== -1) {
        this.directions.splice(index, 1);
      }
    }
  }
  
  // RecipeApp.ts
  
  class RecipeApp {
    private recipes: Recipe[];
  
    constructor() {
      this.recipes = [];
    }
  
    public addRecipe(recipe: Recipe): void {
      this.recipes.push(recipe);
    }
  
    public removeRecipe(recipe: Recipe): void {
      const index = this.recipes.indexOf(recipe);
      if (index !== -1) {
        this.recipes.splice(index, 1);
      }
    }
  
    public getRecipes(): Recipe[] {
      return this.recipes;
    }
  
    public searchRecipes(query: string): Recipe[] {
      return this.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  
    public sortRecipesByTitle(): void {
      this.recipes.sort((a, b) => (a.title > b.title ? 1 : -1));
    }
  }
  