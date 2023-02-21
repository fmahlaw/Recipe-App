// App.tsx
import React, { useState } from "react";
import { useRecipeApp } from "./RecipeApp";
function App() {
    const { recipes, addRecipe, removeRecipe, searchRecipes } = useRecipeApp();
    const [newRecipe, setNewRecipe] = useState({
        title: "",
        ingredients: [],
        directions: [],
    });
    const [searchQuery, setSearchQuery] = useState("");
    const handleAddRecipe = (event) => {
        event.preventDefault();
        addRecipe(newRecipe);
        setNewRecipe({
            title: "",
            ingredients: [],
            directions: [],
        });
    };
    const handleRemoveRecipe = (recipe) => {
        removeRecipe(recipe);
    };
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };
    const filteredRecipes = searchRecipes(searchQuery);
    return (React.createElement("div", null,
        React.createElement("h1", null, "My Recipe App"),
        React.createElement("form", { onSubmit: handleAddRecipe },
            React.createElement("label", null,
                "Title:",
                React.createElement("input", { type: "text", value: newRecipe.title, onChange: (event) => setNewRecipe({ ...newRecipe, title: event.target.value }) })),
            React.createElement("button", { type: "submit" }, "Add Recipe")),
        React.createElement("input", { type: "text", placeholder: "Search recipes", value: searchQuery, onChange: handleSearch }),
        filteredRecipes.length === 0 && React.createElement("p", null, "No recipes found."),
        filteredRecipes.map((recipe) => (React.createElement("div", { key: recipe.title },
            React.createElement("h2", null, recipe.title),
            React.createElement("ul", null, recipe.ingredients.map((ingredient) => (React.createElement("li", { key: ingredient }, ingredient)))),
            React.createElement("ol", null, recipe.directions.map((direction) => (React.createElement("li", { key: direction }, direction)))),
            React.createElement("button", { onClick: () => handleRemoveRecipe(recipe) }, "Remove"))))));
}
export default App;
