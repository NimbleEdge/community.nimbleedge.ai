import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    >div:nth-child(1) {
        align-items: center;
        >div:nth-child(1) {
            margin-right: 1rem;
            img {
                width: 3rem;
                height: 3rem;
            }
        }
        >div:nth-child(2) {
            >div:nth-child(1) {
                font-weight: 600;
                font-size: 1rem;
            }
            >div:nth-child(2) {
                opacity: 0.5;
                align-items: center;
                >div:nth-child(2) {
                    width: 5px;
                    height: 5px;
                    border-radius: 2px;
                    background-color: #000;
                    margin-inline: 7px;
                }
            }
        }
    }
`;

const Author = ({
    authorName,
    authorImage,
    date,
    readTime
}) => {
    return (
        <Container>
            <div className="flex-row">
                <div>
                    <img src={authorImage} alt="author image"/>
                </div>
                <div className="flex-column">
                    <div>{authorName}</div>
                    <div className="flex-row">
                        <div>{date}</div>
                        <div></div>
                        <div>{readTime}</div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Author;
