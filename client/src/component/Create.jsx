import React, { useState } from "react";
import axios from "axios";
function Create() {
  const [todo, setTodo] = useState("");

  const addHandle = () => {
    axios
      .post("http://127.0.0.1:3001/add", { task: todo })
      .then((res) => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="create_form">
      <input
        type="text"
        name="createTodo"
        id="createTodo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" onClick={addHandle}>
        Add
      </button>
    </div>
  );
}

export default Create;
