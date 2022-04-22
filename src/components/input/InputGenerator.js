import React from "react";
import styled from "styled-components";
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
function InputGenerator({ handleChange, value, Icon, id, type }) {
  return (
    <>
      <InputContainer>
        <label htmlFor={id}>{id}</label>
        <TextInput onChange={(e) => handleChange(e.target.value)} value={value} type={type} id={id} />
        <Icon />
      </InputContainer>
    </>
  );
}
export default React.memo(InputGenerator);
