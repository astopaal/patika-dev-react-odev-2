import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Main from "./components/main/index";
import Rights from "./components/rights/index";

function App() {

  //Varsayılan olarak 3 todo tutar
  const [todos, setTodos] = useState([
    { content: "Learn JavaScript", isCompleted: true },
    { content: "Learn React", isCompleted: false },
    { content: "Have a Life!", isCompleted: true },
  ]);


  //eğer tamamlanmış bir todo var ise clear completed butonu gösterilir. yoksa bu buton render edilmez
  const calculateCompletedCount = () => {
    let count = 0;
    todos.map((i) => {
      if (i.isCompleted) {
        count++;
      }
    });
    return count;
  };

  const [todo, setTodo] = useState({});//her bir todo'yu tutar

  
  const [filterType, setFilterType] = useState("all");//filtreleme durumunu tutar
  const [filtered, setFiltered] = useState(todos);//filtrelenmiş todolar burada tutulur. böylece asıl todo değiştirilmez

  return (
    <div>
      <section className="todoapp">

        {/* header ,main ve footer adında 3 component ve gerekn proplar */}
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
      {/* oluşturan kişinin ismi ve hakları */}
      <Rights />
    </div>
  );
}

export default App;
