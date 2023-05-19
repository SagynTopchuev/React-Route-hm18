import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailsMap = [
  {
    title: "Material 1",
    id: 1,
  },
  {
    title: "Material 2",
    id: 2,
  },
];

export const MaterialDetail = () => {
  const { id } = useParams();

  return (
    <div>
      {DetailsMap.map((item) => {
        return (
          item.id === +id && (
            <Container>
              <div>Material Details Page: Material {id}</div>
              {/* <div>dsadasdsadsadsadasdsadsa</div> */}
            </Container>
          )
        );
      })}
      <StyledDiv>
        <Link to="submited">Submitted</Link>
        <Link to="waiting">Waiting</Link>
        <Link to="late">Late</Link>
      </StyledDiv>
      <OutletDiv>
        <Outlet />
      </OutletDiv>
    </div>
  );
};
const Container = styled.div`
  width: 95%;
  height: 200px;
  margin: auto;
  margin-top: 30px;
  background-color: red;
`;
const StyledDiv = styled.div`
  width: 95%;
  height: 70px;
  background-color: green;
  margin: auto;
`;
const OutletDiv = styled.div`
  width: 95%;
  height: 160px;
  background-color: greenyellow;
  margin: auto;
  font-size: 30px;
`;
