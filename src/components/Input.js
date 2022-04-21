import React, { useState } from "react";
import styled from "styled-components";
import { RiEyeLine, RiEyeOffLine, RiCheckboxFill } from "react-icons/ri";
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
`;
const TextInput = styled.input.attrs(({ type }) => ({ type: type }))`
  padding: 10px;
  width: 100%;
  height: 40px;
`;
const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 20px;
  transform: translateY(50%);
`;
export default function Input() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [show, setShow] = useState(false);
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    const ok = email.match(pattern);
    setEmailCheck(ok);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <InputContainer>
        <label htmlFor="email">E-mail</label>
        <TextInput onChange={(e) => handleChangeEmail(e)} value={email} type="email" id="email" />
        <IconContainer>
          <RiCheckboxFill size="24" color={emailCheck ? "blue" : "gray"} />
        </IconContainer>
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <TextInput
          onChange={(e) => handleChangePassword(e)}
          value={password}
          type={show ? "text" : "password"}
          id="password"
        />
        <IconContainer style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
          {show ? <RiEyeOffLine size="24" /> : <RiEyeLine size="24" />}
        </IconContainer>
      </InputContainer>
    </div>
  );
}
