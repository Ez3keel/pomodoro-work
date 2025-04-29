import styles from "./styles.module.css";

// Com isso vai aparecer todos os tipos corretos do button no html
type DefaultButtonProps = {
  //  ReactNode é qualauqer coisa que o react possa ler ele vai passar para icon
  icon: React.ReactNode;
  color: "green" | "red";
} & React.ComponentProps<"button">;

export function DefaultButton({
  icon,
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
