import { useState } from "react";
import styled from "styled-components"
import Github from "../elements/GithubLogo";
import LogoElement from "../elements/Logo";
import { NavbarButton } from "../elements/NavbarButton";

const Navbar = styled.div`
    width: 100vw;
    height: 8vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #FFFFFF;
    position: fixed;
    top: 0;
    padding: 0 7vw;
`;

const Logo = styled.div`
    height: 100%;
    width: 45%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0;

`;

const RightSide = styled.div`
    flex: 1;
    float: right;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ButtonsWrapper = styled.div`
    float: right;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;


export default function NavbarComponent(props) {
    const [activebutton, setActiveButton] = useState(0);
    return <Navbar>
        <Logo>
            <LogoElement />
        </Logo>
        <RightSide>
            <ButtonsWrapper>
                <NavbarButton id={1} active={activebutton === 1} button_text={"About Us"} setActive={setActiveButton} href="#aboutus" />
                <NavbarButton id={2} active={activebutton === 2} button_text={"Projects"} setActive={setActiveButton} href="#projects" />
                <NavbarButton id={3} active={activebutton === 3} button_text={"Blogs"} setActive={setActiveButton} href="#blogs" />
                <NavbarButton id={4} active={activebutton === 4} button_text={"Volunteer"} setActive={setActiveButton} href="#volunteer" />
                <NavbarButton id={5} active={activebutton === 5} button_text={"Start a Club"} setActive={setActiveButton} href="#startaclub" />
            </ButtonsWrapper>
            <Github />
        </RightSide>
    </Navbar>
}