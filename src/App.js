import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <>
      <h1>Team Board</h1>
      <section>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li>
              {user.name} from {user.company.name}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Todos</h2>
        <ul>
          {todos.map(todo => (
            <li>{todo.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
