import React from 'react'
import PandError from "../../assents/Error.gif"
import { ErrorImage } from './style'

export default function Error() {
  return (
    <div>
        <h1>PAGINA DE ERRO, RETORNE A HOME!</h1>
    <ErrorImage src={PandError} alt="Pagina de Erro" />
    </div>
  )
}

