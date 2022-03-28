import React, { useState } from "react";
import styled from "styled-components";

const Square = (props) => {
  const [onPress, setOnPress] = useState(false);
  const [transX, setTransX] = useState(0);
  const [transY, setTransY] = useState(0);
  const onMouseDown = (e) => {
    console.log("mouseDown");
    e.preventDefault();
    const pos = e.target.getBoundingClientRect();
    console.log(pos);
    console.log(e.clientX, e.clientY);
    setOnPress(true);
  };
  const onMouseMove = (e) => {
    console.log("mouseMove");
    console.log(onPress);
    e.preventDefault();
    if (onPress === true) {
      const pos = e.target.getBoundingClientRect();
      let posX = pos.left;
      let posY = pos.top;
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      const shiftX = mouseX - posX;
      const shiftY = mouseY - posY;
      const currentX = mouseX - pos.width / 2;
      const currentY = mouseY - pos.height / 2;
      console.log(posX, posY);

      setTransX(currentX);
      setTransY(currentY);
    }
  };
  const onMouseUp = (e) => {
    console.log("mouseUp");
    setOnPress(false);
  };
  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{
        transform: `translate(${transX}px,${transY}px)`,
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <StyledDiv
        width={props.width}
        height={props.height}
        radius={props.radius}
        color={props.color}
        fontSize={props.fontSize}
        fontColor={props.fontColor}
      >
        {props.children}
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
`;

Square.defaultProps = {
  width: "100px",
  height: "100px",
  radius: "0px",
  color: "skyblue",
  fontSize: "20px",
  fontColor: "#222222",
};

export default Square;
