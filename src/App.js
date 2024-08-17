import React from "react";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<><Navbar /><Product /></>} />
        <Route path="/cart" element={<><Navbar /><Cart /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
