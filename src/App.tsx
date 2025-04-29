// Importando o css ex.: import "./App.css";
import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { Footer } from "./components/Footer";
import { PlayCircleIcon } from "lucide-react";
import { Heading } from "./components/Heading";
import { useState } from "react";

//Se exportar direto na function quando for importar no main tem que colocar o mesmo nome no import import Ex.: { App } from "./App";
export function App() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
    setNumero((prevState) => prevState + 1);
  }

  return (
    <>
      <Heading>
        Número: <span id="numero">{numero}</span>
      </Heading>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText={numero.toString()}
              id="meuInput"
              type="text"
              title="TITULO"
              placeholder="Digite algo"
            />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton color="green" icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

// export { App };
