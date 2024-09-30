import Accordion from "@components/common/Accordion";
import { ROUTES } from "@constants/routes";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const Map = () => {
  const location = useLocation();
  return (
    <Wrapper>
      {location.pathname === ROUTES.STAY && (
        <Accordion title={"정착"} content={"정착 데이터"} />
      )}
      {location.pathname === ROUTES.TEAVEL && (
        <Accordion title={"관광"} content={"관광 데이터"} />
      )}
      {location.pathname === ROUTES.AROUND && (
        <Accordion title={"내 주변"} content={"내 주변 데이터"} />
      )}
    </Wrapper>
  );
};

export default Map;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
