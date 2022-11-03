import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const App = () => {
  return (
    <div
      className={`h-screen flex items-center justify-center text-center w-full bg-gray-50`}
    >
      <Title>TESTING</Title>
    </div>
  );
};

export default App;
