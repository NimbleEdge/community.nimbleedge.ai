import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-block: 1rem;
`;

const Title = ({
    title
}) => {
    return (
        <Container>
            <h2>{title}</h2>
        </Container>
    );
}

export default Title;
