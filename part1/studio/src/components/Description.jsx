import styles from "Description.css";

export default function RecipeAuthor() {
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
