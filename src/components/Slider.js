import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
`;
const Track = styled.div`
  cursor: pointer;
  background-color: #ebecf0;
  width: 500px;
  height: 8px;
  display: flex;
  align-items: center;
  background-color: #ebecf0;
`;
const Thumb = styled.div`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 2px solid white;
  background-color: #10afafaf;
  position: absolute;
  top: -4px;
  left: ${(props) => props.value * 5 - 16}px;
  z-index: 99;
`;
const ColoredTrack = styled.div`
  cursor: pointer;
  height: 8px;
  position: absolute;
  width: ${(p) => p.value * 5}px;
  background-color: #10afafaf;
`;
const GrayThumb = styled(Thumb)`
  background-color: ${(p) => (p.nowPos > p.value ? "#10afafaf" : "#ebecf0")};
  border: none;
`;
const CheckPoints = styled.div`
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
      <Container>
        <ColoredTrack id="coloredTrack" value={value} />
        {checkPointList.map((data, i) => (
          <GrayThumb onClick={() => setValue(data)} key={i} value={data} nowPos={value} />
        ))}
        <Track id="track" onClick={(e) => setValue(Math.floor(e.pageX / 5))}></Track>
        <Thumb id="thumb" value={value}></Thumb>
        <CheckPoints>
          {checkPointList.map((data, i) => (
            <CheckPoint onClick={() => setValue(data)} key={i}>
              {data}%
            </CheckPoint>
          ))}
        </CheckPoints>
      </Container>
    </div>
  );
}
