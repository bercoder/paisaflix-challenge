import { FC, ReactNode } from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";

import { Container } from "./styles";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
