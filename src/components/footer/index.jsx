import React from "react";

function Footer({ todos, setTodos, setFilterType, calculateCompletedCount, filtered, setFiltered }) {
  const handleFilter = (filterType) => {
    if (filterType === "all") {
      setFilterType(filterType);
    } else if (filterType === "active") {
      setFilterType(filterType);
    } else if (filterType === "completed") {
      setFilterType(filterType);
    }
  };

  console.log("tamamlnmış sayı : ", calculateCompletedCount())

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.filter((todo) => !todo.isCompleted).length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <button onClick={() => handleFilter("all")} className="all">
            All
          </button>
        </li>
        <li>
          <button onClick={() => handleFilter("active")} className="active">
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilter("completed")}
            className="completed"
          >
            Completed
          </button>
        </li>
      </ul>

      {calculateCompletedCount() > 0 && (
        <button onClick={handleClearCompleted} className="clear-completed">
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
