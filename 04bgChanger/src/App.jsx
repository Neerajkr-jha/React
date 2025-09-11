import { useState } from "react";

function App() {
  const [color,setColor] = useState("Olive");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-18 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-2xl"> 
          <button onClick={()=> setColor("red")} className="outline-none px-4 rounded-xl text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=> setColor("pink")} className="outline-none px-4 rounded-xl shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=> setColor("violet")} className="outline-none px-4 rounded-xl shadow-lg" style={{backgroundColor:"violet"}}>Violet</button>
          <button onClick={()=> setColor("yellow")} className="outline-none px-4 rounded-xl shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=> setColor("skyblue")} className="outline-none px-4 rounded-xl shadow-lg" style={{backgroundColor:"skyblue"}}>Sky</button>
          <button onClick={()=> setColor("gray")} className="outline-none px-4 rounded-xl shadow-lg text-white" style={{backgroundColor:"gray"}}>Gray</button>
          <button onClick={()=> setColor("#feb236")} className="outline-none px-4 rounded-xl shadow-lg" style={{backgroundColor:"#feb236"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
