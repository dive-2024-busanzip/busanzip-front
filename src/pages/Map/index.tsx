import styled from "styled-components";

export const Map = () => {
  return (
    <Wrapper>
      <div>Map Page</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 100;
  font-family: ${(props) => props.theme.fonts.pretendard.thin};
  background-color: ${(props) => props.theme.colors.neutral.lightGrey};
`;
