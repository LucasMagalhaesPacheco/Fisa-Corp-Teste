import React from "react";
import { CardContainer, ProductCardContainer, ProductInfo, ProductTitle, TimeInfo } from "./productcardStyle";




const ProductCard = ({product}) => {
    return (
        
        <CardContainer>
            <ProductTitle>{product.sabor}</ProductTitle>
            <ProductInfo>Tamanho: {product.tamanho}</ProductInfo>
            <ProductInfo>Acompanhamento: {product.acompanhamentos.join(", ")}</ProductInfo>
            <TimeInfo>Tempo de preparo: {product.tempo}</TimeInfo>
        </CardContainer>
    )
} 


export default ProductCard;