import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from '../pages/cart/Cart';
import GlobalStyle from "../GlobalStyle";
import { Header } from "../components/Header/header";
import Error from "../pages/error/error";

const Router = () => {
    return (
        <BrowserRouter>
         <GlobalStyle />
         <Header />
         <Routes>
          <Route index exact default path="/" element={<Home />} />
          <Route exact path="/Carrinho" element={<Cart />} />
          <Route exact path="*" element={<Error />} />
         </Routes>
        </BrowserRouter>
    )
}

export default Router