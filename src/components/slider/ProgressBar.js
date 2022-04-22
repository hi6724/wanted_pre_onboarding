import React from "react";
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

export default function ProgressBar({ value, setValue, checkPointList }) {
  return (
    <Container>
      <ColoredTrack id="coloredTrack" value={value} />
      {checkPointList.map((data, i) => (
        <GrayThumb onClick={() => setValue(data)} key={i} value={data} nowPos={value} />
      ))}
      <Track id="track" onClick={(e) => setValue(Math.floor(e.pageX / 5))}></Track>
      <Thumb id="thumb" value={value}></Thumb>
    </Container>
  );
}
