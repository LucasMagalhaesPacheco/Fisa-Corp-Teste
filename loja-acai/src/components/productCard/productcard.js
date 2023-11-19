
import React from "react";
import { CardContainer, DeleteButton, ProductCardContainer, ProductInfo, ProductTitle, TimeInfo } from "./productcardStyle";

const ProductCard = ({onRemove}) => {
    
    const storedProducts = localStorage.getItem("selectedProducts");
    
    const products = storedProducts ? JSON.parse(storedProducts) : [];

    return (
        <div>
            
            {products.map((product, index) => (
                <CardContainer key={index}>
                    <ProductTitle>{product.sabor}</ProductTitle>
                    <ProductInfo>Tamanho: {product.tamanho}</ProductInfo>
                    <ProductInfo>Acompanhamento: {product.acompanhamentos.join(", ")}</ProductInfo>
                    <TimeInfo>Tempo de preparo: {product.tempo}</TimeInfo>
                    <DeleteButton onClick={() => onRemove(product)}>Remover</DeleteButton>
                </CardContainer>
            ))}
        </div>
    );
}

export default ProductCard;