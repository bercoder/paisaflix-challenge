import styled from "styled-components";

export const Container = styled.section`
  margin-top: 139px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 44px 0 56px;
  padding: 0 10px;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 0;
  }

  & h2 {
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 6.4rem;
  }

  & a {
    color: ${(props) => props.theme.colors.yellow};
    font-weight: 700;
    font-size: 2%.4rem;
    line-height: 3.2rem;
    text-align: right;
    text-decoration: none;
  }
`;

export const ListOfMovies = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

export const Movie = styled.article`
  position: relative;
  height: 560px;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    &:first-of-type {
      grid-area: 1 / 1 / 2 / 3;
    }
  }
`;

export const Cover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    z-index: 10;
  }
`;

export const Genre = styled.div`
  position: absolute;
  top: 26px;
  left: 24px;
  background: ${(props) => props.theme.colors.yellow};
  padding: 1.5px 8px;
  border-radius: 16px;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: #2e2e2e;
  z-index: 20;
`;

export const Detail = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 20;

  & > div {
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #cccccc;

    & img {
      vertical-align: top;
      margin-right: 5px;
    }
  }

  & h3 {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 6.4rem;
    color: #fff;
  }
`;
