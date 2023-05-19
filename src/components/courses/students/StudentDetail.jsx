import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailsMap = [
  {
    title: "Student Name 1",
    id: 1,
  },
  {
    title: "Student Name 2",
    id: 2,
  },
];
export const StudentDetail = () => {
  const { id } = useParams();
  return (
    <div>
      {DetailsMap.map((item) => {
        return (
          item.id === +id && (
            <Container>
              <div>Students Details page Student {id}</div>
              {/* <div>dsadasdsadsadsadasdsadsa</div> */}
            </Container>
          )
        );
      })}
    </div>
  );
};

const Container = styled.div`
  width: 95%;
  height: 70vh;
  margin: auto;
  margin-top: 30px;
  background-color: red;
`;
