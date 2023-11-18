import React from "react";
import { ProductCardContainer, ProductInfo, ProductTitle, TimeInfo } from "./productcardStyle";



const ProductCard = ({product}) => {
    return (
        <ProductCardContainer>
            <ProductTitle>{product.sabor}</ProductTitle>
            <ProductInfo>Tamanho: {product.tamanho}</ProductInfo>
            <ProductInfo>Acompanhamento: {product.acompanhamentos.join(", ")}</ProductInfo>
            <TimeInfo>Tempo de preparo: {product.preparo}</TimeInfo>
        </ProductCardContainer>
    )
} 


export default ProductCard;