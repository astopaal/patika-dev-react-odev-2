import React from "react";


function Header({todo, todos, setTodo, setTodos}) {

  //inital todo tutma sebebim, input value'sunda todo.content kullandığımda içine yazı yazılabilmesi
  const initialTodo = {
    content:'',
    isCompleted : false
  }

  //enter'a basıldığında todo'yu ekler
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTodos([...todos, todo]);
      setTodo(initialTodo)
    }
  };

  //inputa yazı girildiğinde geçici todo'yu oluşturur
  const handleInputChange = (e) => {
    setTodo({
      content: e.target.value,
      isCompleted : false
    });
  }

  //formun varsayılan aksiyonu bir post atmak olduğu için sayfa yenileni.r prevent default bunu önler
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
