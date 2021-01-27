import { createGlobalStyle, ThemeProvider } from "styled-components";
import db from "../db.json";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// Themes -> Foundation tokens
const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:locale" content="pt_BR" />

        <meta property="og:title" content="AlluraQuiz Halloween" />
        <meta property="og:site_name" content="PatoQuiz" />

        <meta property="og:description" content="Next.js + StyledComponents" />
        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="2550" />
        <meta property="og:image:height" content="1700" />
        <meta property="og:type" content="website" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
