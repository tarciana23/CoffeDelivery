import ArabeImage from "../assets/imgCafe/Arabe.png";
import CaféComLeiteImage from "../assets/imgCafe/Cafe_com_leite.png"
import CapuccinoImage from "../assets/imgCafe/Capuccino.png";
import ChocolateQuenteImage from "../assets/imgCafe/Chocolate_Quente.png";
import CubanoImage from "../assets/imgCafe/Cubano.png";
import ExpressoAmericanoImage from "../assets/imgCafe/Expresso_Americano.png";
import ExpressoCremosoImage from "../assets/imgCafe/Expresso_Cremoso.png";
import ExpressoGeladoImage from "../assets/imgCafe/Expresso_Gelado.png";
import ExpressoTradicionalImage from "../assets/imgCafe/Expresso_Tradicional.png";
import HavaianoImage from "../assets/imgCafe/Havaiano.png";
import IrlandesImage from "../assets/imgCafe/Irlandes.png"
import LatteImage from "../assets/imgCafe/Latte.png";
import MacchiatoImage from "../assets/imgCafe/Macchiato.png";
import MocaccinoImage from "../assets/imgCafe/Mocaccino.png";

// src/contexts/CartContext.tsx
import { createContext, useState, ReactNode, useContext } from "react";

// Definir os tipos para os cafés
export interface Coffee {
  id: number;
  name: string;
  tipo: string[];
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface CoffeeContextData {
  coffees: Coffee[];
  addToCart: (id: number, quantity: number) => void;
  getCoffeeById: (id: number) => Coffee | undefined;
}

// Inicializar o contexto com tipagem explícita
const CoffeeContext = createContext<CoffeeContextData | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {  // Verifique se está exportando corretamente

  const [coffees, setCoffees] = useState<Coffee[]>([
    {
      id: 1,
      name: "Árabe",
      tipo: ["Especial"],
      description: "Café de sabor intenso, com notas amargas",
      price: 10.00,
      image: ArabeImage,
      quantity: 0,
    },
    {
      id: 2,
      name: "Café com leite",
      tipo: ["Tradicional", "Com leite"],
      description: "Café misturado com leite vaporizado, suave e cremoso",
      price: 8.50,
      image: CaféComLeiteImage,
      quantity: 0,
    },
    {
      id: 3,
      name: "Capuccino",
      tipo: ["Tradicional","Com leite"],
      description: "Café expresso com leite vaporizado e espuma",
      price: 12.00,
      image: CapuccinoImage,
      quantity: 0,
    },
    {
      id: 4,
      name: "Chocolate Quente",
      tipo: ["Tradicional","Com leite"],
      description: "Uma bebida doce e quente de chocolate cremoso",
      price: 11.00,
      image: ChocolateQuenteImage,
      quantity: 0,
    },
    {
      id: 5,
      name: "Cubano",
      tipo: ["Especial","Alcoólico","Gelado"],
      description: "Café gelado com leite condensado e rum",
      price: 14.00,
      image: CubanoImage,
      quantity: 0,
    },
    {
      id: 6,
      name: "Expresso Americano",
      tipo: ["Tradicional"],
      description: "Café expresso diluído com água quente",
      price: 7.50,
      image: ExpressoAmericanoImage ,
      quantity: 0,
    },
    {
      id: 7,
      name: "Expresso Cremoso",
      tipo: ["Tradicional"],
      description: "Café expresso de sabor intenso e textura cremosa",
      price: 9.00,
      image: ExpressoCremosoImage,
      quantity: 0,
    },
    {
      id: 8,
      name: "Expresso Gelado",
      tipo: ["Tradicional", "Gelado"],
      description: "Café expresso servido com gelo para um toque refrescante",
      price: 10.50,
      image: ExpressoGeladoImage,
      quantity: 0,
    },
    {
      id: 9,
      name: "Expresso Tradicional",
      tipo: ["Tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.90,
      image: ExpressoTradicionalImage,
      quantity: 0,
    },
    {
      id: 10,
      name: "Havaiano",
      tipo: ["Especial"],
      description: "Café suave com um toque de sabor tropical",
      price: 11.50,
      image: HavaianoImage,
      quantity: 0,
    },
    {
      id: 11,
      name: "Irlandês",
      tipo: ["Especial","Alcoólico"],
      description: "Café com uísque irlandês e chantilly",
      price: 13.00,
      image: IrlandesImage,
      quantity: 0,
    },
    {
      id: 12,
      name: "Latte",
      tipo: ["Tradicional","Com leite"],
      description: "Café expresso com uma grande quantidade de leite vaporizado",
      price: 9.50,
      image: LatteImage,
      quantity: 0,
    },
    {
      id: 13,
      name: "Macchiato",
      tipo: ["Tradicional","Com leite"],
      description: "Café expresso com um toque de leite vaporizado",
      price: 8.00,
      image: MacchiatoImage,
      quantity: 0,
    },
    {
      id: 14,
      name: "Mocaccino",
      tipo: ["Tradicional","Com leite"],
      description: "Café expresso com leite vaporizado e calda de chocolate",
      price: 12.00,
      image: MocaccinoImage,
      quantity: 0,
    }
  ]);
  
  const addToCart = (id: number, quantity: number) => {
    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === id
          ? { ...coffee, quantity: coffee.quantity + quantity }
          : coffee
      )
    );

  };

    // Função para buscar o café por id
    const getCoffeeById = (id: number) => {
      return coffees.find((coffee) => coffee.id === id);
    };

  return (
    <CoffeeContext.Provider value={{ coffees, addToCart, getCoffeeById }}>
      {children}
    </CoffeeContext.Provider>
  );
};

// Hook para acessar o contexto de café
export const useCoffee = (): CoffeeContextData => {
  const context = useContext(CoffeeContext);

  if (!context) {
    throw new Error("useCoffee must be used within a CoffeeProvider");
  }

  return context;
};
