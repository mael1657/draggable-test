import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Product = () => {
  return (
    <TransformWrapper
      initialPositionX={200}
      initialPositionY={200}
      initialScale={1}
    >
      <TransformComponent></TransformComponent>
    </TransformWrapper>
  );
};

export default Product;
