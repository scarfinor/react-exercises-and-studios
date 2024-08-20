import styles from "./Description.module.css";

function RecipePhoto() {
  return (
    <img
      src="https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/BBQ-Jackfruit-Sandwiches-2.jpg"
      alt="recipe photo"
      className={styles.imageUpdates}
    />
  );
}

export default RecipePhoto;
