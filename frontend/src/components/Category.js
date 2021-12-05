import React from "react";
import styled from "styled-components";
import { device } from "../settings/BreakPoints";
const Category = ({ category }) => {
  console.log(category);
  return (
    <Container>
      <div>
        <p>{category.name}</p>
        <img src={category.icons[0].url} alt="image" />
      </div>
    </Container>
  );
};

export default Category;
const Container = styled.div`
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  transition: all 0.2s ease;
  grid-gap: 20px;
  img {
    height: 100px;
  }
  p {
    text-align: center;
    margin-bottom: 10px;
  }
  :hover {
    background-color: #181818;
  }
`;
