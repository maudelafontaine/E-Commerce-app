import React from "react";
import styled from "styled-components";

const Pagination = ({ page, setPage, categoryPages }) => {
  const pageOnClick = (event) => {
    setPage(parseInt(event.target.innerText) - 1);
    console.log(event.target.innerText, "event");
  };
  return (
    <Container>
      <Page>&lt;</Page>
      {[...Array(categoryPages).keys()].map((e) => {
        return <Page onClick={pageOnClick}>{e + 1}</Page>;
      })}
      <Page>&gt;</Page>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
  /* background-color: white; */
`;

const Page = styled.button`
  width: 40px;
  height: 40px;
  font-size: 24px;
  padding: 4px;
  color: black;
  float: left;
  margin: 4px;
  border-radius: 4px;
  border-color: black;

  &:hover {
    cursor: pointer;
    color: white;
    border-color: white;
  }
`;

// Notes :
// https://pagination.js.org/
