import React, { useState, useEffect } from "react";

function Main({ todos, setTodos, filterType, filtered, setFiltered }) {
  //böyle bir kontrol tutma sebebim, eğer mark all butonuna tıklanmışsa,
  //tekrar tıklandığında completen todo'ları uncompleted çevirebilmeyi kontrol etmek
  const [marked, setMarked] = useState(false);

  const changeCompleteness = () => {
    console.log("tıklandı");
    //hepsini tamamla butonuna tıklandığında gerçekleşecek işlemler
    setMarked(!marked);
    if (!marked) {
      filtered.map((item) => {
        item.isCompleted = true;
      });
    } else {
      filtered.map((item) => {
        item.isCompleted = false;
      });
    }
  };

  //herhangi bir tamamlama checkboxuna tıklandığında gerçekleşecek olaylar
  const handleComplete = (item) => {
    const updatedTodos = filtered.map((todo) => {
      if (todo === item) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setFiltered(updatedTodos);
  };


  //bu hook ile todolarda ya da filterType'da bir değişiklik olursa, todoları tekrardan filtreler.
  //böylece hem yeni bir todo eklendiğinde render gerçekleşir
  //hem de filtre tipi değiştiğinde render gerçekleşir
  useEffect(() => {
    if (filterType == "all") {
      setFiltered(todos);
    } else if (filterType == "completed") {
      const filteredTodos = todos.filter((item) => {
        return item.isCompleted == true;
      });
      setFiltered(filteredTodos);
    } else {
      const filteredTodos = todos.filter((item) => {
        return item.isCompleted == false;
      });
      setFiltered(filteredTodos);
    }
  }, [filterType, todos]);


  //bir todoyu sikme butonuna tıklandığında bunu handle eder
  const handleDelete = (item) => {
    const updatedTodos = filtered.filter((todo) => todo !== item);
    setFiltered(updatedTodos);
  };
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={changeCompleteness}
      />
      <label htmlFor="toggle-all">Mark all as complete</label> {/*for etiketini htmlFor çeviridm çünkü reactte for yok */}
      {/*ancak reactte htmlFor class'ı değil id'yi alır. bu yüzden üstteki inputa id geçmemiz gerekiyor*/}
      <ul className="todo-list">

        {/* filtrelenmiş todoları listeler.  */}
        {filtered.map((item, index) => (
          <li key={index} className={item.isCompleted ? "completed" : ""}>
            <input
              className="toggle"
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => handleComplete(item)}
            />
            <label>{item.content}</label>
            <button
              className="destroy"
              onClick={() => {
                handleDelete(item);
              }}
            ></button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;
