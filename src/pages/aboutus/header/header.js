import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 8vh;
  .aboutus-header-main-content {
    height: 92vh;
    width: 100%;
    padding: 7% 10%;
    background: transparent
      linear-gradient(
        310deg,
        #45108a 2%,
        #3d065f 29%,
        #12054e 100%,
        #10054d 100%
      )
      0% 0% no-repeat padding-box;
    color: #fff;
    div:nth-child(1) {
      font-size: 3.2rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
    div:nth-child(2) {
      font-size: 1.8rem;
      letter-spacing: 0.18px;
      line-height: 4.5rem;
    }
  }
`;
export default function Header() {
  return (
    <Container>
      <div className="aboutus-header-main-content">
        <div>Join The Revolution Towards The Edge!</div>
        <div>
          It is a long-established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using ‘Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for ‘lorem Ipsum will uncover many websites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humor and the like). Lorem
          Ipsum is simply a dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s
        </div>
      </div>
    </Container>
  );
}
