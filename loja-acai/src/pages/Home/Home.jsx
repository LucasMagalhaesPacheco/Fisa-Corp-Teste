import React from "react";
import { useNavigate }  from "react-router-dom"
import styled from 'styled-components';


const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px;
  height: 100vh;
  background-image: url('https://c1.wallpaperflare.com/preview/944/610/539/acai-acai-bowl-acai-brazil-healthy.jpg'); /* Substitua pelo URL da imagem desejada */
  background-size: cover;
  background-position: center;
  color: #fff;
`;

const Contraste = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5); 
  padding: 20px;
  border-radius: 10px;
`;

const Botao = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  background-color: #6a1b9a;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #4a148c;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a148c;
  }
`;

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