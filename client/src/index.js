import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Poll from "./Poll";
import Results from "./Results";
import CreationBar from "./CreationBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrap">
        <div className="h1wrap">
        <Link to="/" className="h1Link"><h1 >Simple Poll</h1></Link>
        </div>
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
