import "./CreationBar.css";
import React, { useState } from "react";
import axios from "axios";
import env from "./env.json";
const Test = () => {
  const [poll, setpoll] = useState({ options: [], question: "" });
  const [nOptions, setnOptions] = useState(3);

  const handleChange = (event) => {
    const input = event.target;
    const pos = input.dataset.pos;
    poll.options[pos] = input.value;

    if (!input.dataset.after && pos == nOptions - 1) {
      input.dataset.after = "true";
      setnOptions(nOptions + 1);
    }
  };

  const handleSubmit = (event) => {
    axios
      .post(`http://${env.IP}/pollapi`, {
        poll,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form className="formCreationBar">
        <label onSubmit={handleSubmit}>
          <input className="Question" onChange={(event) => poll.question=event.target.value } />
          {new Array(nOptions).fill(0).map((element, index) => (
            <input
              className="OptionList"
              type="poll"
              data-pos={index}
              key={index}
              onChange={handleChange}
            />
          ))}
        </label>
      </form>
      <button onClick={handleSubmit}>Get poll</button>
    </>
  );
};

export default Test;
