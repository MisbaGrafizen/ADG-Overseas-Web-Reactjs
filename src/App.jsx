import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home ";



import ScrollToTop from "./Component/Scrooltop";
import Header from "./Component/header/Header";






function App() {
  

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="w-100 ease-soft-spring h-[100%] !bg-[#ffffff]  duration-1000 ">

        <Routes>
          <Route path="/" element={<Home />} />

     
        </Routes>
      </div>
    </>
  );
}

export default App;
