import { useState } from "react";
import { InputNumber } from "../InputNumber";
import { CatalogContainer } from "./style";

import { useCoffee } from "../../contexts/CartContext";
import { CartPurple } from "../CartPurple";

interface CatalogProps {
  coffee: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    tipo: string[]; // Adicionado caso não esteja definido
  };
}
export function Catalog({ coffee }: CatalogProps) {
  const { addToCart } = useCoffee();
  const [qtd, setQtd] = useState<number>(1);

  const handleAddToCart = () => {
    if (qtd <= 0) {
      alert("A quantidade deve ser maior que zero.");
      return;
    }
    addToCart(coffee.id, qtd); 
    const checkoutURL = `/checkout?id=${coffee.id}&quantity=${qtd}`;
    window.location.href = checkoutURL; 
  };

  return (
    <CatalogContainer>
      <img src={coffee.image} alt={`Imagem de ${coffee.name}`} />
      <p className="coffeeType">{coffee.tipo.join(", ")}</p>
      <div className="coffeeDescription">
        <p>{coffee.name}</p>
        <p>{coffee.description}</p>
      </div>
      <div className="coffeePrice">
        <p>
          R$ <span>{coffee.price.toFixed(2)}</span>
        </p>
        <div className="coffes_button"> 
          <CartPurple onClick={handleAddToCart} /> 
        </div>
      </div>
    </CatalogContainer>
  );
}
