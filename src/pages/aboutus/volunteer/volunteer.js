import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 4rem 10%;
  align-items: center;
  background: #fafafa 0% 0% no-repeat padding-box;
  div:nth-child(1) {
    font-size: 3rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 1rem;
  }
  div:nth-child(2) {
    width: 60%;
    text-align: center;
    font-size: 1rem;
    color: #000;
    margin-bottom: 1.5rem;
  }
  button {
    width: 10rem;
    height: 3rem;
    border-radius: 60px;
    background: #c93418 0% 0% no-repeat padding-box;
    box-shadow: 0px 6px 10px #00000033;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #fff;
    letter-spacing: 0.16px;
    cursor: pointer;
    font-weight: 600;
  }
`;

export default function Volunteer() {
  return (
    <Container id="join-us" className="flex-column">
      <div>Want to become a volunteer?</div>
      <div>
        Lorem Ipsum is simply a dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s.
      </div>
      <button>Join Now</button>
    </Container>
  );
}
