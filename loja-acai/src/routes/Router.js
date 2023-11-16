import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from '../pages/cart/Cart';
import GlobalStyle from "../GlobalStyle";

const Router = () => {
    return (
        <BrowserRouter>
         <GlobalStyle />
         <Routes>
          <Route index exact default path="/" element={<Home />} />
          <Route exact path="/Carrinho" element={<Cart />} />
         </Routes>
        </BrowserRouter>
    )
}

export default Router