import { ButtonStyled } from "./style";

interface ButtonProps {
    texto: string;
    width?: string;
    onClick?: ()=>void;
}

export function Button({ texto, width,onClick }: ButtonProps) {
    return <ButtonStyled width={width} onClick = {onClick} >{texto}</ButtonStyled>;
}
