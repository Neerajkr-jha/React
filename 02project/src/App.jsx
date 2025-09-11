import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]= useState(0);
// let counter=5;
const addValue=()=>{
  counter=counter+1;
  if(counter>20){
    alert("Value exceeded its Limit");
    console.log("Value exceeded its Limit");
    counter=0;
  }
  setCounter(counter);
  console.log("clicked",counter);
}
const subValue=()=>{
  counter=counter-1;
  if(counter<0){
    alert("Value cannot less then Zero");
    console.log("Value cannot less then Zero");
    counter=0;
  }
  setCounter(counter);
  console.log("clicked",counter);
}
  return (
    <>
      <h1>Counter Begins</h1>
      <h2>Value : {counter}</h2>
      <button onClick={addValue}>Up</button>
      <button onClick={subValue}>Down</button>
    </>
  )
}

export default App
