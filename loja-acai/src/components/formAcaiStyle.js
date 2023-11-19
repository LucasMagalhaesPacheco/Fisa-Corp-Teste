import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: 	#DDA0DD;
  overflow: auto;
  

  form {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    padding: 20px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      margin-bottom: 5px;
    }

    select,
    button {
      margin-top: 10px;
      width: 200px;
      height: 25px;
      font-size: 15px;
      border-radius: 0.5rem;      
    }
  }
`

export const ToppingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ToppingOption = styled.div`
  background-color: ${({ selected }) => (selected ? "purple" : "lightgray")};
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  color: white;
`

export const ProductCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-height: 300px; 
  border: transparent;
  overflow-y: auto; 
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #ccc; 
  border-radius: 10px;
`