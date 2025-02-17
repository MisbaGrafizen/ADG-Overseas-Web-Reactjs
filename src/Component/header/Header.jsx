import React from 'react'
import logo from "../../../public/Logo/logo1.png"
export default function Header() {
    return (
        <>

            <div className=' flex fixed bg-white pb-[] z-[100] w-[100%]'>
                <div className='   flex flex-col  w-[83%]   justify-between  mx-auto py-[15px] 2xl:w-[1200px]   border-[#404040] '>
                    <div className=' flex w-[100%] items-center'>


                        <img className=" w-[300px] " src={logo} />
                        <div className=' flex w-[80%] bg-[#373636] mt-[25px] ml-[-5px] h-[1.5px]'>

                        </div>
                    </div>
                    <div className=' flex w-[100%] justify-end'>
                        <div className=" relative top-[-10px] text-[17px] flex pl-[40px] pr-[20px] gap-[25px]">
                            <p
                                className={`cursor-pointer     font-Poppins font-[400] `}
                            >
                                Home
                            </p>
                            <span className=" hidden md:flex w-[1.4px] h-[22px] bg-[#444]"></span>
                            <p
                                className={`cursor-pointer     font-Poppins font-[400] `}
                            >
                                About Us
                            </p>
                            <span className=" hidden md:flex w-[1.4px] h-[22px] bg-[#444]"></span>
                            <p
                                className={`cursor-pointer    font-Poppins font-[400] `}
                            >
                                Careers
                            </p>
                            <span className=" hidden md:flex w-[1.4px] h-[22px] bg-[#444]"></span>
                            <p
                                className={`cursor-pointer    font-Poppins font-[400]  `}                        >
                                Support
                            </p>
                            <span className=" hidden md:flex w-[1.4px] h-[22px] bg-[#444]"></span>
                            <p className={`cursor-pointer     font-Poppins font-[400] `}  >
                                Contact Us
                            </p>

                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}
