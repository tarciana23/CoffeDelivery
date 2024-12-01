import ImagemSucesso from '../../assets/imagemSucesso.png';

import { Header } from "../../componentes/Header";

import {SucessContainer,SucessHeader} from './style';

export function Success(){
    return(
        <>
            <Header/>
            <SucessContainer>
                    <SucessHeader>
                        <h3>Uhu! Pedido confirmado</h3>
                        <p>Agora é só aguardar que logo o café chegará até você</p>
                    </SucessHeader>
                <div>
                    <img src={ImagemSucesso}/>
                </div>
            </SucessContainer>
        </>
    )
}