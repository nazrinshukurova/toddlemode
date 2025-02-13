import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const initialMode = localStorage.getItem("mode") || "dark";
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    document.body.classList.add(mode === "dark" ? "dark-mode" : "light-mode");
  }, []); 

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("mode", newMode);

    document.body.classList.toggle("dark-mode", newMode === "dark");
    document.body.classList.toggle("light-mode", newMode === "light");
  };

  return (
    <div className="bg">
      <button onClick={toggleMode}>Toggle Mode</button>
      <div className="textBox">
        <p className="text">Welcome to my Coffee Shop!</p>
      </div>
    </div>
  );
};

export default App;
