import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  const { state, setState } = props;
  console.log(props);

  function handleClick() {
    setState((prevState) => {
      // Sempre que for mudar um objeto mutável sempre criar um novo obj ou array copiar o estado anterior e dai vc pode alterar.
      return {
        ...prevState,
        currentCycle: 5,
      };
    });
  }

  return (
    <MainTemplate>
      <Container>
        <button onClick={handleClick}>Clicar</button>
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}

// export { App };
