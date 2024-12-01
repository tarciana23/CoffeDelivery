import IconRemove from '../../assets/icon_remove.png';

import { ButtonRemoveStyled } from './style';

interface ButtonRemoveProps{
    texto: string;
}

export function ButtonRemove({texto} : ButtonRemoveProps){
    return(
        <ButtonRemoveStyled>
            <img src={IconRemove}/>
            {texto}
        </ButtonRemoveStyled>
    )
}