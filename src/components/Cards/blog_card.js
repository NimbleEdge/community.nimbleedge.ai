import { Avatar } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Transition } from "react-transition-group";

const Container = styled.div`
  flex-shrink: 0;
  width: min(100%, 21rem);
  height: 24rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000000f;
  border-radius: 8px;
  margin-bottom: 2rem;
  margin-right: 2rem;
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
  .blog-comming-soon {
    height: 100%;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
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
      margin-left: 5px;
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

export const Card = ({
  style,
  headerImage,
  title,
  description,
  authorName,
  authorImage,
  activeSlide,
  index,
  setActive,
  summary,
  isMove,
}) => {
  const [focused, setFocused] = useState(true);

  const handleMouseEnter = () => {
    setFocused(true);
  };

  const handleMouseExit = () => {
    setFocused(false);
  };

  return (
    <Container
          className="flex-column"
          focused={true}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseExit}
          onClick={() => setActive(index)}
        >
          {authorName && <img className="blog-card-image" src={headerImage} alt="blog image" />}
          {authorName && <div className="blog-card-details-container flex-column">
            <div className="blog-card-title">{title}</div>
            <div className="blog-card-description">{summary}</div>
            <div className="flex-row blog-card-footer">
              <Avatar
                className="blog-card-footer-avatar"
                src={authorImage}
                alt="author"
              />
              <div className="blog-card-footer-author-name">{authorName}</div>
              {focused && (
                <a href="/blog/community-website" className="blogs-card-footer-read-more flex-row">
                  <div>Read more</div>
                  <ArrowForward className="blogs-card-footer-read-more-icon" />
                </a>
              )}
            </div>
          </div>}
          {!authorName && <div className="blog-comming-soon flex-row">coming soon</div>}
        </Container>
  );
};
