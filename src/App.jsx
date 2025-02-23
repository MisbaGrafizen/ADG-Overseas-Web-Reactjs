import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home ";



import ScrollToTop from "./Component/Scrooltop";
import Header from "./Component/header/Header";


import "../src/assets/css/main.css"
import "../src/assets/css/animate.css"
import "../src/assets/css/bootstrap.min.css"
import "../src/assets/css/fontawesome-pro.css"
import "../src/assets/css/icomoon.css"
import "../src/assets/css/magnific-popup.css"
import "../src/assets/css/meanmenu.min.css"
import "../src/assets/css/magnific-popup.css"
import "../src/assets/css/slick.css"
import "../src/assets/css/spacing.css"
import "../src/assets/css/sweetalert2.min.css"
import "../src/assets/css/swiper.min.css"
import "../src/assets/fonts/fa-brands-400.ttf"


// import "../src/assets/js/all-gsap-activation"
// import "../src/assets/js/all-plugin-bundle"
// import "../src/assets/js/counterup"
// import "../src/assets/js/email-validation"
// import "../src/assets/js/main"

// import "../src/assets/js/wow"
// import "../src/assets/js/email.min.js"
// import "../src/assets/js/jquery-3.6.0.min.js"
// import "../src/assets/js/email.min.js"




import $ from "jquery";

// Import CSS for Plugins
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "magnific-popup/dist/magnific-popup.css";

// Function to Load External Scripts
// const loadScript = (src) => {
//   const script = document.createElement("script");
//   script.src = src;
//   script.async = true;
//   document.body.appendChild(script);
// };

function App() {
  

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="w-100 !font-Poppins ease-soft-spring h-[100%] !bg-[#ffffff]  duration-1000 ">

        <Routes>
          <Route path="/" element={<Home />} />

     
        </Routes>
      </div>
    </>
  );
}

export default App;
