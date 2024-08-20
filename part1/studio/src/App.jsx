//import { useState } from "react";
import "./App.css";
import RecipeDescription from "./components/Description";
import RecipeIngredients from "./components/Ingredients";

function App() {
  return (
    <>
      <div className="App">
        <RecipeDescription />
        <RecipeIngredients />
      </div>
    </>
  );
}

export default App;
