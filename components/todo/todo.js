import { useEffect, useState } from "react";
import Card from "./card/card";
function TodoContainer() {
  const [todos, setTodos] = useState([]);
  useEffect(async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await resp.json();
    setTodos(data.slice(0, 15));
  });
  return (
    <>
      <h2>To Do List</h2>
      {todos?.map((todo) => {
        return (
          <div key={todo.id}>
            <Card todoData={todo} />
          </div>
        );
      })}
    </>
  );
}
export default TodoContainer;
