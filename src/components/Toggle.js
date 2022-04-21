import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.15);
  justify-content: center;
  width: 300px;
  padding: 5px;
  border-radius: 25px;
  position: relative;
`;
const ButtonContainer = styled.div`
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  padding: 10px;
  width: 150px;
  height: 45px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.select ? "black" : "rgba(0,0,0,0.15)")};
  z-index: 99;
`;
const WhiteBox = styled(ButtonContainer)`
  background-color: white;
  position: absolute;
  left: ${(props) => (props.select === 1 ? "5px" : "145px")};
  transition: all 0.2s;
`;
export default function Toggle() {
  const [select, setSelect] = useState(1);
  return (
    <Container>
      <WhiteBox select={select}></WhiteBox>
      <ButtonContainer select={select === 1} onClick={() => setSelect(1)}>
        기본
      </ButtonContainer>
      <ButtonContainer select={select === 2} onClick={() => setSelect(2)}>
        상세
      </ButtonContainer>
    </Container>
  );
}
