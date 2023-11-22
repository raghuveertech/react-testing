import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Application from "./components/Application/Application";

function App() {
  return (
    <div className="App">
      <header style={{ display: "none" }} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header>
      <Application />
    </div>
  );
}

export default App;
