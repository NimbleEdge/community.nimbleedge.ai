import styled from "styled-components";
import { useState } from "react";
import {
  isBlank,
  isValidEmailId,
  isValidPhoneNumber,
} from "../../utils/formValidator";
import { encode } from "../../utils/encode";

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
      cursor: pointer;
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
      > div:nth-child(2) {
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
  const [formData, setForm] = useState({
    firstName: "",
    lastName: "",
    organisationName: "",
    emailId: "",
    contact: "",
    message: "",
  });

  const handleOnChange = (e) => {
    setError("");
    setForm({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target[1].value;
    const secondName = event.target[2].value;
    const organisationName = event.target[3].value;
    const emailId = event.target[4].value;
    const phoneNumber = event.target[5].value;
    const message = event.target[6].value;

    if (isBlank(firstName)) {
      setError("*Please enter correct first name.");
      return;
    }

    if (isBlank(secondName)) {
      setError("*Please enter correct last name.");
      return;
    }

    if (!isValidEmailId(emailId)) {
      setError("*Please enter correct email Id.");
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setError("*Please enter correct contact number.");
      return;
    }

    if (isBlank(message)) {
      setError("*Please enter your message.");
      return;
    }

    const businessForm = document.getElementById("business-form");

    fetch(businessForm.action, {
      method: businessForm.method,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({"form-name": "business", ...formData}),
    })
    .then((res) => {
      location.reload();
    })
    .catch((err) => {
      setError("")
    });
  };

  return (
    <Container className="flex-row">
      <form
        className="flex-column"
        name="business"
        data-netify="true"
        onSubmit={handleSubmit}
        onChange={handleOnChange}
        noValidate
      >
        <input type="hidden" name="form-name" value="business" />
        <div className="split-2">
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
        </div>
        <div>
            <input type="text" name="organisationName" placeholder="Organisation Name"/>
        </div>
        <div>
          <input type="email" name="emailId" placeholder="Business Email address" />
        </div>
        <div>
          <input type="tel" name="phoneNumber" placeholder="Contact number" />
        </div>
        <div>
          <textarea
            rows="4"
            name="message"
            placeholder="Tell us more about your business"
          />
        </div>
        <div className="contact-us-error">{error}</div>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};
