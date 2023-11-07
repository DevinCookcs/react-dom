import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>Test title</h1>
        <ol className="test-list">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ol>
        <svg>
          <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
        </svg>
        <form>
          <input type="text" />
        </form>
      </div>
    </div>
  );
}

export default App;
