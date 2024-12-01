import IconCart from '../../assets/Vector.png';
import { CartStyled } from './style';

interface CartPurpleProps{
    onClick?: () => void,
}

export function CartPurple({onClick} : CartPurpleProps) {
  return (
    <CartStyled onClick={onClick}>
      <img src={IconCart} alt="Cart Icon" />
    </CartStyled>
  );
}
