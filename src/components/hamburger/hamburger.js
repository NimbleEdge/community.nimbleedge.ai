import { useState } from "react";
import styled from "styled-components";
import { Burger } from "./burger";
import { Menu } from "./menu";

const Container = styled.div`
  z-index: 1000000;
`;

export const Hamburger = () => {
  const [open, toggle] = useState();
  return (
    <Container>
      <Burger open={open} toggle={toggle} />
      <Menu open={open} toggle={toggle} />
    </Container>
  );
};
