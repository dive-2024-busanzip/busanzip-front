import { IMAGE_PATHS } from "@assets/images";
import Image from "@components/Image";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={IMAGE_PATHS.LOGO_LIGHT} width={50} />
      </ImageWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  position: fixed;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.primary};
  height: 30;
  width: 100%;
`;

const ImageWrapper = styled.div`
  padding: 0px 5px;
`;
