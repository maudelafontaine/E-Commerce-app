import React from "react";
import styled from "styled-components";

const Pagination = () => {
  return (
    <Container>
      <Page>&lt;</Page>
      <Page>1</Page>
      <Page>2</Page>
      <Page>3</Page>
      <Page>4</Page>
      <Page>5</Page>
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
