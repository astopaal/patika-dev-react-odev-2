import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Main from "./components/main/index";
import Rights from "./components/rights/index";

function App() {
  const [todos, setTodos] = useState([
    { content: "Learn JavaScript", isCompleted: true },
    { content: "Learn React", isCompleted: false },
    { content: "Have a Life!", isCompleted: true },
  ]);

  const calculateCompletedCount = () => {
    let count = 0;
    todos.map((i) => {
      if (i.isCompleted) {
        count++;
      }
    });
    return count;
  };

  const [todo, setTodo] = useState({});
  const [filterType, setFilterType] = useState("all");
  const [filtered, setFiltered] = useState(todos);

  return (
    <div>
      <section className="todoapp">
        <Header
          todo={todo}
          todos={todos}
          setTodo={setTodo}
          setTodos={setTodos}
        />
        <Main
          filtered={filtered}
          setFiltered={setFiltered}
          todos={todos}
          filterType={filterType}
          setTodos={setTodos}
        />
        <Footer
          filtered={filtered}
          setFiltered={setFiltered}
          calculateCompletedCount={calculateCompletedCount}
          todos={todos}
          setFilterType={setFilterType}
          setTodos={setTodos}
        />
      </section>
      <Rights />
    </div>
  );
}

export default App;
