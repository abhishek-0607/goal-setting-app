import React from "react";
import { Todo } from "../utils/model";
import "./styles.css";
import TodoItem from "./TodoItem";

interface Props {
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ list, setList }: Props) => {
  return (
    <div className="todoList">
      {list.map((item) => (
        <TodoItem todo={item} key={item.id} list={list} setList={setList} />
      ))}
    </div>
  );
};

export default TodoList;
