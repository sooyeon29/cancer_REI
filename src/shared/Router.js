import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/MainHome/main";
import ProgramMain from "../pages/TecProgram/proMain";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/program" element={<ProgramMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
