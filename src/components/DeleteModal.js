import React from "react";
import ReactDOM from "react-dom";
import styles from "./DeleteModal.module.css";

const DeleteModal = ({ children, active }) => {
  return ReactDOM.createPortal(
    <div
      className={
        active ? `${styles.deleteTodo} ${styles.active}` : styles.deleteTodo
      }
    >
      <div className={styles.deleteTodo_content}>{children}</div>
    </div>,
    document.getElementById("deleteTodo_modal"),
  );
};

export default DeleteModal;
