import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Main from "../pages/Main";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
