import styled from "styled-components";
import GITHUB from "../../assets/images/github.png";

const Link = styled.a``;

const Logo = styled.img`
  width: 7rem;
`;

export default function Github({}) {
  return (
    <Link href="https://github.com/NimbleEdge" target="_blank">
      <Logo src={GITHUB} alt="github icon" />
    </Link>
  );
}
