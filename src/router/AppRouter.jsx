import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Drag from "../pages/Drag";
import Flow from "../pages/Flow";
import Main from "../pages/Main";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="drag" element={<Drag />} />
        <Route path="flow" element={<Flow />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
