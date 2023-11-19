import React from "react";
import { useNavigate }  from "react-router-dom"
import { Botao, Contraste, HomeContainer } from "./style";
import { goToCart } from "../../routes/coordinator"


const Home = () => {
    const navigate = useNavigate();



    return (
        <HomeContainer>
        <Contraste>
          <h1>Bem-vindo à Loja de Açaí</h1>
          
            <Botao onClick={() => goToCart(navigate)}>Ver Produtos</Botao>
          
        </Contraste>
      </HomeContainer>

    )
}

export default Home;