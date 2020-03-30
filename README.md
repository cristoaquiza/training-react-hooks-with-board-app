# Training hooks with Team Board App

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). [_More info here_](./docs/REACT_DOCS)

## Concepts

**_Disclaimer: All of this concepts is only my understanding of react hooks I used in the app_**

It is worthy to explain what is react hooks. These are new functionality of react library to extend the capability of functional components to manage its own state and life cycle. Usually functional components were only used as dummy components (only to show data) due to its lack of state and life cycle, so in order to encourage its used as smart components (manage and show data), hooks were created.

```javascript
import React, { useState } from "react";
```

- _useState_: It is a hook to enable a component to have state. It should called with a initial value and returns an array with two elements, first one with the actual state and second a function to fill the state whenever it is needed.

```javascript
// here the initial value is an empty array
// setUsers will be used to fill users
const [users, setUsers] = useState([]);
```

- _useEffect_: Usually when a component needs to got data from an endpoint or sets an html event its life cycle is used (functions like componentDidMount, componentDidUpdate, componentWillUnmount). For functional components we have useEffect, which receives a function and an array of parameters. The function is executed while the component is mounted. Also it will be executed when component is unmounted, usually when it is needed to unsubscribe some event, for that the function should return a function with those unsubscriptions. The second parameter is an array of component variables so when these change the hook will be executed again.
> Tip: To make requests, adding an empty array the call runs one time otherwise will be executed forever

```javascript
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
```
