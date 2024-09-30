import styled from "styled-components";

export const Main = () => {
  return (
    <Wrapper>
      <div>Main Page</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 100;
  font-family: ${(props) => props.theme.fonts.pretendard.bold};
  background-color: ${(props) => props.theme.colors.neutral.lightGrey};
`;
