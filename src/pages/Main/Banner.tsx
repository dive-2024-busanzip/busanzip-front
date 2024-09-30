import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "@constants/routes";

export const Banner = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("⁇?");

  const handleMouseEnter = (text: string) => {
    setKeyword(text);
  };

  const handleMouseLeave = () => {
    setKeyword("⁇?");
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          나는 부산에 <HighlightText>{keyword}</HighlightText>하고 싶다.
        </Title>
        <SubTitle>
          당신의 만족스러운 <BoldText>부산살이</BoldText>가 될 수 있도록
        </SubTitle>
        <ButtonWrapper>
          <Button
            onClick={() => navigate(ROUTES.STAY)}
            onMouseEnter={() => handleMouseEnter("정착")}
            onMouseLeave={handleMouseLeave}
          >
            정착
          </Button>
          <Button
            onClick={() => navigate(ROUTES.TEAVEL)}
            onMouseEnter={() => handleMouseEnter("관광")}
            onMouseLeave={handleMouseLeave}
          >
            관광
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: url("https://i.namu.wiki/i/hkDOgJHC40yiIFKQDRz7YjHpzWrL9vCTT7mve4TF6Lj-GpGsBpvT8WlXbwOT_To1Ndl1zKrVLQ-SiwaGNFOgQA.webp")
    no-repeat center;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 2;
`;

const Title = styled.div`
  font-size: 100px;
  font-family: ${(props) => props.theme.fonts.pretendard.bold};
  color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
`;

const SubTitle = styled.div`
  padding-top: 10px;
  padding-bottom: 50px;
  font-size: 40px;
  color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.pretendard.regular};
  white-space: pre-wrap;
`;

const BoldText = styled.span`
  font-weight: bold;
  white-space: pre-wrap;
`;
const HighlightText = styled.span`
  /* color: ${(props) => props.theme.colors.semantic.success}; */
  color: #f6ed00;

  white-space: pre-wrap;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.pretendard.regular};
  padding: 10px 20px;
  width: 100px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.background};
  border-radius: 8px;
  margin: 0 10px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.background};
  }
`;
