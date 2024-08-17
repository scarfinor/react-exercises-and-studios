import "./styles.css";

function Button() {
  function onLearnMore() {
    window.alert("Splish SPlash");
  }

  return <button onClick={onLearnMore}>Learn More</button>;
}

export default Button;
