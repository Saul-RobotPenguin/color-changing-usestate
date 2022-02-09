import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: color,
          width: "100px",
          height: "100px",
          padding: "40px",
          margin: "auto",
        }}
      ></div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
    </div>
  );
}

export default App;
