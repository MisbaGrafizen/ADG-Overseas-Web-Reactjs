import React from 'react'
import heroimg2 from "../../../public/heroImages/herobanner3.jpg";

export default function AboutUs() {
    return (
        <>


            <section className="py-20  w-[80%] font-Poppins mx-auto bg-white">
                {/* Header Section */}
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="relative inline-block">
                            <span className="text-sm font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                ABOUT OUR COMPANY
                            </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transform scale-x-50" />
                        </div>
                        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
                            Building the future of
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                {" "}
                                digital innovation
                            </span>
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                            We're a team of passionate individuals who believe in pushing the boundaries of what's possible in
                            technology and design.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                        {[
                            { number: "10+", label: "Years Experience" },
                            { number: "250+", label: "Projects Completed" },
                            { number: "95%", label: "Client Satisfaction" },
                            { number: "40+", label: "Team Members" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-2xl shadow-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className=" h-[450px] rounded-3xl overflow-hidden">
                                <img
                                    src={heroimg2}
                                    alt="Our workspace"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full -z-10" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-100 rounded-full -z-10" />
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900">Our Mission & Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We strive to be at the forefront of technological innovation, creating solutions that empower businesses
                                    and individuals to achieve their full potential in the digital age.
                                </p>
                            </div>

                            {/* Key Points */}
                            <div className="space-y-4">
                                {[
                                    "Innovation at the core of everything we do",
                                    "Customer-centric approach to problem-solving",
                                    "Sustainable and scalable solutions",
                                    "Continuous learning and improvement",
                                ].map((point, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
                                        <span className="text-gray-700">{point}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity">
                                Learn More About Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
