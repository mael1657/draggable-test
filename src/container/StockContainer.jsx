import React, { useRef, useState } from "react";
import styled from "styled-components";

const StockContainer = (props) => {
  const [ratio, setRatio] = useState(1);
  const stockRef = useRef(null);
  let posX = 0;
  let posY = 0;

  const onWheelHandler = (e) => {
    setRatio((ratio) => (ratio >= 0.2 ? ratio + 0.001 * e.deltaY : 0.2));
    console.log(ratio);
    // e.target.style.transform = `scale(${ratio})`;
  };

  const moveScreenStart = (e) => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);

    posX = e.clientX;
    posY = e.clientY;
  };
  const moveScreen = (e) => {
    const currentX = e.target.offsetLeft + (e.clientX - posX);
    const currentY = e.target.offsetTop + (e.clientY - posY);
    const limitX = e.target.offsetLeft + (e.clientX - posX) <= 0;
    const limitY = e.target.offsetTop + (e.clientY - posY) <= 0;

    e.target.style.transform = `translate(${currentX}px, ${currentY}px)`;
  };

  const moveScreenEnd = (e) => {
    const currentX = e.target.offsetLeft + (e.clientX - posX);
    const currentY = e.target.offsetTop + (e.clientY - posY);
    const limitX = e.target.offsetLeft + (e.clientX - posX) <= 0;
    const limitY = e.target.offsetTop + (e.clientY - posY) <= 0;
    e.target.style.transform = `translate(${currentX}px, ${currentY}px)`;
  };

  return (
    <>
      <StyledDiv
        ref={stockRef}
        ratio={ratio}
        onWheel={onWheelHandler}
        onDragStart={moveScreenStart}
        onDrag={moveScreen}
        onDragEnd={moveScreenEnd}
        draggable
      >
        {props.children}
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
  // width: ${(props) => 200 / props.ratio}%;
  // height: ${(props) => 200 / props.ratio}%;
  width: 200%;
  height: 200%;
  background-image: url(${"https://images.unsplash.com/photo-1647185256036-ea35af4ade52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"});
  transform-origin: center;
`;

export default StockContainer;
