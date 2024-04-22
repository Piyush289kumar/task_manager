import React, { useState, useEffect } from "react";
import { BsCircleFill, BsFillTrash2Fill } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
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

  const doneHandler = (id) => {
    axios
      .put("http://127.0.0.1:3001/update/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };

  const deleteHandler = (id) => {
    axios
      .delete("http://127.0.0.1:3001/delete/" + id)
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <h2>TODO List</h2>
      <Create />
      {todos.length <= 0 ? (
        <h2>No Record Found...!</h2>
      ) : (
        todos.map((todoTask, idx) => (
          <div className="task" key={idx}>
            <div className="checkbox" onClick={() => doneHandler(todoTask._id)}>
              {todoTask.done ? (
                <FaRegCheckCircle className="icon" />
              ) : (
                <BsCircleFill className="icon" />
              )}
              <p className={todoTask.done ? "taskDone" : ""}>{todoTask.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrash2Fill
                  className="icon"
                  onClick={() => deleteHandler(todoTask._id)}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default Home;
