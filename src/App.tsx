import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { Home } from "./Pages/Home";
import { Checkout } from "./Pages/Checkout";
import { Success } from "./Pages/Sucess" // Corrigir o nome do arquivo e do componente

export function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} /> {/* Corrigir o nome aqui */}
        </Routes>
      </Router>
    </CartProvider>
  );
}