import styled from "styled-components";
import NIMBLE_EDGE from "../../assets/images/nimble-edge.png";

const Logo = styled.img`
  width: 11vw;
  height: 70%;
`;

export default function LogoElement() {
  return <Logo src={NIMBLE_EDGE} alt={"nimbleedge logo"} />;
}
