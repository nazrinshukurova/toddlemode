import { useState } from "react";
import "./App.css";

const App = () => {
  const initialMode = localStorage.getItem("mode") || "dark";
  const [mode, setMode] = useState(initialMode);

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("mode", newMode);

    if (newMode === "light") {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      
    }
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
