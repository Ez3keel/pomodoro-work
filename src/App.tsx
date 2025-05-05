// Importando o css ex.: import "./App.css";
import "./styles/theme.css";
import "./styles/global.css";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/AboutPomodoro";
import { useState } from "react";
import { TaskStateModel } from "./models/TaskStateModel";

// export type TaskStateModel = {
//   tasks: taskModel[];
//   secondsRemaining: number;
//   formattedSecondsRemaining: string;
//   activeTask: taskModel | null;
//   currentCycle: number; //1 a 8
//   config: {
//     workTime: number;
//     shortBreakTime: number;
//     longBreakTime: number;
//   };
// };

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

//Se exportar direto na function quando for importar no main tem que colocar o mesmo nome no import import Ex.: { App } from "./App";
export function App() {
  const [state, setState] = useState(initialState);

  console.log("APP", state);

  return <Home state={state} setState={setState} />;
}
