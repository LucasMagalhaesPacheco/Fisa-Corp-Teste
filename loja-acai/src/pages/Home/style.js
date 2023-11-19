import styled from 'styled-components';
import HomeLogo from "../../assents/HomeLogo.jpg"

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px;
  height: 100vh;
  background-image: url(${HomeLogo});
  background-size: cover;
  background-position: center;
  color: #fff;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

export const Contraste = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5); 
  padding: 20px;
  border-radius: 10px;
`

export const Botao = styled.button`
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
`