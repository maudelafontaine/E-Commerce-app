// Item details component : when user clicks on an item, it gets redirected to a detailed page of the item

import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  return (
    <Container>
      <Text>Display details</Text>
    </Container>
  );
};

export default ItemDetails;

const Container = styled.div``;

const Text = styled.h2``;
