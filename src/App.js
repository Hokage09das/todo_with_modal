import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import DeleteModal from "./components/DeleteModal";
import Modal from "./components/Modal";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const raw = JSON.parse(localStorage.getItem("todo-task"));
function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Dastan", time: "20.01" },
  ]);
  const [modalActive, setModalActive] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const addNewTodoHandler = (todo) => {
    const newTodo = {
      title: todo.title,
      time: todo.time,
      id: Date.now(),
      isChecked: false,
    };
    setTodos([...todos, newTodo]);
  };
  const [idModal, setIdModal] = useState(null);
  const deleteTodoHandle = (id) => {
    setIdModal(id);
    setIsModal(true);
  };

  const modalDeleteTodohandler = () => {
    setIsModal(true);
  };

  const deleteHandlerItem = () => {
    setTodos(todos.filter((todo) => todo.id !== idModal));
    setIsModal(false);
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isChecked: !todo.isChecked }
          : { ...todo };
      }),
    );
  };
  const setModalActiveHandler = () => {
    setModalActive(true);
  };
  useEffect(() => {
    localStorage.setItem("todo-task", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    setTodos(raw);
  }, []);
  return (
    <div className='App'>
      <Modal active={modalActive}>
        <div className='modal_content_item'>Your input are empty</div>{" "}
        <Button
          style={{ backgroundColor: "red", margin: "10px 0 0 0" }}
          onClick={() => setModalActive(false)}
        >
          Ok Bro Sorry!
        </Button>
      </Modal>

      <DeleteModal active={isModal}>
        <h1>Are you sure?</h1>
        <Button onClick={deleteHandlerItem}>delete</Button>
        <Button onClick={() => setIsModal(false)}>cansel</Button>
      </DeleteModal>

      <TodoForm
        addNewTodo={addNewTodoHandler}
        setModal={setModalActiveHandler}
      />
      <TodoList
        todos={todos}
        isModal={isModal}
        modalDeleteTodo={modalDeleteTodohandler}
        deleteTodo={deleteTodoHandle}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
}

export default App;
