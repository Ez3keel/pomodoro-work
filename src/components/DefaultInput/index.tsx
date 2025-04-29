import "./styles.module.css";

// Com isso vai aparecer todos os tipos corretos do input no html
type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* se existir algo dentro de label vai ser true no caso vai exibir o que está dentro Ex.:  {labelText ? <label htmlFor={id}>{labelText}</label> : ""}*/}

      {/* Outra forma de validar é se existir a condição o && vai executar o código */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input type={type} id={id} {...rest} />
    </>
  );
}
