import React, { useRef } from "react";
import Draggable from "react-draggable";
import { Square } from "../components/Module";

const Main = () => {
  const nodeRef = useRef(null);
  return (
    <div className="wrap">
      <div className="content">
        <Draggable nodeRef={nodeRef}>
          <div ref={nodeRef}>ㅎㅇㅎㅇㅎㅇ</div>
        </Draggable>
        <Square>hello</Square>
      </div>
    </div>
  );
};

export default Main;
