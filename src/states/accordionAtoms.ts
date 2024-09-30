import { atom } from "recoil";

export const accordionOpenState = atom({
  key: "accordionOpenState",
  default: true,
});

export const cardOpenState = atom({
  key: "cardOpenState",
  default: false,
});

export const previousCardState = atom({
  key: "previousCardState",
  default: false,
});
