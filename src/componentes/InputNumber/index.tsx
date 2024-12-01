import { InputNumberStyled } from './style';

interface InputNumberProps {
  onChange: (value: number) => void; // Função que será chamada quando a quantidade mudar
  value: number; // Valor da quantidade
}

export function InputNumber({ onChange, value }: InputNumberProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10) || 0; // Trata valores inválidos como 0
    onChange(newValue);
  };

  return (
    <InputNumberStyled>
      <input
        type="number"
        className="qtd"
        value={value}
        onChange={handleChange}
        min={0} // Adicione caso deseje limitar o valor mínimo
      />
    </InputNumberStyled>
  );
}
