
import React,{useEffect} from "react";

function App() {

  useEffect(()=>{
    const wave = document.getElementById("wave");
    wave.style.display = "block";
  })

  return (
    <div className="App text-slate-100 flex flex-col gap-5 justify-center items-center h-full font-Comfortaa">
        <p>Work life balance is important</p>
        <h1 className="text-3xl font-bold ">Have you been working too hard lately?</h1>
        <button className="bg-sky-400 text-white px-6 py-3 rounded-lg">Find out</button>
    </div>
  );
}

export default App;
