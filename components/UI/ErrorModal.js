import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";
const backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};
const ModaOverlay = (props) => {
  <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>;
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModaOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlate-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
