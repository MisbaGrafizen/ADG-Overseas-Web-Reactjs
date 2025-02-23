import React from 'react'
import main1 from '../../../public/mainimage/owner.jpeg'
export default function NewAbout() {
  return (
 <>



<section className="about-2-section p-relative fix section-space">
   <div className="bg-shape-1" data-background="assets/imgs/shapes/shape-30.png"></div>
   <div className="bg-shape-2" data-background="assets/imgs/shapes/shape-31.png"></div>
   <div className="small-container">
      <div className="row">
         <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="about-2-image-area p-relative wow fadeInLeft" data-wow-delay="500ms">
               <figure className="main-image m-img">
                  <img src={main1} alt="" />
               </figure>
               <div className="small-image">
                  <img src="assets/imgs/about/about-4.jpg" alt="" />
               </div>
               <div className="icon-box">
                  <div className="icon">
                     <i className="icon-prize-1"></i>
                  </div>
                  <div className="content">
                     <h3 className="mb-10"><span className="counter">10</span>+</h3>
                     <p>World Best Roofing Award Got</p>
                  </div>
               </div>
               <div className="shape-1" data-background="assets/imgs/shapes/shape-29.png"></div>
            </div>
         </div>
         <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="about-2-content-area pl-50">
               <div className="title-box mb-35 wow fadeInRight" data-wow-delay=".5s">
                  <span className="section-sub-title">About Us</span>
                  <h3 className="section-title mt-10">Devoted to Delivering Top Notch Roofing Solutions</h3>
               </div>
               <p className="mb-35">It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.</p>
               <div className="row mb-45">
                  <div className="col-lg-6">
                     <ul className="list-area">
                        <li className="mb-10">Accurate Testing Processes</li>
                        <li className="mb-10">100% Satisfaction Guarantee</li>
                        <li className="mb-10">Award Winning Company</li>
                     </ul>
                  </div>
                  <div className="col-lg-6">
                     <ul className="list-area">
                        <li className="mb-10">300+ Successful Projects done</li>
                        <li className="mb-10">Professional Engineers Provide</li>
                        <li className="mb-10">Damage Roofing Repair</li>
                     </ul>
                  </div>
               </div>
               <div className="about-2-btn-area">
                  <a className="primary-btn-1 btn-hover" href="about.html">
                     about us &nbsp; | <i className="icon-right-arrow"></i>
                     {/* <span style="top: 147.172px; left: 108.5px;"></span> */}
                  </a>
                  <div className="call-us">
                     <div className="icon-1">
                        <i className="fal fa-phone-volume"></i>
                     </div>
                     <div className="content p-relative">
                        <span>Call Us Now</span>
                           <h5><a href="tel:2085550112">+208-555-0112</a></h5>
                       </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
 </section>
 </>
  )
}
