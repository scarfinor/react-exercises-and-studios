import styles from "./Description.module.css";
import React from "react";

function RecipeAuthor() {
  let authorLink = "https://pinchofyum.com";
  let authorPhoto =
    "https://pinchofyum.com/wp-content/assets/images/home-lindsay-kitchen-380x480.jpg";
  let authorName = "Lindsay Foodlady";
  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Reasonable alt text"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Pinch of Yum</a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>BBQ Jackfruit Sandwiches</h1>
          <p>
            These BBQ Jackfruit Sandwiches feature a “meaty” mix of jackfruit
            and chickpeas tossed in spices, garlic, and a bit of BBQ sauce. Pile
            it all on top of a toasted bun with slaw and dinner is ready!
          </p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
