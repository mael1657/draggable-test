import React, { useRef } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

export const Square = (props) => {
  const nodeRef = useRef(null);
  return (
    <Draggable nodeRef={nodeRef}>
      <SquareStyledBox ref={nodeRef}>{props.children}</SquareStyledBox>
    </Draggable>
  );
};

const SquareStyledBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #e3e3e3;
  background-color: skyblue;
`;
