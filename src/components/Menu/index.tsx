import {
  HistoryIcon,
  HouseIcon,
  Moon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    // Procura no storage se já tem tema predefinido se não ele deixa dark
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <Moon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); //Não segue o link

    // console.log("Clicado", Date.now());

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  // useEffect(() => {
  //   console.log("useEffect sem dependência", Date.now());
  // }); //Executa todas as vezes que o componente renderiza na tela

  // useEffect(() => {
  //   console.log("useEffect com array deps vazio ", Date.now());
  // }, []); //Executa apenas quando o React monta o componente na tela pela primeira vez

  useEffect(() => {
    // console.log("Executa quando o valor de theme mudar", Date.now());
    document.documentElement.setAttribute("data-theme", theme);
    // Adc a local storage a chave e valor do theme
    localStorage.setItem("theme", theme);

    // return () => {
    //   //function de clean up
    //   console.log("Olha, este componente será atualizado");
    // };
  }, [theme]); //Executa quando o valor de theme mudar

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
