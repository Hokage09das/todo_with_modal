import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  deleteTodo,
  toggleTodo,
  modalDeleteTodo,
  isModal,
}) => {
  return (
    <div>
      {(!todos.length && <h1>TodoList is empty</h1>) || <h1>Todolist</h1>}
      {todos.map((todo, index) => {
        return (
          <TodoItem
            isModal={isModal}
            key={todo.id}
            number={index + 1}
            todos={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            modalDeleteTodo={modalDeleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
