import Data from "../data.json";
import { useState } from "react";

export default function MyProjects() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < Data.teams.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  const teams = Data.teams[index];

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <div>
        <h3>{teams.title}</h3>
        <p>
          <strong>Photographer:</strong> {teams.photographer}
        </p>
        <img
          src={teams.photoUrl}
          alt={teams.alt}
          style={{ width: "300px", height: "auto" }}
        />
        <p>
          <em>{teams.alt}</em>
        </p>
      </div>
    </div>
  );
}
