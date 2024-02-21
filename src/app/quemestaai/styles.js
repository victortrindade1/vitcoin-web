import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DurinDoorContainer = styled.div`
  opacity: ${(props) => (props.mostrarDurinDoor ? 1 : 0)};
  transition: opacity 5s ease-in-out;
`;

export const DurinDoor = styled(Image)`
  width: 118vw;
  height: auto;
  max-height: 118vh;
`;

export const Key = styled.div`
  height: 50px;
  width: 50px;

  position: absolute;
  top: 64%;
`;

export const TitleContainer = styled.div`
  width: 90%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: ${(props) => (props.mostrarTitle ? 1 : 0)};
  transition: opacity 5s ease-in-out;
`;

export const Title = styled.div`
  font-family: "Aniron";
  font-size: 5vw;

  // Golden Effect
  background-image: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%,
    #462523 100%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

// Reflexo do texto
export const TitleReflex = styled.div`
  font-family: "Aniron";
  font-size: 5vw;

  -moz-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  mask-image: -webkit-gradient(
    linear,
    right top,
    right bottom,
    from(transparent),
    color-stop(20%, transparent),
    to(rgba(0, 0, 0, 0.4))
  );
  -webkit-mask-image: -webkit-gradient(
    linear,
    right top,
    right bottom,
    from(transparent),
    color-stop(20%, transparent),
    to(rgba(0, 0, 0, 0.4))
  );
`;

export const PassInputContainer = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PassInput = styled.input`
  background-color: transparent;
  height: 10vw;
  width: 20vw;
  font-size: 6vw;
  text-align: center;
  border: none;

  background-image: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%,
    #462523 100%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;
