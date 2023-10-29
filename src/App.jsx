import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/Styles/Global";
import { Container } from "./components/Styles/Contaner.styled";
import Login from "./components/Login";

function App() {
  const theme = {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Login />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
