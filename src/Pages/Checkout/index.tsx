import { useEffect, useState } from "react";
import { Header } from "../../componentes/Header";
import { InputText } from "../../componentes/InputText";
import { CatalogCart } from "../../componentes/CatalogCart";
import { Button } from "../../componentes/Button";

import { useCoffee } from "../../contexts/CartContext"; 

import LocalizacaoAmareloImg from '../../assets/localizacaoAmarelo.png';

import { ContainerCheckout, ChekoutCart,CatalogCartContainer } from './style';

import { useNavigate } from "react-router-dom";

interface CoffeeProp{
    width?: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    description: string;
    tipo: string[];
}


export function Checkout() {
    const [coffee, setCoffee] = useState<CoffeeProp | null>(null);
    
    const navigate = useNavigate();

  const { coffees, getCoffeeById } = useCoffee();

  const handlePage = () =>{
    console.log("Navegando para a página de sucesso...");
    navigate("/success");
  }

  useEffect(() => {
    if (coffee) {
      console.log("Café após update:", coffee);
      //setTeste(coffee);
    }
  }, [coffee]);
  

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = Number(params.get("id"));
        const quantity = Number(params.get("quantity"));
      
        console.log("URL Params - ID:", id, "Quantity:", quantity);
      
        if (coffees.length > 0) {
          const selectedCoffee = getCoffeeById(id);
          if (selectedCoffee) {
            setCoffee(prevState => ({ ...prevState, ...selectedCoffee, quantity }));
            console.log("Café selecionado:", { ...selectedCoffee, quantity });
          } else {
            console.log("Nenhum café encontrado com o ID:", id);
          }
        }
      }, [coffees]);
      
  
    return (
        <>
            <Header />
            <ContainerCheckout>
                <ChekoutCart>
                    <h3>Complete seu pedido</h3>
                    <div className = "checkoutCartForm">
                        <div className="checkoutCartTitulo">
                            <p><img src={LocalizacaoAmareloImg}/> <span>Endereço de entrega</span></p>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                        <form className="formEndereco">
                            <InputText id="Cep" placeholder="Digite o Cep: " width="100%"/>
                            <InputText id="Rua" placeholder="Digite a Rua: " width="100%"/>
                            <InputText id="Numero" placeholder="Digite o número: " width="100%" />
                            <div className="formDiv">
                                <InputText id="Complemento" placeholder="Digite o complemento: "/>
                                <InputText id="Bairro" placeholder="Digite o bairro: "/>
                            </div>
                            <div className="formDiv">
                                <InputText id="Cidade" placeholder="Digite a cidade: "/>
                                <InputText id="Uf" placeholder="Digite o Estado" />
                            </div>
                            <div>
                                <div className="checkoutCartPagamento">
                                    <div className="checkoutCartTitulo">
                                        <p>Pagamento</p>
                                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                    </div>
                                    
                                    <div className="checkoutCartPix">
                                        <p>Pix</p>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </ChekoutCart>

                <ChekoutCart>
                    <h3>Cafés selecionados</h3>
                    <div className="checkoutCartForm">
                        <div className="checkoutCartTitulo">
                            <p><img src={LocalizacaoAmareloImg}/> <span>Itens selecionados</span></p>
                            <p>Revise os itens que você escolheu antes de finalizar o pedido</p>
                        </div>

                        {/* Renderiza o CatalogCart para o café selecionado */}
                        <CatalogCartContainer>
                        {coffee ? (
                            <CatalogCart
                                name={coffee.name}
                                price={coffee.price}
                                image={coffee.image}
                            />
                        ) : (
                            <p>Carregando item...</p>
                        )}
                        </CatalogCartContainer>

                    {/* Linha aqui */}
                    <div className="checkoutCartLinha"></div>

                    <div className="checkoutCartConfirmar">
                        <Button onClick={handlePage} texto="Confirmar Pedido" width="100%" />
                    </div>
                 </div>
                </ChekoutCart>

            </ContainerCheckout>
        </>
    );
}
