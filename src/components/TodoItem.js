import React from "react";
import Button from "./button/Button";
import styles from "./TodoItem.module.css";

const TodoItem = ({
  todos,
  deleteTodo,
  toggleTodo,
  number,
  modalDeleteTodo,
  isModal,
}) => {
  return (
    <>
      <div
        className={`${styles.todoItem} ${
          todos.isChecked ? styles.completed : ""
        }`}
      >
        <div>
          <strong>{number}.</strong> {todos.title}-{todos.time}
        </div>
        <div>
          <Button onClick={() => deleteTodo(todos.id)}>delete</Button>
          <Button onClick={() => toggleTodo(todos.id)}>complited</Button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
