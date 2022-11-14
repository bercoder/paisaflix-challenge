import styled, { keyframes } from "styled-components";

import { Inter } from "@next/font/google";

const inter = Inter();

export const Container = styled.footer`
  margin-top: 206px;

  & > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  & .title {
    width: 100%;
    padding: 0 10px;
  }

  @media (min-width: 360px) {
    & .title {
      width: 60%;
      padding: 0;
    }
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.4rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    & > section {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 100px;
    }

    & .title {
      width: 40%;
    }

    h3 {
      margin-bottom: 2.4rem;
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}) {
    & .title {
      padding-right: 100px;
    }
  }
`;

export const Logo = styled.h2`
  font-weight: 500;
  font-size: 6.4rem;
  line-height: 8.8rem;
  margin-bottom: 1.2rem;
  text-align: center;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    text-align: left;
    margin-bottom: 3.2rem;
  }
`;

export const GroupOfLinks = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  width: 100%;
  padding: 0 10px;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  h3 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.6rem;
    line-height: 3.2rem;
    color: #e6e6e6;
  }

  @media (min-width: 400px) {
    width: 60%;
    padding: 0;
  }

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    margin-top: 5rem;
    justify-content: space-around;
    text-align: left;
  }
`;

export const ContactInfo = styled.div`
  width: 100%;
  font-family: ${inter.style.fontFamily};
  font-size: 1.4rem;
  line-height: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  margin: 3rem 0;

  & > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    flex-direction: row;
    margin-top: 10rem;
    justify-content: flex-end;
    gap: 2.6rem;
  }
`;

const size = keyframes`
  from {
    transform: translateX(0)
  }

  30% {
    transform: translateX(-3px)
  }

  50% {
    transform: translateX(0)
  }

  60% {
    transform: translateX(-3px)
  }

  70% {
    transform: translateX(0)
  }

  80% {
    transform: translateX(-2px)
  }

  90% {
    transform: translateX(0)
  }

  to {
    transform: translateX(-1px)
  }
`;

export const JoinContainer = styled.div`
  form {
    border: 1px solid #464646;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  }

  form:hover {
    border-color: ${(props) => props.theme.colors.yellow};
  }

  input {
    background-color: transparent;
    border: 0;
    margin-left: 8px;
    line-height: 3.2rem;
    font-size: 1.6rem;
    width: 100%;
    outline: 0;
    color: white;
    caret-color: ${(props) => props.theme.colors.yellow};
  }

  input:focus,
  input:active {
    border-bottom: 2px solid ${(props) => props.theme.colors.yellow};
  }

  input::-webkit-input-placeholder {
    color: #aaaab6;
    opacity: 0.7;
  }

  button {
    background: ${(props) => props.theme.colors.yellow};
    border: 0;
    border-radius: 8px;
    width: 44px;
    height: 44px;
    margin-right: 1px;
  }

  button:hover img {
    animation: ${size} 1s ease-in-out 1;
  }
`;

export const Message = styled.p`
  font-size: 1.2rem;
  margin: 5px 10px;
  color: #aaaab6;
`;
