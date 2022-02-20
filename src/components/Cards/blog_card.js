import { Avatar } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Transition } from "react-transition-group";

const Container = styled.div`
  flex-shrink: 0;
  width: 21rem;
  height: 24rem;
  margin: 0 1.5rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000000f;
  border-radius: 8px;
  opacity: ${({ focused }) => (focused ? 1 : 0.5)};
  .blog-card-image {
    display: block;
    width: 100%;
    height: 45%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .blog-card-details-container {
    flex: 1;
    padding: 1.5rem;
  }

  .blog-card-title {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.3rem;
    letter-spacing: 0.2px;
    margin-bottom: 0.4rem;
    height: 2.7rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }

  .blog-card-description {
    font-size: 0.9rem;
    letter-spacing: 0.13px;
    text-align: justify;
    line-height: 1.3rem;
    max-height: 2.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .blog-card-footer {
    margin-top: auto;
    align-items: center;

    .blog-card-footer-author-name {
      font-size: 0.8rem;
      margin-left: 1rem;
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .blogs-card-footer-read-more {
      text-decoration: none;
      align-items: center;
      div:nth-child(1) {
        font-size: 0.8rem;
        margin-right: 5px;
        color: #000;
      }
      .blogs-card-footer-read-more-icon {
        width: 1rem;
        fill: #000;
      }
    }
  }
`;

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const Card = ({
  style,
  image,
  title,
  description,
  author,
  activeSlide,
  index,
  setActive,
  isMove,
}) => {
  const [focused, setFocused] = useState(false);

  const handleMouseEnter = () => {
    setFocused(true);
  };

  const handleMouseExit = () => {
    setFocused(false);
  };

  return (
    <Transition in={true}>
      {(state) => (
        <Container
          className="flex-column"
          focused={focused || activeSlide}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseExit}
          onClick={() => setActive(index)}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <img className="blog-card-image" src={image} alt="blog image" />
          <div className="blog-card-details-container flex-column">
            <div className="blog-card-title">{title}</div>
            <div className="blog-card-description">{description}</div>
            <div className="flex-row blog-card-footer">
              <Avatar
                className="blog-card-footer-avatar"
                src="https://avatars.githubusercontent.com/u/48531975?s=400&u=f8a31df71832d0137cd9e88f1610c88bcb784c3b&v=4"
                alt="author"
              />
              <div className="blog-card-footer-author-name">{author}</div>
              {focused && (
                <a href="/" className="blogs-card-footer-read-more flex-row">
                  <div>Read more</div>
                  <ArrowForward className="blogs-card-footer-read-more-icon" />
                </a>
              )}
            </div>
          </div>
        </Container>
      )}
    </Transition>
  );
};
