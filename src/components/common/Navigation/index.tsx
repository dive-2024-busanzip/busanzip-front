import styled from "styled-components";
import { IMAGE_PATHS } from "@assets/images";
import Image from "@components/Image";
import { ICONS } from "@constants/icons";
import { useLocation, useNavigate } from "react-router-dom";
import NavButton from "./NavButton";
import { ROUTES } from "@constants/routes";

const navItems = [
  {
    icon: ICONS.BUILDING,
    name: "정착",
    path: ROUTES.STAY,
  },
  {
    icon: ICONS.TRAVEL,
    name: "관광",
    path: ROUTES.TEAVEL,
  },
  {
    icon: ICONS.LOCATION,
    name: "내 주변",
    path: ROUTES.AROUND,
  },
];

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ImageWrapper onClick={() => navigate(ROUTES.MAIN)}>
        <Image src={IMAGE_PATHS.LOGO_DARK} width={40} />
      </ImageWrapper>
      {navItems.map((item) => (
        <NavButton
          key={item.path}
          name={item.name}
          icon={item.icon}
          path={item.path}
          isActive={location.pathname === item.path}
        />
      ))}
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.div`
  position: fixed;
  z-index: 99;
  width: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  padding: 20px 0;
`;
