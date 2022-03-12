import React from "react";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledDiv>
      <HomeBtn>
        <Link to="/">Home</Link>
      </HomeBtn>
    </StyledDiv>
  );
};

const StyledDiv = styledComponents.div`
  width: 100%;
  background-color: aqua;
  height: 60px;
  position:fixed;
  top:0;left:0;
  z-index:10;
`;

const HomeBtn = styledComponents.div`
  display:block;
`;

export default Header;
