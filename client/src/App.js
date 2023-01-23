import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  const [females, setFemales] = useState(0);
  const [males, setMales] = useState(0);
  return (
    <div className="App">
      <Navbar females={females} males={males} />
      <Home setFemales={setFemales} setMales={setMales} />
    </div>
  );
}

export default App;
