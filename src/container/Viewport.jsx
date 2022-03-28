import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

const Vstyle = {
  width: "200%",
  height: "200%",
  backgroundImage:
    'url("https://images.unsplash.com/photo-1647185256036-ea35af4ade52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
  backgroundSize: "cover",
  position: "relative",
  top: 0,
  left: 0,
  transformOrigin: "center",
};

const Viewport = (props) => {
  const elRef = useRef(null);
  const [transX, setTransX] = useState(0);
  const [transY, setTransY] = useState(0);
  const [scale, setScale] = useState(1);
  const onMouseDown = (e) => {};
  return (
    <div
      ref={elRef}
      style={{ ...Vstyle, transform: `translate(${0}px, ${0}px) scale(${1})` }}
      onMouseDown={() => {}}
    >
      {props.children}
    </div>
  );
};

export default Viewport;
