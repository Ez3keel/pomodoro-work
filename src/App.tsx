// Importando o css ex.: import "./App.css";
import "./styles/theme.css";
import "./styles/global.css";

//Se exportar direto na function quando for importar no main tem que colocar o mesmo nome no import import Ex.: { App } from "./App";
export function App() {
  console.log("Oi");
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="content">
            <section>LOGO</section>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="content">
            <section>MENU</section>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="content">
            <section>FORM</section>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="content">
            <section>FOOTER</section>
          </div>
        </div>
      </div>
    </>
  );
}

// export { App };
