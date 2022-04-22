import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CheckPoints from "./CheckPoints";
import ProgressBar from "./ProgressBar";

const ResultContainer = styled.div`
  width: 500px;
  padding: 25px 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 25px;
  border-radius: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ResultText = styled.span`
  font-weight: 600;
  margin-right: 15px;
  font-size: 24px;
`;
export default function Slider() {
  const [value, setValue] = useState(0);
  const onClick = useCallback((value) => {
    setValue(value);
  }, []);
  const handleValue = (e) => {
    e.screenX > 0 && e.screenX / 5 < 101 && setValue(Math.floor(e.screenX / 5));
  };
  useEffect(() => {
    const thumb = document.querySelector("#thumb");
    const track = document.querySelector("#track");
    const coloredTrack = document.querySelector("#coloredTrack");
    thumb.addEventListener("drag", (e) => handleValue(e));
    track.addEventListener("mousedown", (e) => handleValue(e));
    track.addEventListener("drag", (e) => handleValue(e));
    coloredTrack.addEventListener("mousedown", (e) => handleValue(e));
    coloredTrack.addEventListener("drag", (e) => handleValue(e));
  }, []);
  const checkPointList = [1, 25, 50, 75, 100];
  return (
    <div>
      <ResultContainer>
        <ResultText>{value}</ResultText>%
      </ResultContainer>
      <ProgressBar value={value} setValue={setValue} checkPointList={checkPointList} />
      <CheckPoints onClick={onClick} />
    </div>
  );
}
