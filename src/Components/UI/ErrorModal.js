import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onErrorHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.errorTitle}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onErrorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
