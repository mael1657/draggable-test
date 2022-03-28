import React from "react";
import styled from "styled-components";

const Frame = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default Frame;
