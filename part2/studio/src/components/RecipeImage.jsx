import recipedata from "./recipe.json";

function RecipeImage() {
  return (
    <div className="recipeImage">
      <img src={recipedata[0].recipeImage} alt="Stovetop Mac and Cheese" />
    </div>
  );
}

export default RecipeImage;

//import json file for the data
//apply css for className recipeImage
