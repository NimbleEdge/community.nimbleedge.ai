import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 24vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  opacity: 1;
  border: 1px solid #ffffff1a;
  border-radius: 8px;
  padding: 4%;
  transition: all 500ms;

  :hover {
    background: #ffffff0d 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 15px #ffffff1a;
    opacity: 1;
  }
`;

const Header = styled.div`
  min-height: 20%;
  width: 100%;
  font-weight: Bold;
  font-size: 1.2vw;
  letter-spacing: 0.18px;
  color: #ffffff;
  text-align: jusity;
`;

const Body = styled.div`
  width: 100%;
  font-weight: Normal;
  font-size: 0.9vw;
  letter-spacing: 0.18px;
  color: #ffffff;
  text-align: jusity;
`;

const Footer = styled.div`
  height: 30%;
  width: 100%;
  color: #fff;
  margin-top: auto;
`;

export default function ProjectCard({ header, body }) {
  return (
    <Container>
      <Header>{header}</Header>
      <Body>{body}</Body>
      <Footer>Hello </Footer>
    </Container>
  );
}
