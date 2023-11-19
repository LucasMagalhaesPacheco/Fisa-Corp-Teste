import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 20px;
  width: 18.75rem;
  margin: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const ProductTitle = styled.h4`
  margin: 0;
  color: #BA55D3;
`

export const ProductInfo = styled.p`
  margin: 5px 0;
  color: #BA55D3;
`

export const TimeInfo = styled.p`
  margin: 10px 0;
  font-weight: bold;
  color: #BA55D3;
`

export const DeleteButton = styled.button`
    background-color: #ff4d4d;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 14px;
    border-radius: 5px;

    &:hover {
        background-color: #e60000;
    }
`

