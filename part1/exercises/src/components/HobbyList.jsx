import React from "react";
import classes from "./HobbyList.module.css";

class HobbyList extends React.Component {
  render() {
    const hobbies = ["CDL", "OSRS"];
    return (
      <div>
        <h3 className={classes.hobbyHeading}>My Hobbies</h3>
        <ol>
          <li className={classes.hobbyLink}>
            {" "}
            <a href="https://www.callofdutyleague.com/en-us/">{hobbies[0]}</a>
          </li>
          <li className={classes.hobbyLink}>
            <a href="https://oldschool.runescape.com">{hobbies[1]}</a>
          </li>
        </ol>
      </div>
    );
  }
}

export default HobbyList;
