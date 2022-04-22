import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { RiEyeLine, RiEyeOffLine, RiCheckboxFill } from "react-icons/ri";
import InputGenerator from "./InputGenerator";

const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 20px;
  transform: translateY(50%);
`;
export default function Input() {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleChangeEmail = useCallback((value) => {
    setEmail(value);
    const ok = value.match(pattern);
    setEmailCheck(ok);
  }, []);

  const handleChangePassword = useCallback((value) => {
    setPassword(value);
  }, []);
  const EmailIcon = useMemo(
    () => () =>
      (
        <IconContainer>
          <RiCheckboxFill size="24" color={emailCheck ? "blue" : "gray"} />
        </IconContainer>
      ),
    [emailCheck]
  );
  const PasswordIcon = useMemo(
    () => () =>
      (
        <IconContainer style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
          {show ? <RiEyeOffLine size="24" /> : <RiEyeLine size="24" />}
        </IconContainer>
      ),
    [show]
  );
  return (
    <div>
      <InputGenerator
        value={useMemo(() => email, [email])}
        handleChange={handleChangeEmail}
        Icon={EmailIcon}
        type="email"
        id="E-mail"
      />
      <InputGenerator
        value={useMemo(() => password, [password])}
        handleChange={handleChangePassword}
        Icon={PasswordIcon}
        type={show ? "text" : "password"}
        id="Password"
      />
    </div>
  );
}
