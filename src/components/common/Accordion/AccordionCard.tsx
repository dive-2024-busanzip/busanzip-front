import React from "react";
import styled, { keyframes } from "styled-components";

interface AccordionCardProps {
  content: string;
  isOpen: boolean;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ content, isOpen }) => (
  <CardWrapper $isCardOpen={isOpen}>
    <Card $isCardOpen={isOpen}>
      <CardContent>{content}</CardContent>
    </Card>
  </CardWrapper>
);

export default AccordionCard;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutToLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const CardWrapper = styled.div<{ $isCardOpen: boolean }>`
  position: absolute;
  left: 360px;
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  visibility: ${(props) => (props.$isCardOpen ? "visible" : "hidden")};
`;

const Card = styled.div<{ $isCardOpen: boolean }>`
  transform: translateX(${(props) => (props.$isCardOpen ? "0" : "-100%")});
  width: 100%;
  border-radius: 10px;
  height: 97%;
  border: 2px solid ${(props) => props.theme.colors.neutral.lightGrey};
  background-color: ${(props) => props.theme.colors.background};
  z-index: 3;
  animation: ${(props) =>
      props.$isCardOpen ? slideInFromLeft : slideOutToLeft}
    0.3s ease-out forwards;
`;

const CardContent = styled.div`
  padding: 20px;
`;
