import React from "react";

const ButtonOutline = ({ text }) => {
  return (
    <button
      className={`border rounded-full border-[#F53855] bg-white py-3 px-11 hover:bg-[#F53855] hover:text-white transition-all duration-300 ease-in-out group`}
    >
      <span
        className={`text-base font-medium text-[#F53855] group-hover:text-white transition-all duration-300 ease-in-out`}
      >
        {text}
      </span>
    </button>
  );
};

export default ButtonOutline;
