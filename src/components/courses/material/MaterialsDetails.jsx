import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { Modal } from "./Modal";

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
export const MaterialsDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { modal } = Object.fromEntries(searchParams);

  const openModal = () => {
    setSearchParams({ modal: "addNewMaterial" });
  };
  const closeModal = () => {
    setSearchParams({});
  };
  return (
    <Container>
      <button onClick={openModal}>Add new material</button>
      {DetailsMap.map((el) => (
        <StyledDiv>
          <h2>{el.title}</h2>
          <StyledLink to={`${el.id}/details`}>Details</StyledLink>
        </StyledDiv>
      ))}
      {modal && <Modal onClose={closeModal} />}
    </Container>
  );
};
const Container = styled.div`
  /* display: flex; */
  /* width: 100%;
  height: 75vh; */
  height: 82vh;

  background-color: #b7b4b495;
  /* margin: auto; */
  /* margin: 100px 100px 0 0; */
  /* position: absolute;
  z-index: 2; */
  button {
    font-size: 30px;
  }
`;
const StyledDiv = styled.div`
  width: 80%;
  height: 70px;
  background-color: white;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const StyledLink = styled(Link)``;
