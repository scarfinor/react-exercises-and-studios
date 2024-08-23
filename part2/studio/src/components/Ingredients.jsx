import recipedata from "./recipe.json";

function IngredientList() {
  const ingredients = recipedata[0].ingredients;
  const listing = (ingredients) => {
    return ingredients.map((item, index) => <li key={index}>{item}</li>);
  };
  return (
    <div>
      <h3>Ingredients</h3>
      {
        <ul>
          <ol>{listing(ingredients)}</ol>
        </ul>
      }
    </div>
  );
}

export default IngredientList;

//import json file for the data
//use a nested map to get inside the inner array
