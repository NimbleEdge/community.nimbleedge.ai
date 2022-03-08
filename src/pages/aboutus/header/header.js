import styled from "styled-components";

const Container = styled.div`
  padding: 6rem 0;
  background: transparent
    linear-gradient(310deg, #45108a 2%, #3d065f 29%, #12054e 100%, #10054d 100%)
    0% 0% no-repeat padding-box;
  > div:nth-child(1) {
    h1 {
      color: var(--white);
    }

    .about-top-1 {
      color: var(--white);
      margin-top: 2rem;
      font-style: italic;
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 3rem;
      span {
        font-size: 2rem;
      }
    }
    p {
      color: var(--white);
      font-size: 1.3rem;
    }
  }
`;
export default function Header() {
  return (
    <Container className="main-container">
      <div className="container flex-column">
        {/* <h1>Join The Revolution Towards The Edge!</h1> */}
        <blockquote className="about-top-1">
          <span>&ldquo;</span>NimbleEdge is leading the movement towards true
          edge computing. Building a new era of technology that alters the
          status quo between the cloud and the users' devices. A technology that
          is inherently privacy-preserving.<span>&#8221;</span>
        </blockquote>
        <p>
          We are leading the world away from traditional cloud-based
          architecture towards edge computing. The future we foresee allows
          users' devices to make decisions, with the cloud serving as a cog in
          the wheel. Imagine a social network of devices that can communicate
          with one another. They may share computing workloads and use the cloud
          as needed. They are not dumb spectators, but intelligent agents. The
          world has always been switching between centralization and
          decentralization. From mainframes to personal computers/smartphones.
          And then back to cloud and datacenters. We are already seeing the
          limits of the cloud in privacy, latency, security, climate impact, and
          even costs. Now is the time for decentralization once more. It's time
          to change!
        </p>
      </div>
    </Container>
  );
}
