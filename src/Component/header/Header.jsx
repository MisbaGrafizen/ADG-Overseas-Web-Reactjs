import React from 'react'
import logo from "../../../public/Logo/logo1.png"
export default function Header() {
    return (
        <>

            <div className=' flex fixed bg-blur bg-[#ffffff] pb-[] z-[100] w-[100%]'>
                <div className='   flex  items-center  w-[83%]   justify-between  mx-auto  pt-[10px] pb-[15px] 2xl:w-[1200px]   border-[#404040] '>
                    <div className=' flex w-fit items-center'>


                        <img className=" w-[290px] " src={logo} />
                    
                    </div>
                    <div className=' flex w-[100%] justify-end'>
                        <div className=" relative  text-[16px] flex   pl-[40px] pr-[20px] gap-[25px]">
                            <p
                                className={`cursor-pointer  !text-[#000]   font-Poppins font-[400] `}
                            >
                                Home
                            </p>
                            <span className=" hidden md:flex w-[1.4px] h-[22px] bg-[#000]"></span>
                            <p
                                className={`cursor-pointer   !text-[#000]  font-Poppins font-[400] `}
                            >
                                About Us
                            </p>
                            <span className=" hidden md:flex w-[1.4px] h-[22px] bg-[#000]"></span>
                            <p
                                className={`cursor-pointer  !text-[#000]  font-Poppins font-[400] `}
                            >
                                Careers
                            </p>
                            <span className=" hidden md:flex w-[1.4px] h-[22px] bg-[#000]"></span>
                            <p
                                className={`cursor-pointer !text-[#000]   font-Poppins font-[400]  `}                        >
                                Support
                            </p>
                            <span className=" hidden md:flex w-[1.4px] h-[22px] bg-[#000]"></span>
                            <p className={`cursor-pointer !text-[#000]   font-Poppins font-[400] `}  >
                                Contact Us
                            </p>

                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}
