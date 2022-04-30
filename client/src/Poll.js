import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Poll = () => {
  const [poll, setpoll] = useState(null);
  const [value, setValue] = useState("");
  const { id } = useParams();
  const [submit, setSubmit] = useState(false);
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_IP}/pollApi/${id}`)
      .then(function (response) {
        setpoll(response.data);
      })
  }, []);
  
  const handleClick = (event) => {
    event.preventDefault();
    if (value == "") return;
    axios
      .post(`${process.env.REACT_APP_SERVER_IP}/pollApi/${id}`, {
        value,
        options: poll.options,
      })
      setSubmit(true);
  };

  return (
    <>
      {poll && (
        <div className="container">
        <form onSubmit={handleClick}>
          <p className="Question">{poll.question}</p>
          {poll.options.map((item, index) => (
            <div key={index}  className="optionVote">
              <input
                type="radio"
                name="option"
                id={item}
                value={item}
                onChange={() => setValue(item)}
              />
              <label for={item}>{item}</label>
            </div>
          ))}
          {/* button */}
          {
              !submit? <input className="Button" type="submit" value="Submit vote"/>: <Link to={"results"} activeClassName="current" type="submit" className="link">Show results</Link>
          }
          
        </form>
        </div>
      )}
    </>
  );
};

export default Poll;
