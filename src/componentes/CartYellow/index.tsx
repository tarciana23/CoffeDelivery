import IconCart from '../../assets/Vector.png';

import { CartYellowStyled } from './style';

export function CartYellow() {
    return (
        <CartYellowStyled>
            <img src={IconCart} alt="Cart" />
        </CartYellowStyled>
    );
}
