import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

const [taskList, setTaskList] = useState(TASKS)
const [categoryToDisplay, setCategoryToDisplay] = useState('All')
const [formDetail, setFormDetail] = useState('')
const [formCategory, setFormCategory] = useState('Code')

const tasksToDisplay = taskList.filter(task => categoryToDisplay === 'All' ? true : task.category === categoryToDisplay)

function onTaskFormSubmit(newItem, event) {
  event.preventDefault()
  setTaskList([...taskList, newItem])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setCategoryToDisplay={setCategoryToDisplay}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
        formDetail={formDetail}
        setFormDetail={setFormDetail}
        formCategory={formCategory}
        setFormCategory={setFormCategory}
      />
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        tasksToDisplay={tasksToDisplay}
      />
    </div>
  );
}

export default App;
