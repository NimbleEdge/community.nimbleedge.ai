import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div:nth-child(2):hover {
        background-color: #000;
    }
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    a {
        letter-spacing: 0.14px;
        font-family: Open Sans;
        font-size: 1.1vw;
        font-style: normal;
        font-variant: normal;
        font-weight: medium;
        color: #000000;
        text-decoration: none;
    }
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({active}) => active ? "#000000" : "#FFFFFF" }};
    transform: fade;
    -webkit-transition: background-color 500ms ease-out;
    -ms-transition: background-color 500ms ease-out;
`;

export const NavbarButton = ({ 
    id,
    button_text,
    active,
    setActive,
    href,
    ...rest }) => {
    const pressHandler = () => {
        setActive(id);
    }

    const [ dotActive, setDotActive ] = useState(false);

    useEffect(() => {
        setDotActive(active);
    }, [active]);

    const mouseEnterHandler = () => {
        setDotActive(true);
    }

    const mouseExitHandler = () => {
        setDotActive(active);
    }

    return <ButtonWrapper>
        <Button  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitHandler} onClick={pressHandler}>
            <a href={href}>{button_text}</a>
        </Button>
        <Dot active={dotActive}/>
    </ButtonWrapper>
}