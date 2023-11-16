import React from "react";
import {sabores } from '../constants/mock'

const FlavorsSelect = () => {

 return(
    <div>
        <label> Escolha o sabor do seu açaí: </label>
        <select>
        {sabores.map((sabor, index) => {
            <option value={sabor} key={index}>
                {sabor}
            </option>
        })}
        </select>
    </div>
 )
};

export default FlavorsSelect