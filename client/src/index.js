import React from "react";
import ReactDOM from "react-dom";
import CreationBar from "./CreationBar";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Poll from "./Poll";
import Results from "./Results";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrap">
        <h1>Easy Poll</h1>
        <Routes>
          <Route path="" element={<CreationBar />} />
          <Route path=":id" element={<Poll />} />
          <Route path=":id/results" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
