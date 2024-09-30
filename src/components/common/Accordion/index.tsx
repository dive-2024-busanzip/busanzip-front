import React from "react";
import { useRecoilValue } from "recoil";
import { accordionOpenState, cardOpenState } from "@states/accordionAtoms";
import { useAccordion } from "@hooks/useAccordion";
import AccordionWindow from "./AccordionWindow";
import AccordionCard from "./AccordionCard";
import AccordionButton from "./AccordionButton";
import styled from "styled-components";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const { toggleAccordion, openCard } = useAccordion();
  const isAccordionOpen = useRecoilValue(accordionOpenState);
  const isCardOpen = useRecoilValue(cardOpenState);

  return (
    <AccordionWrapper $isAccordionOpen={isAccordionOpen}>
      <AccordionWindow
        title={title}
        onClick={openCard}
        isOpen={isAccordionOpen}
      />
      <AccordionCard content={content} isOpen={isCardOpen && isAccordionOpen} />
      <AccordionButton
        isAccordionOpen={isAccordionOpen}
        isCardOpen={isCardOpen}
        onClick={toggleAccordion}
      />
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div<{ $isAccordionOpen: boolean }>`
  position: relative;
  margin-left: 80px;
  display: flex;
  align-items: center;
  width: ${(props) => (props.$isAccordionOpen ? "700px" : "0")};
  height: 100vh;
  overflow: visible;
  transition: width 0.3s ease-in-out;
`;
