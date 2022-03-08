import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .blogs-tags-text {
        padding: 2px 4px;
        background: #FFFFFF0F 0% 0% no-repeat padding-box;
        border: 1px solid #323568;
        border-radius: 4px;
        color: #323568;
        font-size: 12px;
        margin-right: 12px;
        margin-bottom: 12px;
    }
`;

const Tags = ({
    tags
}) => {
    return (
        <Container>
            {tags?.map((item, index) => {
                return <div className='blogs-tags-text'>{item}</div>
            })}
        </Container>
    );
}

export default Tags;
