import styled from "styled-components";

export const Content = styled.div`
  margin: 80px 0 30px;
  padding: 10px;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    margin: 135px 0 30px;
    width: 60%;
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 7.2rem;
  font-weight: 700;
  line-height: 9.6rem;
`;

export const Poster = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  & img {
    object-fit: cover;
  }

  &::after {
    content: "";
    background: linear-gradient(90deg, #000000 6%, rgba(24, 24, 24, 0) 100%);
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    width: 60%;
  }
`;

export const Stars = styled.div``;

export const Text = styled.p`
  max-width: 420px;
  line-height: 3.2rem;
  color: #e6e6e6;
  margin: 3.2rem 0;
`;

export const Button = styled.button`
  width: 300px;
  height: 76.44px;
  border-radius: 45px;
  background-color: ${(props) => props.theme.colors.yellow};
  color: #2e2e2e;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 6.4rem;
  transition: opacity 0.2s ease;
  margin: 0 auto;
  display: block;
  width: 90%;
  border: 0;

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: 500px) {
    width: 348px;
    display: inline-block;
  }
`;
