import "./CreationBar.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Results = () => {
    const [results, setResults] = useState(null);
    const { id } = useParams();
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_SERVER_IP}/pollApi/${id}/results`)
        .then(function (response) {
          console.log(response.data);
          setResults(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
  return (
    <>
    {results && (
      <div className="container">
        <form>
          <p className="Question">{results.question}</p>
          {results.options.map((item, index) => (
            <div  className="option" key={index}>
                <p>{item.name}</p>
                <p >{item.nAnswers} {(item.nAnswers==1) ?"vote": "votes"}</p>
            </div>
          ))}
          
        </form>
        </div>
      )}
    </>
  );
};

export default Results;
