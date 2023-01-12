import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./utils/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [list, setList] = useState<Todo[]>([]);
  const handleAdd = () => {
    if (todo) {
      setList([...list, { id: Date.now(), todo: todo, isDone: false }]);
    }
    setTodo("");
  };
  return (
    <div className="App">
      <h1>Goal setting App</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList list={list} setList={setList} />
    </div>
  );
};

export default App;
