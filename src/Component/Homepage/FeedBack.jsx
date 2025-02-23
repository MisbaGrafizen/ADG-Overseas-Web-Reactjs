import React from 'react'

export default function FeedBack() {
  return (
<>



<section className="testimonials-section p-relative section-space fix" data-background="assets/imgs/bg/testimonial-bg.png">
   <div className="bg-shape" data-background="assets/imgs/bg/testimonial-bg-1.png"></div>
   <div className="bg-shape-1" data-background="assets/imgs/bg/testimonial-bg-2.png"></div>
   <div className="bg-shape-2" data-background="assets/imgs/shapes/shape-16.png"></div>
   <div className="bg-shape-3" data-background="assets/imgs/shapes/shape-17.png"></div>
   <div className="small-container">
      <div className="row">
         <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="contact-from p-relative">
               <div className="title-box mb-40 wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title text-white">Book APPOINTMENT</span>
                  <h3 className="section-title mt-10 text-white">Roofing Services Available</h3>
               </div>
               <form action="#">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="contact__from-input mb-20">
                           <label>Your Name</label>
                           <input type="text" placeholder="Ralph Edwards" />
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <label>Your Email</label>
                        <div className="contact__from-input mb-20">
                           <input type="text" placeholder="info@example.com" />
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <label>Your Phone</label>
                        <div className="contact__from-input mb-20">
                           <input type="tel" placeholder="+1253 457 7840" />
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <label>Location</label>
                        <div className="contact__select mb-20">
                           <select>
                              <option value="0">Select</option>
                              <option value="2">Location-1</option>
                              <option value="3">Location-2</option>
                              <option value="1">Location-3</option>
                           </select>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <label>Date</label>
                        <div className="contact__from-input mb-20">
                           <input type="date" />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="testimonials_btn text-center">
                           <button  type="submit" className="primary-btn-4 btn-hover">
                              Submit Request
                              <span style={{top:"147.172px",  left: "108.5px; "}}></span>
                           </button>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
         <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="testimonials-area">
               <div className="title-box mb-40 wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">Testimonials</span>
                  <h3 className="section-title mt-10">Clients Feedback</h3>
               </div>
               <p className="mb-40">It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.</p>
               <div className="testimonials-box">
               <div className="swiper testimonial-active-1">
                  <div className="swiper-wrapper">
       
                     <div className="swiper-slide"> 
                        <div className="autor-upper p-relative">
                           <figure className="image">
                              <img src="../../assets/imgs/resources/testimonials-2.png" alt="" />
                           </figure>
                           <div className="icon-1">
                              <i className="icon-comma-double"></i>
                           </div>
                           <div className="author-info">
                              <h5>Kathryn Murphy</h5>
                              <span>Engineering</span>
                              <ul className="rating-list">
                                 <li><i className="fa fa-star"></i></li>
                                 <li><i className="fa fa-star"></i></li>
                                 <li><i className="fa fa-star"></i></li>
                                 <li><i className="fa fa-star"></i></li>
                                 <li><i className="fa fa-star"></i></li>
                              </ul>
                           </div>
                        </div>
                        <div className="content">
                           <p>“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”</p>
                        </div>                       
                     </div>

                     <div className="swiper-slide"> 
                        <div className="autor-upper p-relative">
                           <figure className="image">
                              <img src="../../assets/imgs/resources/testimonials-1.png" alt="" />
                           </figure>
                           <div className="icon-1">
                              <i className="icon-comma-double"></i>
                           </div>
                           <div className="author-info">
                              <h5>Kathryn Murphy</h5>
                              <span>Engineering</span>
                              <ul className="rating-list">
                                 <li><i className="fa fa-star"></i></li>
                                 <li><i className="fa fa-star"></i></li>
                                 <li><i className="fa fa-star"></i></li>
                                 <li><i className="fa fa-star"></i></li>
                                 <li><i className="fa fa-star"></i></li>
                              </ul>
                           </div>
                        </div>
                        <div className="content">
                           <p>“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”</p>
                        </div>                       
                     </div>
                  </div>
               </div>
            </div>
           
               <div className="testimonials_1_navigation__wrapprer position-relative z-1 text-center mt-40">
                  <div className="common-slider-navigation">
                     <button className="testimonial-1-button-prev p-relative"><i className="icon-arrow-left-angle"></i></button>
                     <button className="testimonial-1-button-next p-relative"><i className="icon-arrow-right-angle"></i></button>
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
