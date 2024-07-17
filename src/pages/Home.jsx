import React from 'react'
import { Link } from 'react-router-dom'
import { FaDownload } from "react-icons/fa6";



const Home = () => {
  return (
    <>
    <div className=" gap-[30px] w-full flex-col h-[657px] flex justify-center items-center ">
      <div className="  w-[300px] h-[300px] rounded-full overflow-hidden justify-center">
      <img className='  ' src="photos/new.JPG" alt="ME" />
      </div>
      <div className=" text-center ">
        <h1 className=' text-[25px] font-bold font-roboto ' > Abdul Kader Shanto </h1>
        <h2 className=' text-[#787777] font-poppins text-[13px] mt-[15px] '> Web Designe/Developer </h2>
      </div>
      <div className="  W-[300PX] flex gap-[20px] ">
        <div className=" w-[35px] h-[35px] bg-white p-[8px] rounded-[7px] "> <Link to='#'><img src="photos/facebook.png" alt="" /></Link> </div>
        <div className=" w-[35px] h-[35px] bg-white p-[8px] rounded-[7px] "> <Link to='#'><img src="photos/twitter.png" alt="" /></Link> </div>
        <div className=" w-[35px] h-[35px] bg-white p-[8px] rounded-[7px] "> <Link to='#'><img src="photos/instagram.png" alt="" /></Link></div>
        <div className=" w-[35px] h-[35px] bg-white p-[8px] rounded-[7px] "> <Link to='#'><img src="photos/in.png" alt="" /></Link></div>
      </div>
      <div className=" w-[300px] flex justify-center ">
        <button className='px-[24px] flex gap-[10px] justify-center items-center font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  hover:text-white transition-all bg-[#fff] font-poppins active:scale-125 transition-all py-[10px] rounded-[50px] text-[16px] text-center' > <FaDownload /> Download CV </button>
      </div>
    </div>
    
    </>
  )
}

export default Home
