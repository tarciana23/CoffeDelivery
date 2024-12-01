import { CartYellow} from '../../componentes/CartYellow';
import LogoImg from '../../assets/Logo.svg';

import { HeaderStyled } from "./style"

export function Header(){
    return(
        <HeaderStyled>
                <ul>
                    <li><img src={LogoImg}/></li>
                    <li><span>Vitória da Conquista, Bahia</span> <CartYellow /> </li>
                </ul>
        </HeaderStyled>
    )
}