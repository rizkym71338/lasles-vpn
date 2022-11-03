import React from "react";

const ButtonFIll = ({ text }) => {
  return (
    <button
      className={`rounded-xl bg-[#F53855] w-fit py-4 px-16 transition-all duration-300 ease-in-out`}
    >
      <span className={`text-base font-bold text-white`}>{text}</span>
    </button>
  );
};

export default ButtonFIll;
