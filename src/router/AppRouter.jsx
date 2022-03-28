import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Craft from "../pages/Craft";
import Drag from "../pages/Drag";
import Flow from "../pages/Flow";
import Main from "../pages/Main";
import Product from "../pages/Product";
import Zoom from "../pages/Zoom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="drag" element={<Drag />} />
        <Route path="flow" element={<Flow />} />
        <Route path="zoom" element={<Zoom />} />
        <Route path="craft" element={<Craft />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
