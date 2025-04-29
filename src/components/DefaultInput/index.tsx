import "./styles.module.css";

// Com isso vai aparecer todos os tipos corretos do input no html
type DefaultInputProps = {
  id: string;
} & React.ComponentProps<"input">;

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input type={type} id={id} />
    </>
  );
}
