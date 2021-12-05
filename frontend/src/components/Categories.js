import React from "react";
import styled from "styled-components";
import Category from "./Category";
const Categories = ({ categories }) => {
  return (
    <Container>
      {categories?.map((category, i) => {
        return <Category category={category}></Category>;
      })}
    </Container>
  );
};

export default Categories;
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
  padding: 20px;
  padding-bottom: 120px;
  overflow: overlay;
  ::-webkit-scrollbar {
    width: 0px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(90, 90, 90);
    -webkit-border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
`;
