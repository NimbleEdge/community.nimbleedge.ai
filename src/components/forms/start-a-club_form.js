import styled from "styled-components";

const Container = styled.div`
  width: min(100%, 45rem);
  padding: 2rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000000f;
  border-radius: 16px;
  padding: 4rem;
  align-items: center;
  justify-content: center;
  form {
    width: 100%;
    div {
      width: 100%;
      margin-bottom: 3rem;
      input {
        width: 100%;
        height: 3rem;
        padding: 0 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #000;
        outline: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #00000026;
        opacity: 0.5;
      }
    }
    div:nth-child(1) {
      justify-content: space-between;
      input {
        width: 45%;
      }
    }
    button {
      width: 10rem;
      height: 3rem;
      border: none;
      outline: none;
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      background: #c93418 0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000033;
      border-radius: 60px 60px 0px 60px;
    }
  }

  @media screen and (max-width: 949px) {
    form {
      > div:nth-child(1) {
        input {
          width: 100%;
        }
        > input:nth-child(1) {
          margin-bottom: 2rem;
        }
      }
    }
  }
`;
export const Form = ({}) => {
  return (
    <Container className="flex-row">
      <form className="flex-column" name="start-a-club">
        <input type="hidden" name="form-name" value="start-a-club" />
        <div className="split-2">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" required placeholder="Email address" />
        </div>
        <div>
          <input type="" required placeholder="Contact number" />
        </div>
        <div>
          <input type="text" required placeholder="College name" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};
