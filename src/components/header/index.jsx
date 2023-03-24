import React from "react";


function Header({todo, todos, setTodo, setTodos}) {
  const initialTodo = {
    content:'',
    isCompleted : false
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTodos([...todos, todo]);
      setTodo(initialTodo)
    }
  };
  const handleInputChange = (e) => {
    setTodo({
      content: e.target.value,
      isCompleted : false
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // sayfa yenilenmesini önler
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={todo.content || ''} 
          /*vlue kısmında todo yoksa uyarı vermemesi için 2 seçenek sunuyoruz
          böylece controlled uncontrolled change durumlarında uyarı almıyoruz. iki durumda da value controlled oluyor.
          aslında uyarının tam sebebi, undefined bir value'dan defined value'ya geçiştir. */
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

export default Header;
