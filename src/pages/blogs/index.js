import React from 'react';
import styled from "styled-components";
import Author from './author';
import Tags from './tags';
import Title from './title';
import GLOBE from '../../assets/images/3-Globe_Logo_Black.png';
import Content from './content';
import { Data } from "./data";
import Volunteer from '../aboutus/volunteer/volunteer';

const Container = styled.div`
    padding-top: 8vh;
    background-color: FFFFFFBA;
    >div:nth-child(1) {
        img {
            width: 100%;
            height: 80vh;
        }
    }
    >div:nth-child(2) {
        padding: 4rem 0;
    }

`;

const Blogs = () => {
    return (
        <Container className="main-container">
            <div>
                <img src={Data[0].headerImage} alt="blogs header image"/>
            </div>
            <div className='blog-container'>
                <Tags tags={Data[0].tags}/>
                <Title 
                    title={Data[0].title}
                />
                <Author 
                    authorImage={Data[0].authorImage}
                    authorName={Data[0].authorName}
                    date={Data[0].date}
                    readTime={Data[0].readTime}
                />
                <Content 
                    content={Data[0].content}
                />
            </div>
            <Volunteer />
        </Container>
    );
}

export default Blogs;
