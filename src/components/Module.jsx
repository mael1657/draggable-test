import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

export const Square = (props) => {
  return (
    <>
      <Draggable>
        <SquareStyledBox>{props.data}</SquareStyledBox>;
      </Draggable>
    </>
  );
};

const SquareStyledBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #e3e3e3;
`;
