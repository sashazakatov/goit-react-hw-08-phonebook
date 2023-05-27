import styled from "styled-components";
 
export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 500;
    color: white;
    background-color: orangered;
    font-size: 25px;
    border: none;
    &:hover{
        background-color: #FF803E;
    }
`