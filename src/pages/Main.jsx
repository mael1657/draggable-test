import React from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";

const Main = () => {
  return (
    <Wrap>
      <Button>
        <Link to="drag">go to react-Draggable</Link>
      </Button>
      <Button>
        <Link to="flow">go to react-Flow</Link>
      </Button>
      <Button>
        <Link to="zoom">go to Zoom pan pinch</Link>
      </Button>
      <Button>
        <Link to="craft">go to Craft</Link>
      </Button>
      <Button>
        <Link to="product">Product</Link>
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
