{/**import CoffeImg from "../../assets/Coffee.png";
import { ButtonRemove } from "../ButtonRemove";
import { InputNumber } from "../InputNumber"; */}
import { CatalogCartContainer, CatalogCartDetails } from "./styles";

interface CatalogCartProps {
  width?: string;
  name: string;
  price: number;
  image: string;
}

export function CatalogCart({ width,name,price,image}: CatalogCartProps) {
  console.log("name café: ",name);

  return (
    <CatalogCartContainer width={width}>
      <img className="catalogCartImage" src={image} />
      <CatalogCartDetails>
        <p className="catalogCartTitle">Seu pedido: {name}</p>
      </CatalogCartDetails>
      <p className="precoCartCatalog">
        Valor : R$ <span>{price}</span>
      </p>
    </CatalogCartContainer>
  );
}
