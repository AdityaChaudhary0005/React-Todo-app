
import './App.css';
import Header from "./MyComponents/Header.js"
import { Todos } from "./MyComponents/Todos.js"
import { TodoItems } from "./MyComponents/TodoItems.js"
import React, { useState, useEffect } from 'react'
import { AddTodo } from './MyComponents/AddTodo'
import {About} from './MyComponents/About';

import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Delete", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }


  var [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <div>
      <Router>
        <Header title="MyTodosList" searchBar={false} />
        <Switch>
          <Route exact path="/" render render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>

      </Router>
    </div>

  );
}

export default App;
