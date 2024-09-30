// src/hooks/useAccordion.ts
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import {
  accordionOpenState,
  cardOpenState,
  previousCardState,
} from "@states/accordionAtoms";

export const useAccordion = () => {
  const [isAccordionOpen, setIsAccordionOpen] =
    useRecoilState(accordionOpenState);
  const [isCardOpen, setIsCardOpen] = useRecoilState(cardOpenState);
  const [prevCardState, setPrevCardState] = useRecoilState(previousCardState);
  const location = useLocation();

  useEffect(() => {
    if (isAccordionOpen) {
      setIsCardOpen(prevCardState);
    } else {
      setPrevCardState(isCardOpen);
      setIsCardOpen(false);
    }
  }, [isAccordionOpen]);

  useEffect(() => {
    setIsCardOpen(false);
    setPrevCardState(false);
  }, [location]);

  const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);
  const openCard = () => {
    setIsCardOpen(true);
    setPrevCardState(true);
  };

  return {
    isAccordionOpen,
    isCardOpen,
    toggleAccordion,
    openCard,
  };
};
