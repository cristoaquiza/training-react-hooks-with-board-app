import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  });

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
    </>
  );
};

export default App;
