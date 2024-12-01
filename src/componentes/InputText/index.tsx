import { InputStyled } from "./style";

interface InputTextProps {
  id: string;
  placeholder: string;
  width?: string; // Propriedade opcional para largura
}

export function InputText({ id, placeholder, width }: InputTextProps) {
  return <InputStyled id={id} placeholder={placeholder} width={width} />;
}
