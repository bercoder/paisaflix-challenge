import styled from "styled-components";

export const Container = styled.section``;

export const ListOfTrailers = styled.div`
  display: flex;
  gap: 1.6rem;
  overflow: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding-bottom: 20px;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    &::-webkit-scrollbar-track {
      background-color: black;
    }

    &::-webkit-scrollbar {
      height: 4px;
      background-color: #000;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #333;
      height: 2px;
    }
  }
`;

export const Trailer = styled.article`
  scroll-snap-align: start;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.9;
    background: linear-gradient(180deg, rgba(23, 23, 23, 0) 0%, #171717 100%);
  }
`;

export const Number = styled.span`
  position: absolute;
  bottom: -18px;
  right: 15px;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4.8rem;
  z-index: 10;
`;

export const Title = styled.h2`
  margin: 3rem 0;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4.8rem;
  padding-left: 10px;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 0;
  }
`;
