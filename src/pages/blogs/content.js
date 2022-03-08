import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";

const Container = styled.div`
    padding: 2rem 0;
    .react-markdown-previewer {
        white-space: pre-wrap;
    }
`;

const Content = ({
    content
}) => {
    return (
        <Container>
            <ReactMarkdown 
                children={content}
                remarkPlugins={[remarkGfm]}
                className="react-markdown-previewer"
            />
        </Container>
    );
}

export default Content;
