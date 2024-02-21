"use client";

import React, { useEffect, useState } from "react";

import durinDoor from "@/assets/svg/durindoor-minified.svg";

import {
  Container,
  DurinDoor,
  DurinDoorContainer,
  Key,
  Title,
  TitleContainer,
  PassInputContainer,
  PassInput,
} from "./styles";

function quemestaai() {
  const [contadorClicks, setContadorClicks] = useState(0);
  const [mostrarDurinDoor, setMostrarDurinDoor] = useState(false);
  const [mostrarTitle, setMostrarTitle] = useState(false);

  const handleClickContainer = (e) => {
    setContadorClicks((contador) => contador + 1);
    // console.log("cliquei no container");
  };

  const handleClickDoor = (e) => {
    setMostrarTitle(true);
    // console.log("cliquei na chave");
  };

  useEffect(() => {
    contadorClicks === 7
      ? setTimeout(() => {
          setMostrarDurinDoor(true);
        }, 1000)
      : setMostrarDurinDoor(false);
  }, [contadorClicks]);

  return (
    <Container onClick={(e) => handleClickContainer(e)}>
      <DurinDoorContainer mostrarDurinDoor={mostrarDurinDoor}>
        <DurinDoor src={durinDoor} alt='durin door' />
      </DurinDoorContainer>

      {mostrarDurinDoor && <Key onClick={(e) => handleClickDoor(e)} />}
      <TitleContainer mostrarTitle={mostrarTitle}>
        <Title>Fale, amigo, e entre...</Title>
      </TitleContainer>
      {mostrarTitle && (
        <PassInputContainer>
          <form>
            <PassInput type={"password"} autoFocus></PassInput>
          </form>
        </PassInputContainer>
      )}
    </Container>
  );
}

export default quemestaai;
