import React from "react";
import { useNavigate }  from "react-router-dom"
import { Botao, Contraste, HomeContainer } from "./style";


const Home = () => {
    const navigate = useNavigate();



    return (
        <HomeContainer>
        <Contraste>
          <h1>Bem-vindo à Loja de Açaí</h1>
          
            <Botao>Ver Produtos</Botao>
          
        </Contraste>
      </HomeContainer>

    )
}

export default Home;