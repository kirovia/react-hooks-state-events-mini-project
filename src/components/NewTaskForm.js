import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit, formDetail, setFormDetail, formCategory, setFormCategory}) {


  function handleDetailChange(e) {
    setFormDetail(e.target.value)
  }

  function handleCategoryChange(e) {
    setFormCategory(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={(event) => {
      const newItem = {
        text: formDetail,
        category: formCategory
      }
      onTaskFormSubmit(newItem, event)
    }}>
      <label>
        Details
        <input type="text" name="text" value={formDetail} onChange={handleDetailChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} >
          {categories.map(category => category !== 'All' ? <option key={category}>{category}</option> : null)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
