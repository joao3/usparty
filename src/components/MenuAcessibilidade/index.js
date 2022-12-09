
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import ContrastIcon from '@mui/icons-material/Contrast';

const Wrapper = styled.div`
    background-color: var(--main-purple);
    color: white;
    position: absolute;
    width: 192px;
    box-sizing: border-box;
    padding: 8px 16px;
    min-height: 120px;
    border-radius: 0 0 16px 16px;
    text-align: center;
    z-index: 100;

    @media (max-width: 767px) {
        top: 70px;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`;

const Button = styled.label`
    position: relative;
    text-align: left;

    input {
        display: none;
    }
`;

const Toggle = styled.span`
    position: relative;
    display: block;
    width: 60px;
    height: 40px;
    border-radius: 20px;
    background-color: white;
    margin: 4px auto;
    cursor: pointer;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 2px;
        left:  ${props => props.checked ? "auto" : "2px"};
        right:  ${props => props.checked ? "2px" : "auto"};
        height: 36px;
        width: 36px;
        border-radius: 50%;
        background-color: var(--main-purple);
    }

    svg {
        z-index: 2;
        position: relative;
        width: 24px;
        height: 24px;
        margin: 8px;    
        margin-left:  ${props => props.checked ? "28px" : "8px"};
    }
`; 


function MenuAcessibilidade() {
    const [increased, setIncreased] = useState(false);
    const [contrast, setContrast] = useState(false);

    console.log(document.documentElement.classList)

    const handleFont = () => {
        setIncreased(!increased)
        document.documentElement.classList.toggle("increased", !increased)
    }

    const handleContrast = () => {
        setContrast(!contrast)
        document.documentElement.classList.toggle("contrast", !contrast)
    }

    return (
        <Wrapper>
            <Button tabIndex={0}  onKeyDown={(e) => e.key === "Enter" && handleFont()} role="button">
                Aumentar fontes
                <Toggle checked={increased}>
                    <TextIncreaseIcon />
                </Toggle>
                <input checked={increased} onChange={()=>handleFont()} type="checkbox"/>
            </Button>
            <Button tabIndex={0} onKeyDown={(e) => e.key === "Enter" && handleContrast()} role="button">
                Modo alto contraste
                <Toggle checked={contrast}>
                    <ContrastIcon />
                </Toggle>
                <input checked={contrast} onChange={()=>handleContrast()} type="checkbox"/>
            </Button>
        </Wrapper>
    );
}

export default MenuAcessibilidade;
