import React from "react";
import styled from "styled-components";
import { ArrowIcon } from "../Icon/ArrowIcon";

interface ControllerProps {
  onPrev: () => void;
  onNext: () => void;
}

const NavigationContainer = styled.div`
  top: 250px;
  left: 5%;
  z-index: 10;
  display: flex;
  gap: 12px;

  @media ${({ theme }) => theme.media.medium} {
    display: flex;
    justify-content: space-between;
    width: 120px;
  }

  @media ${({ theme }) => theme.media.small} {
    position: absolute;
  }
`;

const ArrowButton = styled.button`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
  border: 1px solid black;
  background-color: transparent;

  @media ${({ theme }) => theme.media.small} {
    svg {
      width: 12px; /* Новый размер иконки */
      height: 12px;
    }
  }

  &:hover {
    background: gray;
  }

  @media ${({ theme }) => theme.media.medium} {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s;
    border: 1px solid black;
    background-color: transparent;
  }
`;

const Controller = ({ onPrev, onNext }: ControllerProps) => {
  return (
    <NavigationContainer>
      <ArrowButton onClick={onPrev}>
        <ArrowIcon size={24} direction="right" />
      </ArrowButton>
      <ArrowButton onClick={onNext}>
        <ArrowIcon size={24} direction="left" />
      </ArrowButton>
    </NavigationContainer>
  );
};

export default Controller;
