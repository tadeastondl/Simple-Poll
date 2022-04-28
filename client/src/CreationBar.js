import "./CreationBar.css";
import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const CreationBar = () => {
  const [poll, setpoll] = useState({ options: [], question: "" });
  const [nOptions, setnOptions] = useState(3);
  const [id, setID] = useState(null);

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
    event.preventDefault();
    if (poll.question == "") return alert("missing question");
    const options = poll.options.filter((item) => item != "");
    if (options.length < 2) return alert("missing options(min 2)");
    poll.options = options;
    axios
      .post(`${process.env.REACT_APP_SERVER_IP}/pollApi`, {
        poll,
      })
      .then(function (response) {
        console.log(response.data.id);
        setID(response.data.id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit}>
          <input
            placeholder="Type your question here"
            className="Question"
            onChange={(event) => (poll.question = event.target.value)}
          />
          {new Array(nOptions).fill(0).map((element, index) => (
            <input  
            className="option"
              type="poll"
              placeholder="Type your option here"
              data-pos={index}
              key={index}
              onChange={handleChange}
            />
          ))}
      <button className="Button" onClick={handleSubmit}>Create poll</button><p></p>
      {id && <Link to={`${id}`} className="link">Your Created Poll Link</Link>}
      </form>
      </div>
    </>
  );
};

export default CreationBar;
