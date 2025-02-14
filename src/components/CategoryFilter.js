import React from "react";

function CategoryFilter({categories, setCategoryToDisplay}) {

  function handleClick(e) {
    e.target.parentNode.childNodes.forEach(node => node.classList.contains('selected') ? node.classList.remove('selected') : null)
    e.target.classList.add('selected')
    setCategoryToDisplay(e.target.textContent)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} onClick={handleClick}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
