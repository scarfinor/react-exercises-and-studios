import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";

function Button(props) {
  const saveButton = props.saveButton;
  return <div>{saveButton ? <SaveButton /> : <ClickedButton />}</div>;
}

export default Button;

//need to import SaveButton and ClickedButton
//create conditional for these buttons
//import styling
