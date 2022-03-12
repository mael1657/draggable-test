import React from "react";
import styledComponents from "styled-components";

const ToolBox = () => {
  return <StyledDiv>ToolBox</StyledDiv>;
};

const StyledDiv = styledComponents.div`
  width:300px;
  height:50px;
  background-color:#e3e3e3;
  position:absolute;
  bottom:20px;
  left:50%;
  transform:translateX(-50%);
  z-index:10;
`;

export default ToolBox;
