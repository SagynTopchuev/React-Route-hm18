import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Schedule = () => {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate("/notifications");
  };
  return (
    <Container>
      ⬛⬜◼◻◾◽▪▫
      <button onClick={Navigate}>Navigate Notification 🎁</button>
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
  }
`;
