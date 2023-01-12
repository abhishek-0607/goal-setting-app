import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <div className="inputField">
      <input
        type="text"
        className="inputBox"
        placeholder="Enter a Goal"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="button" onClick={handleAdd}>
        Add Goal
      </button>
    </div>
  );
};

export default InputField;
