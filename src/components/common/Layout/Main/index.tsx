import Header from "@components/common/Header";
import styled from "styled-components";

export const MainLayout = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default MainLayout;

const Wrapper = styled.div``;
