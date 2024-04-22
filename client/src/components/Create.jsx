import React, { useState } from "react";
import axios from "axios";
function Create() {
  const [todo, setTodo] = useState("");
  const handleAdd = () => {
    axios
      .post("http://127.0.0.1:3001/add", { task: todo })
      .then((res) => location.reload())
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input
        type="text"
        name="todoAdd"
        id="todoAdd"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
export default Create;
