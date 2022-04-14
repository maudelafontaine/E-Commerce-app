// Loader component

import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Container>
      <Spinner></Spinner>
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 700px;
`;

const Spinner = styled.div`
  /* margin-top: 200px; */
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #ff9999;
  border-bottom: 16px solid #adebeb;
  border-left: 16px solid #ffe6e6;
  border-right: 16px solid #ffe6e6;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
