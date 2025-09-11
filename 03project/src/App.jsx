import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    name:"neeraj",
    age:21,
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card username="chaiaurcode"/>
      <Card username="Neeraj jha"/>
    </>
  );
}

export default App;
