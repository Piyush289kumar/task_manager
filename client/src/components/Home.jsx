import React, { useState, useEffect } from "react";
import { Create } from "./index.js";
import axios from "axios";
import { FaTrash, FaCircleNotch } from "react-icons/fa";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1/3001/get")
      .then((res) => setTodos(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>TODO APP</h1>
      <Create />

      {todos.length <= 0 ? (
        <p>No Record Found....!</p>
      ) : (
        todos.map((todo, idx) => (
          <div key={idx}>
            <FaCircleNotch />
            <p>{todo.task}</p>
            <FaTrash />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
