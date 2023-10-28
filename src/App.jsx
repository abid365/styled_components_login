import GlobalStyles from "./components/Styles/Global";
import { Container } from "./components/Styles/Contaner.styled";
import Login from "./components/Login";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Login />
      </Container>
    </>
  );
}

export default App;
