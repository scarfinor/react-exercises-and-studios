import React from "react";
import recipedata from "./recipe.json";
import "./styling.css"; // Ensure CSS is imported

function AuthorInfo() {
  const recipeAuthor = (
    <div key={recipedata[0].author}>{recipedata[0].author}</div>
  );
  const recipeAuthorImage = (
    <img
      src={recipedata[0].authorImage}
      alt={recipedata[0].author}
      className="authorImage" // Apply CSS class for styling
    />
  );
  const recipeWebsite = (
    <a href={recipedata[0].website} target="_blank" rel="noopener noreferrer">
      {recipedata[0].website}
    </a>
  );

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image
