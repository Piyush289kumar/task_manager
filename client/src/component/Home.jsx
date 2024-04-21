import React, { useState, useEffect } from "react";
import { Create } from "./index";
import axios from "axios";
function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/get")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home">
      <h2>TODO List</h2>
      <Create />
      {todos.length <= 0 ? (
        <h2>No Record Found...!</h2>
      ) : (
        todos.map((todoTask, idx) => <div key={idx}>{todoTask.task}</div>)
      )}
    </div>
  );
}
export default Home;
