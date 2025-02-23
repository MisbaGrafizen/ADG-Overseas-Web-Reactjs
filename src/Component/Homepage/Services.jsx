import React from 'react'
import  imag1 from '../../../public/heroImages/herobanner1.jpg'
import  imag2 from '../../../public/heroImages/herobanner3.jpg'

const services = [
    {
      id: 1,
      title: "STEEL WELDING",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      icon: "/placeholder.svg?height=60&width=60",
      image: imag1
    },
    {
      id: 2,
      title: "METAL WORKS",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      icon: "/placeholder.svg?height=60&width=60",
      image: imag2 ,
    },
    {
      id: 3,
      title: "CUSTOM WELDING",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      icon: "/placeholder.svg?height=60&width=60",
      image: imag1,
    },
    {
      id: 4,
      title: "PIPE WELDING",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      icon: "/placeholder.svg?height=60&width=60",
      image:imag2,
    },
  ]
  

export default function Services() {
  return (
<>




<section className="py-16 font-Poppins bg-[#f8f8f8]">
      <div className=" w-[80%] mx-auto px-">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#b19777] uppercase text-sm font-semibold tracking-wider">SERVICE</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">
            SERVICES WE'RE PROVIDING TO
            <br />
            OUR CUSTOMERS
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-[10px] shadow-lg group hover:shadow-xl transition-shadow duration-300">
              {/* Icon */}
              <div className="p-6">
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt=""
                    width={30}
                    height={30}
                    className="invert" // Makes the icon white
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover rounded-b-[10px] transition-transform h-[100%] duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Read More Button */}
                <button className="absolute bottom-4 left-4 bg-[#b19777] text-white text-sm px-4 py-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
</>
  )
}
