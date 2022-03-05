import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Main from "../pages/Main";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
