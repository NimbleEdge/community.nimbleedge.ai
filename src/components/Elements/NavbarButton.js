import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Link, NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const ButtonWrapper = styled.div`
  width: 8rem;
  display: flex;

  flex-direction: column;
  align-items: center;
  opacity: 1;

  div:nth-child(2):hover {
    background-color: #000;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  opacity: 1;
  a {
    letter-spacing: 0.14px;
    font-size: 1.1rem;
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
    background-color: ${({ active }) => (active ? "#000000" : "transparent")}};
    transform: fade;
    -webkit-transition: background-color 500ms ease-out;
    -ms-transition: background-color 500ms ease-out;
`;

export const NavbarButton = ({
  id,
  buttonText,
  active,
  setActive,
  href,
  external,
  ...rest
}) => {
  const pressHandler = () => {
    setActive(id);
  };

  const [dotActive, setDotActive] = useState(false);

  useEffect(() => {
    setDotActive(active);
  }, [active]);

  const mouseEnterHandler = () => {
    setDotActive(true);
  };

  const mouseExitHandler = () => {
    setDotActive(active);
  };

  return (
    <ButtonWrapper>
      <Button
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseExitHandler}
        onClick={pressHandler}
      >
        {external ?<a href={href} target="_blank">{buttonText}</a> : <Link to={href}>{buttonText}</Link>}
      </Button>
      <Dot active={dotActive} />
    </ButtonWrapper>
  );
};
