import React from "react";
import "../UI/Card.css";

const Card = (props) => {
  const classes = `card ${props.className}`;

  return <aside className={classes}>{props.children}</aside>;
}

export default Card;
