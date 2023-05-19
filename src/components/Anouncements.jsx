import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Anouncements = () => {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate(`/courses/students`);
  };
  return (
    <Container>
      Anouncements
      <button onClick={Navigate}>Navigate Students</button>
    </Container>
  );
};
const Container = styled.div`
  width: 75%;
  height: 90vh;
  margin: auto;
  background-color: blue;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  button {
    width: 150px;
    height: 50px;
    border-radius: 10px;
    border: none;
    &:hover {
      &::before {
        content: "👶🏾";
      }
    }
  }
`;
