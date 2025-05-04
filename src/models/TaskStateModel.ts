import { taskModel } from "./taskModel";

export type TaskStateModel = {
  tasks: taskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: taskModel | null;
  currentCycle: number; //1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
