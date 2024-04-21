import React, { useState } from "react";
import { Create } from "./index";

function Home() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="home">
      <h2>TODO List</h2>
      <Create />

      {todos.length <= 0 ? (
        <h2>No Record Found...!</h2>
      ) : (
        todos.map((todoTask, idx) => <div key={idx}>{todoTask}</div>)
      )}
    </div>
  );
}

export default Home;
