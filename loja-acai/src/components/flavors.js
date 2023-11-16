import React from "react";
import {sabores } from '../constants/mock'



const FlavorsSelect = () => {
  return (
    <div>
        <label>Escolha sabor de açai:</label>
        <select>
            {sabores.map((sabor, index) => (
            <option key={index} value={sabor}>
                {sabor}
            </option>
            ))}
        </select>
    </div>
  )
};

export default FlavorsSelect