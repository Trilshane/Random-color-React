import { useState } from "react";
import GenerateRandomColors from "./utils/GenerateRandomColors";
import "./App.css";
import NameColor from "./Components/NameColor";
import ColorButton from "./Components/ColorButton";

function App() {
  const [color, setColor] = useState(GenerateRandomColors);
  function RandomColor() {
    setColor(GenerateRandomColors);
  }
  return (
    <div style={{ backgroundColor: color }} className="App">
      <NameColor color={color} />
      <ColorButton style={{ color: color }} onClick={RandomColor} />
    </div>
  );
}

export default App;
