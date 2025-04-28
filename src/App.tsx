// Importando o css ex.: import "./App.css";
import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Heading } from "./components/heading";

//Se exportar direto na function quando for importar no main tem que colocar o mesmo nome no import import Ex.: { App } from "./App";
export function App() {
  return (
    <>
      <Container>
        <Heading>Teste</Heading>
      </Container>

      <Container>
        <Heading>Teste</Heading>
      </Container>
    </>
  );
}

// export { App };
