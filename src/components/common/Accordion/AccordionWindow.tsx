import React from "react";
import styled from "styled-components";

interface AccordionWindowProps {
  title: string;
  onClick: () => void;
  isOpen: boolean;
}

const AccordionWindow: React.FC<AccordionWindowProps> = ({
  title,
  onClick,
  isOpen,
}) => (
  <Window $isAccordionOpen={isOpen} onClick={onClick}>
    <Title>{title}</Title>
  </Window>
);

export default AccordionWindow;

const Window = styled.div<{ $isAccordionOpen: boolean }>`
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.colors.background};
  z-index: 2;
  width: 350px;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.$isAccordionOpen ? "0" : "-100%")});
  cursor: pointer;
`;

const Title = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
`;
