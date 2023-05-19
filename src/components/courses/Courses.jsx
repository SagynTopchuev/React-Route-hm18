import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export const Courses = () => {
  return (
    <Container>
      <StyledHeader>
        <h1>
          <StyledNavLink to="materials">Materials</StyledNavLink>
        </h1>
        <h1>
          <StyledNavLink to="students">Students</StyledNavLink>
        </h1>
        <h1>
          <StyledNavLink to="ratings">Ratings</StyledNavLink>
        </h1>
      </StyledHeader>
      <StyledDiv>
        <Outlet />
      </StyledDiv>
    </Container>
  );
};
const Container = styled.div`
  width: 80%;
  /* background-color: black; */
  /* height: 84vh; */
`;
const StyledDiv = styled.div`
  /* margin: auto; */
  /* margin-top: 20px; */
  width: 100%;
`;
const StyledHeader = styled.div`
  /* width: 80%; */
  height: 18vh;
  background-color: blue;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  /* flex-direction: column; */
  /* margin-left: 20%; */
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
