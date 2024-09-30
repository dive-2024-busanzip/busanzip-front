import React from "react";
import Icon, { IconName } from "@components/Icon";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface NavButtonProps {
  icon: IconName;
  name: string;
  path: string;
  isActive: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({
  icon,
  name,
  path,
  isActive,
}) => {
  const navigate = useNavigate();
  return (
    <NavButtonWrapper onClick={() => navigate(path)} $isActive={isActive}>
      <StyledIcon name={icon} $isActive={isActive} />
      <div className="nav-text">{name}</div>
    </NavButtonWrapper>
  );
};

export default NavButton;

const NavButtonWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  height: 90px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$isActive
      ? props.theme.colors.primary
      : props.theme.colors.background};
  cursor: pointer;

  /* 텍스트 스타일 */
  .nav-text {
    font-size: small;
    padding-top: 5px;
    font-family: ${(props) => props.theme.fonts.pretendard.regular};
    color: ${(props) =>
      props.$isActive
        ? props.theme.colors.neutral.white
        : props.theme.colors.primary};
  }

  /* 아이콘과 텍스트의 hover 상태 처리 */
  &:hover {
    background-color: ${(props) =>
      props.$isActive
        ? props.theme.colors.primary
        : props.theme.colors.neutral.lightGrey};
  }
`;

const StyledIcon = styled(Icon)<{ $isActive: boolean }>`
  svg,
  svg * {
    stroke: ${(props) =>
      props.$isActive
        ? props.theme.colors.neutral.white
        : props.theme.colors.primary} !important;
  }

  ${NavButtonWrapper}:hover & {
    svg,
    svg * {
      /* stroke: ${(props) => props.theme.colors.neutral.white} !important; */
    }
  }
`;
