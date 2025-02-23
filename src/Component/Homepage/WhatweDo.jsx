import React from 'react'

export default function WhatweDo() {
  return (
<>



<section className="service-tab-section section-space bg-color-1 p-relative">
   <div className="bg-image" data-background="assets/imgs/shapes/shape-35.png"></div>
   <div className="bg-shape-1" data-background="assets/imgs/shapes/shape-33.png"></div>
   <div className="bg-shape-2" data-background="assets/imgs/shapes/shape-34.png"></div>
   <div className="small-container">
      <div className="service-tab-title-area mb-70">
         <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
            <span className="section-sub-title">WHAT WE DO</span>
            <h3 className="section-title mt-10 text-white p-relative">Delivering High Quality <br />Roof Services</h3>
         </div>
       
      </div>
      <div className="row">
         <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="service-tab-btn-area wow fadeInLeft" data-wow-delay="500ms">
               <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                     <a href="javascript:void(0)" className="nav-link active" id="modified-roofing-tab" data-bs-toggle="tab"
                        data-bs-target="#modified-roofing-tab-pane" role="tab"
                        aria-controls="modified-roofing-tab-pane" aria-selected="true">
                        <div className="icon-box">
                           <i className="icon-roof-7"></i>
                        </div>
                        Modified Roofing 
                     </a>
                  </li>
                  <li className="nav-item" role="presentation">
                     <a href="javascript:void(0)" className="nav-link" id="roof-installation-tab" data-bs-toggle="tab"
                        data-bs-target="#roof-installation-tab-pane" role="tab"
                        aria-controls="roof-installation-tab-pane" aria-selected="false">
                        <div className="icon-box">
                           <i className="icon-roof-2"></i>
                        </div>
                        Roof Installation
                     </a>
                  </li>
                  <li className="nav-item" role="presentation">
                     <a href="javascript:void(0)" className="nav-link" id="roof-cornering-tab" data-bs-toggle="tab"
                        data-bs-target="#roof-cornering-tab-pane" role="tab"
                        aria-controls="roof-cornering-tab-pane" aria-selected="false">
                        <div className="icon-box">
                           <i className="icon-roof-8"></i>
                        </div>
                        Roof Cornering
                     </a>
                  </li>
                  <li className="nav-item" role="presentation">
                     <a href="javascript:void(0)" className="nav-link" id="roof-renovation-tab" data-bs-toggle="tab"
                        data-bs-target="#roof-renovation-tab-pane" role="tab"
                        aria-controls="roof-renovation-tab-pane" aria-selected="false">
                        <div className="icon-box">
                           <i className="icon-roof-4"></i>
                        </div>
                        Roof Renovation
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="service-tab-details-area">
               <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="modified-roofing-tab-pane" role="tabpanel"
                     aria-labelledby="modified-roofing-tab" tabindex="0">
                     <div className="service-tab-content p-relative">
                        <div className="tab-bg-shape" data-background="assets/imgs/shapes/shape-32.png"></div>
                        <figure className="image p-relative">
                           <img src="assets/imgs/resources/service-tab-1.jpg" alt="" />
                        </figure>
                        <div className="content p-relative">
                           <h4>Modified Roofing</h4>
                           <p className="pt-15 pb-10">It is a long established fact that a reader will  content of a page when looking at layout the point of using lorem.</p>
                           <ul className="tab-list-content">
                              <li>Accurate Testing Processes</li>
                              <li>100% Satisfaction Guarantee</li>
                              <li>Award Winning Company</li>
                           </ul>
                           <a className="primary-btn-1 btn-hover mt-20" href="services.html">
                              Read more &nbsp; | <i className="icon-right-arrow"></i>
                              {/* <span style="top: 147.172px; left: 108.5px;"></span> */}
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="roof-installation-tab-pane" role="tabpanel"
                     aria-labelledby="roof-installation-tab" tabindex="0">
                     <div className="service-tab-content p-relative">
                        <div className="tab-bg-shape" data-background="assets/imgs/shapes/shape-32.png"></div>
                        <figure className="image p-relative">
                           <img src="assets/imgs/resources/service-tab-1.jpg" alt="" />
                        </figure>
                        <div className="content p-relative">
                           <h4>Roof Installation</h4>
                           <p className="pt-15 pb-10">It is a long established fact that a reader will  content of a page when looking at layout the point of using lorem.</p>
                           <ul className="tab-list-content">
                              <li>Accurate Testing Processes</li>
                              <li>100% Satisfaction Guarantee</li>
                              <li>Award Winning Company</li>
                           </ul>
                           <a className="primary-btn-1 btn-hover mt-20" href="services.html">
                              Read more &nbsp; | <i className="icon-right-arrow"></i>
                              {/* <span style="top: 147.172px; left: 108.5px;"></span> */}
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="roof-cornering-tab-pane" role="tabpanel" aria-labelledby="roof-cornering-tab"
                     tabindex="0">
                     <div className="service-tab-content p-relative">
                        <div className="tab-bg-shape" data-background="assets/imgs/shapes/shape-32.png"></div>
                        <figure className="image p-relative">
                           <img src="assets/imgs/resources/service-tab-1.jpg" alt="" />
                        </figure>
                        <div className="content p-relative">
                           <h4>Roof Cornering</h4>
                           <p className="pt-15 pb-10">It is a long established fact that a reader will  content of a page when looking at layout the point of using lorem.</p>
                           <ul className="tab-list-content">
                              <li>Accurate Testing Processes</li>
                              <li>100% Satisfaction Guarantee</li>
                              <li>Award Winning Company</li>
                           </ul>
                           <a className="primary-btn-1 btn-hover mt-20" href="services.html">
                              Read more &nbsp; | <i className="icon-right-arrow"></i>
                              {/* <span style="top: 147.172px; left: 108.5px;"></span> */}
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="roof-renovation-tab-pane" role="tabpanel" aria-labelledby="roof-renovation-tab"
                     tabindex="0">
                     <div className="service-tab-content p-relative">
                        <div className="tab-bg-shape" data-background="assets/imgs/shapes/shape-32.png"></div>
                        <figure className="image p-relative">
                           <img src="assets/imgs/resources/service-tab-1.jpg" alt="" />
                        </figure>
                        <div className="content p-relative">
                           <h4>Roof Renovation</h4>
                           <p className="pt-15 pb-10">It is a long established fact that a reader will  content of a page when looking at layout the point of using lorem.</p>
                           <ul className="tab-list-content">
                              <li>Accurate Testing Processes</li>
                              <li>100% Satisfaction Guarantee</li>
                              <li>Award Winning Company</li>
                           </ul>
                           <a className="primary-btn-1 btn-hover mt-20" href="services.html">
                              Read more &nbsp; | <i className="icon-right-arrow"></i>
                              {/* <span style="top: 147.172px; left: 108.5px;"></span> */}
                           </a>
                        </div>
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
