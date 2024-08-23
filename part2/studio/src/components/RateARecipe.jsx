let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  return (
    <div>
      {props.rating >= 1 && props.rating <= 5 ? GiveRating(props) : null}
    </div>
  );
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js
function GiveRating(props) {
  return <h3>{stars[props.rating - 1]}</h3>;
}
