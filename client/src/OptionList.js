import React from "react";

const OptionList = ({ options }) => {
  return options.map((option) => {
    return <div key={option}>{option}</div>;
  });
};

export default OptionList;
