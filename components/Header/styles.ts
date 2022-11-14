import Link from "next/link";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.8rem 10px 0;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 2.8rem 0 0;
  }
`;

export const Logo = styled(Link)`
  flex: 1;
  /* order: 1; */
  color: white;
  text-decoration: none;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.8rem;
  font-feature-settings: "pnum" on, "lnum" on;

  @media (min-width: ${(props) => props.theme.sizes.laptop}) {
    flex: 0 1 0;
    margin-right: 6.2rem;
  }
`;

export const Nav = styled.nav`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 0 2rem;
  position: relative;

  input {
    display: none;
  }

  label {
    width: 24px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2px;
  }

  label span {
    background: white;
    width: 100%;
    height: 3px;
    border-radius: 6px;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  input:checked ~ label {
    justify-content: center;
  }

  input:not(:checked) label span:nth-of-type(2) {
    width: 90%;
  }

  input:not(:checked) label span:nth-of-type(3) {
    width: 85%;
  }

  input:checked ~ label span:nth-of-type(2) {
    display: none;
  }

  input:checked ~ label span:nth-of-type(1) {
    transform: rotate(45deg) translate(4px, 3px);
  }
  input:checked ~ label span:nth-of-type(3) {
    transform: rotate(-45deg);
  }

  & > div {
    display: none;
    flex-direction: column;
  }

  input:checked ~ div {
    display: flex;
  }

  & .items {
    position: absolute;
    top: 3rem;
    right: 0;

    @media (max-width: ${(props) => props.theme.sizes.laptop}) {
      background: #00000087;
      padding: 10px 20px;
      border-radius: 8px;
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}) {
    flex: 1;
    order: 2;
    text-align: left;

    label {
      display: none;
    }

    & > div {
      display: flex;
      flex-direction: row;
      gap: 47px;
    }

    & .items {
      position: initial;
      width: 100%;
      text-align: left;
    }
  } ;
`;

export const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  line-height: 3.2rem;
  font-size: 1.6rem;

  &.active {
    font-weight: bold;
    position: relative;
    line-height: 2.4rem;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #fed530;
    width: 87%;
    height: 2px;
  }

  &:hover {
    font-weight: bold;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}) {
    &.active::after {
      bottom: -2px;
    }
  }
`;

export const SearchStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  margin: 0 20px;

  button {
    background-color: transparent;
    border: 0;
  }

  & > div {
    position: absolute;
    top: 0;
    right: 30px;
    width: 0;
    opacity: 0;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  .open {
    opacity: 1;
    width: 200px;
  }

  .close {
    width: 0;
    opacity: 0;
  }

  input {
    width: 100%;
    padding: 2px 0;
    font-size: 1.2rem;
  }

  input::-webkit-input-placeholder {
    color: #aaaab6;
    opacity: 0.7;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}) {
    margin-right: 37px;
    order: 3;
  }
`;

export const UserStyled = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-weight: 700;
  line-height: 2.4rem;
  position: relative;
  cursor: pointer;
  background: transparent;
  border: 0;

  & > span {
    color: white;
    display: none;
  }

  & .items {
    display: none;
    position: absolute;
    flex-direction: column;
    top: 5rem;
    right: 0;
    color: #e6e6e6;
    width: max-content;
    text-align: right;
    background: #00000087;
    padding: 10px 20px;
    border-radius: 8px;

    & > span {
      margin-bottom: 1px;
      opacity: 0.8;
    }

    &.open {
      display: flex;

      @media (min-width: ${(props) => props.theme.sizes.laptop}) {
        & > span {
          display: none;
        }
      }
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}) {
    order: 4;

    & > span {
      display: initial;
    }
  }
`;
