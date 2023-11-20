
import React from "react";
import { CardContainer, DeleteButton,  ProductInfo, ProductTitle, TimeInfo } from "./productcardStyle";

const ProductCard = ({onRemove, product}) => {
    
    

    return (
    
                <CardContainer>
                    <ProductTitle>{product.sabor}</ProductTitle>
                    <ProductInfo>Tamanho: {product.tamanho}</ProductInfo>
                    <ProductInfo>Acompanhamento: {product.acompanhamentos.join(", ")}</ProductInfo>
                    <TimeInfo>Tempo de preparo: {product.tempo} minutos</TimeInfo>
                    <DeleteButton onClick={() => onRemove(product)}>Remover</DeleteButton>
                </CardContainer>
    );
}

export default ProductCard;