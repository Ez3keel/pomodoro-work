// Importando o css ex.: import "./App.css";
import "./styles/theme.css";
import "./styles/global.css";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/AboutPomodoro";

//Se exportar direto na function quando for importar no main tem que colocar o mesmo nome no import import Ex.: { App } from "./App";
export function App() {
  return <Home />;
}
