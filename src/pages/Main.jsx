import React from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";

const Main = () => {
  return (
    <Wrap>
      <Button>
        <Link to="drag">go to Drag</Link>
      </Button>
      <Button>
        <Link to="flow">go to Flow</Link>
      </Button>
    </Wrap>
  );
};

const Wrap = styledComponents.div`
  position:relative;
  width:100%;
  height:100vh;
  padding-top:60px;
`;

const Button = styledComponents.div`
  display:block;
  
`;

export default Main;
