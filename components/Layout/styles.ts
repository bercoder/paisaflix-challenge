import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 1.6rem;
  width: clamp(
    ${(props) => props.theme.sizes.mobile},
    100%,
    ${(props) => props.theme.max}
  );
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 0 30px;
  }
`;
