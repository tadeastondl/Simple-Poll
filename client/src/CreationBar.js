import "./CreationBar.css";
import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [poll, setpoll] = useState({ options: [], question: "" });
  const [nOptions, setnOptions] = useState(3);
  const [url, setUrl] = useState("");

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
    if (poll.question == "") return console.log("missing question");
    const options = poll.options.filter((item) => item != "");
    if (options.length < 2) return console.log("missing options");
    poll.options = options;
    axios
      .post(`${process.env.REACT_APP_SERVER_IP}/pollApi`, {
        poll,
      })
      .then(function (response) {
        console.log(response);
        setUrl(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form className="formCreationBar">
        <label onSubmit={handleSubmit}>
          <input
            className="Question"
            onChange={(event) => (poll.question = event.target.value)}
          />
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
      {url && <a href={url}>Your Created Poll Link</a>}
    </>
  );
};

export default Test;
