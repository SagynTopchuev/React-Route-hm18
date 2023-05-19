import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppRouter } from "../router/AppRouter";

export const Linktopages = () => {
  return (
    <DivStyled>
      <Container>
        <h1>LOGO</h1>
        <h4>
          <StyledLink to="/courses">Courses</StyledLink>
        </h4>
        <h4>
          <StyledLink to="/anouncements">Anouncements</StyledLink>
        </h4>
        <h4>
          <StyledLink to="/notifications">notification</StyledLink>
        </h4>
        <h4>
          <StyledLink to="/schedule">schedule</StyledLink>
        </h4>
      </Container>
      <AppRouter />
    </DivStyled>
  );
};
const DivStyled = styled.div`
  display: flex;
`;
const Container = styled.div`
  width: 20%;
  margin: 0;
  height: 100vh;
  /* display: flex; */
  background-color: #cac8ba;
  h1 {
    margin: 0;
  }
`;
const StyledLink = styled(NavLink)`
  color: #80bbd8cd;
  text-decoration: none;
`;
