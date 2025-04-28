import styles from "./styles.module.css";

type HeadingProps = {
  // Com ReactNode é o tipo que o children aceita, isso evita erros
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
