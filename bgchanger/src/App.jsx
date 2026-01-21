import { useState } from "react";
import Password from "./Password";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full min-h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex justify-center bottom-12 text-black inset-x-0 px-2 text-xl">
        <Password />
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg rounded-full px-2 py-2">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("cyan")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "cyan" }}>Cyan</button>
          <button onClick={() => setColor("bg-sky-200")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "bg-sky-200" }}>Sky Blue</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}>Black</button>

        </div>
      </div>
    </div>
  );
}

export default App;
