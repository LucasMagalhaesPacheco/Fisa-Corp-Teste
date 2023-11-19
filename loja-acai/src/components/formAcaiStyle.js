import styled from "styled-components";

export const FormContainer = styled.div`
  background-image: url("https://e0.pxfuel.com/wallpapers/670/130/desktop-wallpaper-conheca-os-beneficios-do-acai-para-atletas-acai.jpg");
  background-size: cover;
  background-position: center center; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  

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
      
    }
  }
`;

export const ToppingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ToppingOption = styled.div`
  background-color: ${({ selected }) => (selected ? "purple" : "lightgray")};
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  color: white;
`;