import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  padding: 0 10%;
  background-color: #f9e0e0;
  align-items: center;
  justify-content: center;
  div:nth-child(1) {
    font-weight: 900;
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }
  div:nth-child(2) {
    font-size: 1rem;
    width: 30%;
    text-align: center;
    margin-bottom: 2.5rem;
  }
  div:nth-child(3) {
    button {
      width: 10rem;
      height: 3rem;
      cursor: pointer;
    }
    button:nth-child(1) {
      margin-right: 4rem;
      background: #c93418 0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000033;
      border-radius: 60px 60px 0px 60px;
      border: none;
      outline: none;
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
    }
    button:nth-child(2) {
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000033;
      border: 1px solid #c93418;
      border-radius: 60px 60px 60px 0px;
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;
export default function Volunteer() {
  return (
    <Container id="volunteer" className="flex-column">
      <div>Start Contributing</div>
      <div>
        Join us in working towards privacy-preserving decentralized Edge
        computation at a fraction of the cost of cloud computing, with no data
        ever leaving your devices.
      </div>
      <div className="flex-row">
        <button>Join Now</button>
        <button>Write for us</button>
      </div>
    </Container>
  );
}
