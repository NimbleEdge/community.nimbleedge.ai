import styled from "styled-components";
import { Twitter, LinkedIn } from "@mui/icons-material";
import { Globe } from "../Elements/whiteGlobe";
import { NimbleEdge } from "../Elements/whiteNimbleEdgeLogo";
import { HashLink as Link } from "react-router-hash-link";
import { Button1 } from "../buttons/button_1";

const Container = styled.div`
  flex-basis: 100%;
  margin-block: 0 13rem;
  > div:nth-child(1) {
    margin-top: 7rem;
    margin-bottom: 2rem;
    > a:nth-child(1) {
      width: 8rem;
      svg {
        width: 7rem;
        height: 7rem;
      }
    }
    > a:nth-child(2) {
      width: 16rem;
      svg {
        width: 16rem;
        height: 8rem;
      }
    }
  }
  > div:nth-child(2) {
    align-items: flex-start;
  }
  .footer-flow-us-text {
    color: #fff;
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  .footer-flow-us-icons-wrapper {
    align-items: center;
    > a:nth-child(1) {
      background-color: var(--white);
      padding: 4px;
      border-radius: 4px;
      margin-right: 1rem;
    }
    > a:nth-child(2) {
      svg {
        transform: scale(1.6);
      }
    }
  }

  @media only screen and (max-width: 949px) {
    margin-block: 1rem;
    > div:nth-child(2) {
      align-items: flex-end;
      justify-content: space-between;
    }
    .footer-flow-us-text {
      margin-top: 0rem;
    }
    > div:nth-child(1) {
      margin-top: 2rem;
      margin-bottom: 1rem;
      align-items: center;
      > a:nth-child(1) {
        svg {
          width: 5rem;
          height: 4rem;
        }
      }
      > a:nth-child(2) {
        svg {
          width: 12rem;
          height: 6rem;
        }
      }
    }
  }
`;

export const Logos = () => {
  return (
    <Container>
      <div className="split-1">
        <Link to="/">
          <Globe />
        </Link>
        <Link to="/">
          <NimbleEdge />
        </Link>
      </div>
      <div className="split-1">
        <Button1
          text={"Sponsor us"}
          href="https://forms.gle/rQEzdY9JRW6vb1nJ9"
        />
        <div className="flex-column">
          <div className="footer-flow-us-text">Follow us:</div>
          <div className="footer-flow-us-icons-wrapper flex-row">
            <a
              href="https://twitter.com/NimbleedgeINC"
              target="_blank"
              className="flex-row"
            >
              <Twitter sx={{ color: "black" }} fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/company/nimbleedge/"
              target="_blank"
              className="flex-row"
            >
              <LinkedIn sx={{ color: "white" }} fontSize="large" />{" "}
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
