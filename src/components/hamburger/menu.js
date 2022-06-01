import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import Github from "../Elements/GithubLogo";

const StyledMenu = styled.nav`
  position: absolute;
  top: 8vh;
  right: 0;
  box-shadow: -5px 3px 20px var(--black-F);
  background-color: var(--white);
  height: 92vh;
  width: min(75%, 25rem);
  padding: 2rem;
  transition: transform 0.4s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  display: flex;
  flex-direction: column;
  a {
    color: var(--black);
    display: block;
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: 500;
  }
  div {
    margin-top: auto;
    img {
      width: 10rem;
    }
  }
`;

export const Menu = ({ open, toggle }) => {
  return (
    <StyledMenu open={open}>
      <Link to={"about-us"} onClick={() => toggle(!open)}>
        About us
      </Link>
      <Link to={"/#project"} onClick={() => toggle(!open)}>
        Projects
      </Link>
      <a href="https://blog.nimbleedge.ai/" target={"_blank"} onClick={() => toggle(!open)}>
        Blogs
      </a>
      <a href="https://docs.nimbleedge.ai/" target={"_blank"} onClick={() => toggle(!open)}>
        Docs
      </a>
      <a href="/careers" target={"_blank"} onClick={() => toggle(!open)}>
        Careers
      </a>
      <Link to={"/contact-us"} onClick={() => toggle(!open)}>
        Contact us
      </Link>
        <Github />
    </StyledMenu>
  );
};
