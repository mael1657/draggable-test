import React from "react";
import styledComponents from "styled-components";
import Frame from "../container/Frame";
import ToolBox from "../components/tools/ToolBox";
import Viewport from "../container/Viewport";
import Square from "../components/modules/Square";

const Craft = (props) => {
  return (
    <Wrap>
      <Frame>
        <Viewport>
          <Square>테스트</Square>
          <Square>테스트2</Square>
        </Viewport>
      </Frame>
      <ToolBox />
    </Wrap>
  );
};

const Wrap = styledComponents.div`
  width:100%;
  height:100%;
`;

export default Craft;
