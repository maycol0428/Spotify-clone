import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Body = () => {
  return (
    <Container>
      <Header></Header>
    </Container>
  );
};

export default Body;

const Container = styled.div`
  flex: 1;
  background-color: black;
`;
