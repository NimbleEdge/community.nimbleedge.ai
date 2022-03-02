import { useState } from "react";
import styled from "styled-components";
import { encode } from "../../utils/encode";
import { isBlank, isValidPhoneNumber, isValidEmailId } from "../../utils/formValidator";

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
    >div:nth-child(1), >div:nth-child(2), >div:nth-child(3), >div:nth-child(4), >div:nth-child(5) {
      margin-bottom: 2rem;
    }  
    >div:nth-child(6) {
      margin-bottom: 1rem;
    }
    div {
      width: 100%;
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

  .start-a-club-error {
    height: 2rem;
    width: 100%;
    color: red;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 949px) {
    padding: 0;
    form {
      padding: 2rem;
      >div:nth-child(2) {
        input {
          width: 100%;
        }
        >input:nth-child(1) {          
          margin-bottom: 2rem;
        }
      }
    }
  }
`;

export const Form = ({}) => {
  const [formData, setForm] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    collegeName: "",
  });
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setError("");
    setForm({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target[1].value;
    const lastName = event.target[2].value;
    const emailId = event.target[3].value;
    const phoneNumber = event.target[4].value;
    const collegeName = event.target[5].value;

    if (isBlank(firstName)) {
      setError("*Please enter correct first name.");
      return;
    }

    if (isBlank(lastName)) {
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

    if(isBlank(collegeName)) {
      setError("*Please enter college name.")
    }

    const startAClubForm = document.getElementById("start-a-club-form");

    fetch(startAClubForm.action, {
      method: startAClubForm.method,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({"form-name": "start-a-club", ...formData}),
    })
    .then(res => {
      location.reload();
    })
    .catch(err => {
      location.reload();
    })
  }

  return (
    <Container className="flex-row">
      <form 
        className="flex-column"
        name="start-a-club"
        data-netify="true"
        onChange={handleOnChange}
        onSubmit={handleSubmit}
        noValidate
      >
        <input type="hidden" name="form-name" value="start-a-club" />
        <div className="split-2">
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" name="emailId" placeholder="Email address" />
        </div>
        <div>
          <input type="tel" name="phoneNumber" placeholder="Contact number" />
        </div>
        <div>
          <input type="text" name="collegeName" placeholder="College name" />
        </div>
        <div className="start-a-club-error">{error}</div>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};
