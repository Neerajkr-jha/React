import { useState } from "react";
import "./App.css";
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className="bg-red-700">redux tkt</h1>
      <AddTodo/>
      <Todos/> 
    </>
  );
}

export default App;
