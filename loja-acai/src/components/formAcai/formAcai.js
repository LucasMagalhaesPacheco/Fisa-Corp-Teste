import React, { useState, useEffect } from "react";
import { sabores, tamanhos, acompanhamentos } from "../../constants/mock";
import Swal from "sweetalert2";
import ProductCard from "../productCard/productcard";
import { FormContainer, ToppingsContainer, ToppingOption, ProductCardsContainer, H3 } from "./formAcaiStyle";


const AcaiForm = () => {
    const [selectedFlavor, setSelectedFlavor] = useState()
    const [selectedSize, setSelectedSize] = useState();
    const [selectedToppings, setSelectedToppings] = useState([])
    const [selectedProducts, setSelectedProducts] = useState([])

    const handleFlavorChange = (event) => {
        setSelectedFlavor(event.target.value);
    }

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
     
    }

    const handleToppingChange = (topping) => {
        // Aqui incluído no Array, diretamente no array o acompanhamento
        const selected = selectedToppings.includes(topping)

        if (selected) {
            // Aqui este método retira qualquer coisa que não seja um acompanhamento.
            setSelectedToppings(selectedToppings.filter((item) => item !== topping))
        } else {
            setSelectedToppings([...selectedToppings, topping])
        }
    }

    const calculationTime = () => {
        let preparationTime = 0

        if (selectedSize !== "") {
            // Aqui é para encontrar dentro do array de tamanhos a variável tempo e depois nela adicionar o número
            const sizeData = tamanhos.find((size) => size.tamanho === selectedSize)
            console.log(sizeData, "Size Data")
            preparationTime += sizeData.tempo

        }


        selectedToppings.forEach((topping) => {
            const toppingData = acompanhamentos.find((item) => item.nome === topping)
            preparationTime += toppingData.tempo

        })



        return preparationTime
    }

    const addProduct = () => {
        //Aqui é colocado um objeto dentro do array de produtos.
        let totalTime = calculationTime().toFixed(2)
        const newProduct = {
            sabor: selectedFlavor,
            tamanho: selectedSize,
            acompanhamentos: selectedToppings,
            tempo: totalTime
        }

        setSelectedProducts([...selectedProducts, newProduct])
        
        
    }


    const handleRemoveProduct = (productToRemove) => {
        const updatedProducts = selectedProducts.filter((product) => product !== productToRemove);
        setSelectedProducts(updatedProducts)
        
    };

    const handleSubmit = () => {

        let totalTime = calculationTime();
        if (!selectedFlavor || !selectedSize) {
            Swal.fire({
                icon: "warning",
                title: "Campos obrigatórios",
                text: "Por favor, selecione o sabor e o tamanho do seu açaí",
                confirmButtonText: "Ok"
            })
        } else {
            addProduct();
            console.log("AddCart", selectedProducts)
            // Aqui organizo em texto o pedido do cliente.
            const orderDetails = `
        <strong>Sabor: <strong>${selectedFlavor}<br>
        <strong>Tamanho: <strong>${selectedSize}<br>
        <strong>Acompanhamentos: <strong>${selectedToppings.join(", ")}<br>
        <strong>Tempo de preparo: </strong>${totalTime.toFixed(2)} minutos.`

            Swal.fire({
                icon: "success",
                title: "Pedido confirmado!",
                html: orderDetails,
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Delícia",
            })
        }

        //Limpa os campos depois do botão.
        setSelectedFlavor("")
        setSelectedSize("")
        setSelectedToppings([])


    }

  

    return (
        <FormContainer>
            <form>
                <h3>Escolha estes sabores deliciosos:</h3>
                <label>Sabores: </label>
                <select value={selectedFlavor} onChange={handleFlavorChange} required>
                    <option>Selecione: </option>
                    {sabores.map((sabor, index) => (
                        <option value={sabor} key={index}>
                            {sabor}
                        </option>
                    ))}
                </select>
                <label>Tamanhos: </label>
                <select value={selectedSize} onChange={handleSizeChange} required>
                    <option>Selecione: </option>
                    {tamanhos.map((tamanho, index) => (
                        <option value={tamanho.tamanho} key={index}>
                            {tamanho.tamanho}
                        </option>
                    ))}
                </select>
                <label>Condimentos: </label>
                <ToppingsContainer >
                    {acompanhamentos.map((acompanhamento, index) => (
                        <ToppingOption
                            key={index}
                            selected={selectedToppings.includes(acompanhamento.nome)}
                            onClick={() => handleToppingChange(acompanhamento.nome)}
                            value={selectedToppings}
                        >
                            {acompanhamento.nome}
                        </ToppingOption>
                    ))}
                </ToppingsContainer>
                <button type="button" onClick={handleSubmit}>Finalizar Pedido!</button>
            </form>

            <H3>Seus produtos: </H3>
            <ProductCardsContainer>
            {selectedProducts.map((product, index) => (
                <ProductCard key={index} product={product} onRemove={handleRemoveProduct} />
            ))}
            </ProductCardsContainer>
        </FormContainer>

    );


}

export default AcaiForm