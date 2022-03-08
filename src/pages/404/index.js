import React from 'react';
import styled from 'styled-components';
import { Button1 } from "../../components/buttons/button_1";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    >div:nth-child(1) {
        align-items: center;
        >div:nth-child(1) {
            font-size: 7rem;
            font-weight: 700;
        }
        >div:nth-child(2) {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        >div:nth-child(3) {
            opacity: 0.6;
            margin-bottom: 1rem;
            text-align: center;
        }
    }
`;

const NotFound = () => {
    return (
        <Container className='flex-row'>
            <div className='flex-column'>
                <div>404</div>
                <div>Page Not Found</div>
                <div>Sorry, but the page you were trying to view does not exist.</div>
                <Button1 text={"Go Home"} href="/" target={"_self"}/>
            </div>
        </Container>
    );
}

export default NotFound;
