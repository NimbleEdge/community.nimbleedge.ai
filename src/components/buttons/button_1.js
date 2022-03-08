import styled from "styled-components";

const Container = styled.a`
  width: min(90%, 10rem);
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  font-size: 1rem;
  outline: none;
  border: none;
  color: var(--white);
  font-weight: 600;
  background: var(--section-subheading) 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 10px var(--black-33);
  border-radius: 60px 60px 0px 60px;

  &:hover {
    color: white;
  }
`;

export const Button1 = ({ text, href, target, ...rest }) => {
  return (
    <Container href={href} className="flex-row" target={target ? target : "_blank"}>
      {text}
    </Container>
  );
};
