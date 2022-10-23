import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ active, children }) => {
  return ReactDOM.createPortal(
    <div className={active ? `${styles.modal} ${styles.active}` : styles.modal}>
      <div className={styles.modal_content}>{children}</div>
    </div>,
    document.getElementById("addTodo_modal"),
  );
};

export default Modal;
