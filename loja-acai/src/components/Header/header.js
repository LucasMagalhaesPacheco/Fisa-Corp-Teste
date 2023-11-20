import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assents/Logo.png'
import { goToHome, goToCart } from '../../routes/coordinator'
import { HeaderStyled } from './styled'

export const Header = () => {
    const navigate = useNavigate()

  return (
    <HeaderStyled>
    <img src={Logo} alt="Logotipo Açaí" onClick={() => goToHome(navigate)}/>
    {
       window.location.pathname === "/" ?
       <button onClick={() => goToCart(navigate)}> Carrinho</button> :
       <button onClick={() => goToHome(navigate)}> Retornar</button>
    }

    </HeaderStyled>
  )
}