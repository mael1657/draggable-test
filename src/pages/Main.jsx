import React from "react";
import Draggable from "react-draggable";
import { Square } from "../components/Module";

const Main = () => {
  return (
    <div className="wrap">
      <div className="content">
        <Draggable>
          <div>ㅎㅇㅎㅇㅎㅇ</div>
        </Draggable>
        <Draggable>
          <Square content={"네모박스"} />
        </Draggable>
      </div>
    </div>
  );
};

export default Main;
