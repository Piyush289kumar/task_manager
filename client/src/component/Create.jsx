import React from "react";

function Create() {
  return (
    <div className="create_form">
      <input
        type="text"
        name="createTodo"
        id="createTodo"
      />
      <button type="submit">Add</button>
    </div>
  );
}

export default Create;
