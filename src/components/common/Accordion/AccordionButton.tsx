import React from "react";
import styled from "styled-components";
import Icon from "@components/Icon";
import { ICONS } from "@constants/icons";

interface AccordionButtonProps {
  isAccordionOpen: boolean;
  isCardOpen: boolean;
  onClick: () => void;
}

const AccordionButton: React.FC<AccordionButtonProps> = ({
  isAccordionOpen,
  isCardOpen,
  onClick,
}) => (
  <Button
    $isAccordionOpen={isAccordionOpen}
    $isCardOpen={isCardOpen}
    onClick={onClick}
  >
    <Icon
      name={isAccordionOpen ? ICONS.ARROW_LEFT : ICONS.ARROW_RIGHT}
      size={15}
    />
  </Button>
);

export default AccordionButton;

const Button = styled.div<{ $isAccordionOpen: boolean; $isCardOpen: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) => {
    if (props.$isCardOpen && props.$isAccordionOpen) return "707px";
    return props.$isAccordionOpen ? "348px" : "-1px";
  }};
  height: 45px;
  width: 25px;
  z-index: 1;
  border-radius: ${(props) =>
    props.$isAccordionOpen ? "0 5px 5px 0" : "0 5px 5px 0"};
  border: 0.5px solid ${(props) => props.theme.colors.neutral.mediumGrey};
  background-color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  transition: left 0.3s ease-in-out, border-radius 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.neutral.lightGrey};
  }
`;
