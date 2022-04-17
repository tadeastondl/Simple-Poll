import "./CreationBar.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Poll = () => {
  const [poll, setpoll] = useState(null);
  const [value, setValue] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_IP}/pollApi/${id}`)
      .then(function (response) {
        console.log(response.data.options);
        setpoll(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    if(value =="") return;
    axios
    .post(`${process.env.REACT_APP_SERVER_IP}/pollApi/${id}`, {value, options:poll.options})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  return (
    <>
      {poll && (
        <form onSubmit={handleClick}>
          <p className="Question">{poll.question}</p>
          {poll.options.map((item, index) => (
            <div key={index}>
              <input
                type="radio"
                className="optionInput"
                name="option"
                id={item}
                value={item}
                onChange={() => setValue(item)}
              />
              <label for={item}>{item}</label>
            </div>
          ))}
           {/* button */}
          <input type="submit" value="Submit vote" />
        </form>
      )}
    </>
  );
};

export default Poll;
