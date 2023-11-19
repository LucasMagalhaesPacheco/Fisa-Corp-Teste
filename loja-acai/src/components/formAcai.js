import React, { useState, useEffect } from "react";
import { sabores, tamanhos, acompanhamentos } from "../constants/mock";
import Swal from "sweetalert2";
import ProductCard from "./productcard";
import { FormContainer, ToppingsContainer, ToppingOption, ProductCardsContainer } from "./formAcaiStyle";


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
        console.log("HandleSizeChange:", event.target.value)
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
            console.log("SelectedSize", preparationTime)
        }


        selectedToppings.forEach((topping) => {
            const toppingData = acompanhamentos.find((item) => item.nome === topping)
            preparationTime += toppingData.tempo
            console.log("SelectedToppings", preparationTime)
        })



        return preparationTime
    }

    const addProduct = () => {
        let totalTime = calculationTime().toFixed(2)
        const newProduct = {
            sabor: selectedFlavor,
            tamanho: selectedSize,
            acompanhamentos: selectedToppings,
            tempo: totalTime
        }

        setSelectedProducts([...selectedProducts, newProduct])
    }


    useEffect(() => {

    }, [selectedProducts])

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

    useEffect(() => {
        // Atualiza o localStorage sempre que selectedProducts muda
        localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
    }, [selectedProducts]);


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

            <h3>Seus produtos: </h3>
            <ProductCardsContainer>
            {selectedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            </ProductCardsContainer>
        </FormContainer>

    );


}

export default AcaiForm