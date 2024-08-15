import React from "react";
import classes from "./BookList.module.css";

export default function BookList() {
  let pageTitle = "Latest Book Releases";
  let book1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YbUT1Gx0kdUAtIxX_TVD9QG2Dxmdl0LXXJTEVMYi4JxbpOcTEIAdxitG_Q&s=5";
  let book2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNyOsJ25_weLzWagjrevvALmSMzO-CZxuj8NtbR9AerFyRAEmD47MHqOyKbTTNGTXwGqLk2A&s=0";
  let book3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkkaJzYbpWTyHxA5rA2ORuFYOMrr57-jLjFnaEPcf5UrF18tYUL0Y9avxcg&s=5";

  return (
    <div className={classes.div}>
      <h3 className={classes.bookHeading}>{pageTitle}</h3>
      <img src={book1} alt="Animal Farm by George Orwell" />
      <img src={book2} alt="Don Quixote by Miguel de Cervantes" />
      <img src={book3} alt="Dracula by Bram Stoker" />
    </div>
  );
}
