import React from "react";
import { Todo } from "../utils/model";
import TodoList from "./TodoList";
type Props = {
  todo: Todo;
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem = ({ todo, list, setList }: Props) => {
  const handleDone = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  const handleDelete = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <div className="todoItem">
      <span>{todo.todo}</span>
      <div className="buttonBox">
        <button
          className={`button ${todo.isDone ? "completed" : "active"}`}
          onClick={() => handleDone(todo.id)}
        >
          {todo.isDone ? "Completed" : "active"}
        </button>
        <button className="button delete" onClick={() => handleDelete(todo.id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
