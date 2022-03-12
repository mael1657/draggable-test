import React, { useRef } from "react";
import Draggable from "react-draggable";
import styledComponents from "styled-components";
import { Square } from "../components/Module";
import ToolBox from "../components/tools/ToolBox";

const Drag = () => {
  const nodeRef = useRef(null);
  return (
    <Wrap>
      <Draggable nodeRef={nodeRef}>
        <div ref={nodeRef}>ㅎㅇㅎㅇㅎㅇ</div>
      </Draggable>
      <Square>hello</Square>
      <ToolBox />
    </Wrap>
  );
};

const Wrap = styledComponents.div`
  position:relative;
  width:100%;
  height:100vh;
  padding-top:60px;
`;

export default Drag;
