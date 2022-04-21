import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex: 1;
  width: 450px;
  list-style: none;
  justify-content: center;
  padding: 0;
  position: relative;
`;
const ListItem = styled.li`
  cursor: pointer;
  padding: 5px 10px;
  font-weight: 600;
  flex: 1;
  display: flex;
  justify-content: center;
  transition: all 0.2s;
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  color: ${(props) => (props.select ? "black" : "rgba(0,0,0,0.15)")};
`;
const BorderContainer = styled.li`
  border-bottom: 3px solid #10afaf;
  width: 150px;
  position: absolute;
  bottom: 0px;
  transition: all 0.2s;
  left: ${(props) => (props.select - 1) * 150}px;
`;

export default function Tab() {
  const [select, setSelect] = useState(1);
  return (
    <Container>
      <BorderContainer select={select} />
      <ListItem select={select === 1} onClick={() => setSelect(1)}>
        감자
      </ListItem>
      <ListItem select={select === 2} onClick={() => setSelect(2)}>
        고구마
      </ListItem>
      <ListItem select={select === 3} onClick={() => setSelect(3)}>
        카레라이스
      </ListItem>
    </Container>
  );
}
