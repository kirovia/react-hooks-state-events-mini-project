import React from "react";

function Task({category, text, taskList, setTaskList}) {

  function handleClick() {
    setTaskList(taskList.filter(task => (task.text !== text)))
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
