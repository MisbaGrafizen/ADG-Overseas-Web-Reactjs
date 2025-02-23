import React from 'react'
import '../../assets/css/main.css'

export default function Fetures() {
    return (
        <>

            <section className="features-section pt-40 pb-40 bg-color-1 p-relative">
                {/* <div className="bg-shape-1" data-background="assets/imgs/shapes/shape-27.png"></div> */}
                <div className="bg-shape-1" data-background="assets/imgs/shapes/shape-27.png"></div>

                <div className="bg-shape-2" style={{ backgroundImage: "url('../src/assets/imgs/shapes/shape-22.png')" }} data-background="assets/imgs/shapes/shape-28.png"></div>
                <div className="small-container">
                    <div className="row g-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="features-box-area p-relative wow fadeInLeft" data-wow-delay="500ms">
                                <div className="shape-1" data-background="assets/imgs/shapes/shape-24.png"></div>
                                <div className="shape-2" data-background="assets/imgs/shapes/shape-25.png"></div>
                                <div className="shape-3" data-background="assets/imgs/shapes/shape-26.png"></div>
                                <div className="icon-box">
                                    <i className="icon-hammer"></i>
                                </div>
                                <h5 className="mt-20 mb-10"><a href="services.html">Expert Engineer</a></h5>
                                <p>Nullam dictum ut est nune of malesuada ornare is aliquam eget lacinia mauris.</p>
                            </div>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="features-box-area p-relative">
                                <div className="shape-1" data-background="assets/imgs/shapes/shape-24.png"></div>
                                <div className="shape-2" data-background="assets/imgs/shapes/shape-25.png"></div>
                                <div className="shape-3" data-background="assets/imgs/shapes/shape-26.png"></div>
                                <div className="icon-box">
                                    <i className="icon-roof-5"></i>
                                </div>
                                <h5 className="mt-20 mb-10"><a href="services.html">Quality Material</a></h5>
                                <p>Nullam dictum ut est nune of malesuada ornare is aliquam eget lacinia mauris.</p>
                            </div>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="features-box-area p-relative">
                                <div className="shape-1" data-background="assets/imgs/shapes/shape-24.png"></div>
                                <div className="shape-2" data-background="assets/imgs/shapes/shape-25.png"></div>
                                <div className="shape-3" data-background="assets/imgs/shapes/shape-26.png"></div>
                                <div className="icon-box">
                                    <i className="icon-roof-6"></i>
                                </div>
                                <h5 className="mt-20 mb-10"><a href="services.html">24/7 Support</a></h5>
                                <p>Nullam dictum ut est nune of malesuada ornare is aliquam eget lacinia mauris.</p>
                            </div>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="features-box-area p-relative wow fadeInRight" data-wow-delay="500ms">
                                <div className="shape-1" data-background="assets/imgs/shapes/shape-24.png"></div>
                                <div className="shape-2" data-background="assets/imgs/shapes/shape-25.png"></div>
                                <div className="shape-3" data-background="assets/imgs/shapes/shape-26.png"></div>
                                <div className="icon-box">
                                    <i className="icon-roof-7"></i>
                                </div>
                                <h5 className="mt-20 mb-10"><a href="services.html">Roof Renovation</a></h5>
                                <p>Nullam dictum ut est nune of malesuada ornare is aliquam eget lacinia mauris.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




        </>
    )
}
