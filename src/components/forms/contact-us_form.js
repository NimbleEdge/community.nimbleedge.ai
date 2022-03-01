import styled from "styled-components";
import { useState } from "react";
import {
  isBlank,
  isValidEmailId,
  isValidPhoneNumber,
} from "../../utils/formValidator";

const Container = styled.div`
  width: min(100%, 45rem);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000000f;
  border-radius: 16px;
  align-items: center;
  padding: 4rem;
  justify-content: center;
  form {
    width: 100%;
    > div:nth-child(1),
    > div:nth-child(2),
    > div:nth-child(3),
    > div:nth-child(4) {
      margin-bottom: 1rem;
    }
    > div:nth-child(5) {
      margin-bottom: 1rem;
    }
    div {
      width: 100%;
      input {
        width: 100%;
        height: 4rem;
        padding: 0 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #000;
        outline: none;
        border: none;
        background: #fafafa 0% 0% no-repeat padding-box;
        border-radius: 8px;
        opacity: 0.5;
      }
    }
    div:nth-child(1) {
      justify-content: space-between;
      input {
        width: 45%;
      }
    }
    textarea {
      resize: none;
      width: 100%;
      height: 8rem;
      outline: none;
      border: none;
      background: #fafafa 0% 0% no-repeat padding-box;
      border-radius: 8px;
      padding: 1rem;
      font-size: 1rem;
      font-weight: 600;
      color: #000;
      opacity: 0.5;
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

  .contact-us-error {
    height: 2rem;
    width: 100%;
    font-size: 0.8rem;
    color: red;
  }

  @media screen and (max-width: 949px) {
    padding: 2rem;
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
  const [error, setError] = useState("");

  const handleOnChange = () => {
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target[0].value;
    const secondName = event.target[1].value;
    const emailId = event.target[2].value;
    const phoneNumber = event.target[3].value;
    const concern = event.target[4].value;

    if (isBlank(firstName)) {
      setError("*First Name should not empty.");
      return;
    }

    if (isBlank(secondName)) {
      setError("*Last Name should not empty.");
      return;
    }

    if (!isValidEmailId(emailId)) {
      setError("*Please enter correct email Id.");
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setError("*Please enter correct contact detail.");
      return;
    }

    if (isBlank(concern)) {
      setError("*Please enter your concern.");
      return;
    }

    const formData = new FormData(event.target);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => console.log("Form submited", res))
      .catch((err) => err);
  };
  return (
    <Container className="flex-row">
      <form
        className="flex-column"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
        onChange={handleOnChange}
        noValidate
      >
        <div className="split-2">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email address" />
        </div>
        <div>
          <input type="tel" name="contactno." placeholder="Contact number" />
        </div>
        <div>
          <textarea
            rows="4"
            name="concern"
            placeholder="Enter your concern here..."
          />
        </div>
        <div className="contact-us-error">{error}</div>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};
