import React from "react";
import Task from "./Task"

function TaskList({taskList, setTaskList, tasksToDisplay}) {

  return (
    <div className="tasks">
      {tasksToDisplay.map(task =>
      <Task 
        key={task.text}
        category={task.category}
        text={task.text}
        taskList={taskList}
        setTaskList={setTaskList}
      />)}
    </div>
  );
}

export default TaskList;
