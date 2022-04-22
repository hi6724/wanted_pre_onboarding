import React from "react";
import styled from "styled-components";

const CheckPointContainer = styled.div`
  margin-top: 15px;
  width: 500px;
  height: 10px;
  display: flex;
  justify-content: space-between;
`;
const CheckPoint = styled.button`
  outline: none;
  border: none;
  padding: 5px;
  width: 45px;
  height: 25px;
  border-radius: 15px;
  color: #7e7e7e;
  font-weight: 600;
  background-color: #ebecf0;
  :hover {
    background-color: #10afafaf;
    color: white;
  }
`;
const checkPointList = [1, 25, 50, 75, 100];

function CheckPoints({ onClick }) {
  return (
    <>
      <CheckPointContainer>
        {checkPointList.map((data, i) => (
          <CheckPoint onClick={() => onClick(data)} key={i}>
            {data}%
          </CheckPoint>
        ))}
      </CheckPointContainer>
    </>
  );
}
export default React.memo(CheckPoints);
