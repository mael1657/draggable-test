import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Zoom = () => {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={200}
      wheel={{ step: 0.02 }}
    >
      <TransformComponent>
        <img
          alt="img"
          src="https://images.unsplash.com/photo-1647185256036-ea35af4ade52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Zoom;
