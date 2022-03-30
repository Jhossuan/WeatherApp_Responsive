import styled from "styled-components";

export const Input = styled.input`
    border:none;
    padding:10px;
    text-align:center;
    border-radius:0 0 5px 5px;
    outline:none;
    background-color:rgba(255, 255, 255, 0.747);
    transition:all 0.5s;
    &:focus{
        background-color:white;
    }

`
export const ContainerLeft = styled.div`
    text-align:center;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.774);
    .name-city{
        font-size:3rem;
        font-weight:500;
        margin-top:10vh;
    }

`
export const ContainerRight = styled.div`
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.774);
`