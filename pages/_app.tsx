import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../globalStyles";

import { Layout } from "../components/Layout";

import { theme } from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
