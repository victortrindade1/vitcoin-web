"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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

function Login() {
  const [contadorClicks, setContadorClicks] = useState(0);
  const [mostrarDurinDoor, setMostrarDurinDoor] = useState(false);
  const [mostrarTitle, setMostrarTitle] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClickContainer = () =>
    setContadorClicks((contador) => contador + 1);

  const handleClickDoor = () => setMostrarTitle(true);

  useEffect(() => {
    contadorClicks === 7
      ? setTimeout(() => {
          setMostrarDurinDoor(true);
        }, 1000)
      : setMostrarDurinDoor(false);
  }, [contadorClicks]);

  return (
    <Container onClick={(e) => handleClickContainer(e)}>
      <DurinDoorContainer $mostrarDurinDoor={mostrarDurinDoor}>
        <DurinDoor src={durinDoor} alt='durin door' />
      </DurinDoorContainer>

      {mostrarDurinDoor && <Key onClick={(e) => handleClickDoor(e)} />}
      <TitleContainer $mostrarTitle={mostrarTitle}>
        <Title>Fale, amigo, e entre...</Title>
      </TitleContainer>
      {mostrarTitle && (
        <PassInputContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PassInput
              type={"password"}
              autoFocus
              {...register("password", {
                minLength: 6,
                maxLength: 16,
              })}
            />
          </form>
        </PassInputContainer>
      )}
    </Container>
  );
}

export default Login;
