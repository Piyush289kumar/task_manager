import React, { useState, useEffect } from "react";
import { Create } from "./index.js";
import axios from "axios";
import { FaTrash, FaCircleNotch, FaCheckCircle } from "react-icons/fa";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const doneHandler = (id) => {
    axios
      .put("http://127.0.0.1:3001/update/" + id)
      .then(() => location.reload)
      .catch((err) => console.log(err.message));
  };
  const deleteHandler = (id) => {
    axios
      .delete("http://127.0.0.1:3001/delete/" + id)
      .then(() => location.reload)
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h1>TODO APP</h1>
      <Create />

      {todos.length <= 0 ? (
        <p>No Record Found....!</p>
      ) : (
        todos.map((todo, idx) => (
          <div key={idx}>
            <div onClick={() => doneHandler(todo._id)}>
              {todo.isTaskDone ? <FaCheckCircle /> : <FaCircleNotch />}
            </div>
            <p>{todo.task}</p>

            <FaTrash onClick={() => deleteHandler(todo._id)} />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
