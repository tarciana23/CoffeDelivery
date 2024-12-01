import ImagemImg from '../../assets/Imagem.svg';
import { useCoffee } from "../../contexts/CartContext"; // Importando o hook do contexto

import Icon1 from  '../../assets/icon1.png';
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

import { Catalog } from '../../componentes/Catalog';

import {HeroSection,Features,ProductsSection } from './style';

import { Header } from '../../componentes/Header';

export function Home() {
    const { coffees } = useCoffee(); // Pegando os cafés do contexto
    return (
        <>
            <Header/>
            <HeroSection>
                <div className='descriptionHero'>
                    <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <Features>
                        <ul>
                            <li> <img src={Icon1}/> <span>Compra simples e segura</span></li>
                            <li> <img src={Icon2}/><span>Entrega rápida e rastreada</span></li>
                        </ul>
                        <ul>
                            <li> <img src={Icon3}/>Embalagem mantém o café intacto</li>
                            <li> <img src={icon4}/>O café chega fresquinho até você</li>
                        </ul>
                    </Features>
                </div>
                <img src = {ImagemImg}/>
            </HeroSection>

            <ProductsSection>
                <h3>Nossos cafés</h3>
                <div className='catalogExibiction'>
                   {/* Mapeando os cafés do contexto e passando para o componente Catalog */}
                    {coffees.map((coffee) => (
                        <Catalog key={coffee.id} coffee={coffee} />
                    ))}
                </div>
            </ProductsSection>
        </>
    );
}