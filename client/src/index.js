import React from "react";
import ReactDOM from "react-dom";
import CreationBar from "./CreationBar";
import './index.css';

const App = () => {
  return (
    <div>
      <h1>Insane Poll</h1>
      <CreationBar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
