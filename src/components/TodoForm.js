import React, { useState } from "react";
import Button from "./button/Button";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addNewTodo, setModal }) => {
  const [todo, setTodo] = useState({ title: "", time: "" });
  const addTodo = (e) => {
    e.preventDefault();

    if (!todo.title.trim().length || !todo.time.trim().length) {
      setModal(true);
    } else {
      addNewTodo(todo);
    }
    setTodo({ title: "", time: "" });
  };

  return (
    <form
      onSubmit={addTodo}
      className={styles.formTodo}
    >
      <input
        value={todo.title}
        type='text'
        placeholder='Write your todo'
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        value={todo.time}
        type='time'
        placeholder='Write your todo'
        onChange={(e) => setTodo({ ...todo, time: e.target.value })}
      />
      <Button
        style={{ color: "red", backgroundColor: "gray", margin: "10px 0 0 0" }}
      >
        Add New Todo
      </Button>
    </form>
  );
};

export default TodoForm;
