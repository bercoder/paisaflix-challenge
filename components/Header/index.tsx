import Image from "next/image";

import { Menu } from "./Menu";
import { Search } from "./Search";
import { Container, Logo } from "./styles";

import { User } from "./User";

export const Header = () => {
  return (
    <Container>
      <Logo href="/">Paisaflix</Logo>
      <Search />
      <Menu />
      <User />
    </Container>
  );
};
