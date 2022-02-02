import { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components"
import LandingPage from "./landingPage/LandingPage";
import NavbarComponent from "./navbar/Navbar";
import GlobalStyle from "./styles/GlobalStyles";

const Body = styled.div`
    
`;

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ color }) => color};
`;

export default function App(props) {
    return <Fragment>
        <GlobalStyle />
        <Body>
            <NavbarComponent />
            <LandingPage />
        </Body>
    </Fragment>
}