import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.btn}>
      Моя кнопка
    </button>
  );
};

export default Button;