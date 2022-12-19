import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={classes.modal}>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.content}
          </h5>
          <LoadingSpinner />
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
