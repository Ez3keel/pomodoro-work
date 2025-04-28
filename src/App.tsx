//Importando o componente
import { Heading } from "./components/heading";
// Importando o css ex.: import "./App.css";
import "./styles/theme.css";
import "./styles/global.css";

//PascalCase
//App
//HeaderHeading

//Se exportar direto na function quando for importar no main tem que colocar o mesmo nome no import import Ex.: { App } from "./App";
export function App() {
  console.log("Oi");
  return (
    <>
      <Heading> Olá mundo 1! </Heading>
      <Heading> Olá mundo 2! </Heading>
      <Heading> Olá mundo 3! </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error
        praesentium, id minus incidunt eos enim neque, totam harum corrupti
        accusantium asperiores voluptates quae soluta est? Sed distinctio
        dignissimos facilis?
      </p>
    </>
  );
}

// export { App };
