import React from "react";

function Footer({ todos, setTodos, setFilterType, calculateCompletedCount, filtered, setFiltered }) {

  //filtreleme butonlarından biri onchange olduğunda bunu konrol eden fonksiyon
  const handleFilter = (filterType) => {
    if (filterType === "all") {
      setFilterType(filterType);
    } else if (filterType === "active") {
      setFilterType(filterType);
    } else if (filterType === "completed") {
      setFilterType(filterType);
    }
  };

  //tamamlanmış todo'ları siler
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

      {/* eğer 1 veya daha fazla tamamlanmış todo varsa clear completed butonunu render eder */}
      {calculateCompletedCount() > 0 && (
        <button onClick={handleClearCompleted} className="clear-completed">
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
