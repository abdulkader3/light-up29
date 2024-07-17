import React from 'react'

const About = () => {
  return (
    <>
    <div className="w-full h-[729px] flex justify-between ">


      <div className=" w-[740px] h-[900px] bg-[#000] ">
        <div className="w-full h-full flex flex-col items-center">
        <h1 className=' text-[32px] font-medium font-poppins text-[#fff] pt-16 mb-[62px] ' > somthing </h1>
        <form className='flex flex-col'>
          <label className=' text-xl pb-2 text-white font-poppins font-normal ' >Email</label>
          <input className=' w-[450px] h-[40px] pl-3 border-2 border-white rounded-[10px] mb-6 ' type="email" placeholder='your email' />
          <label className='text-xl pb-2 text-white font-poppins font-normal'>Password</label>
          <input className='w-[450px] h-[40px] pl-3 border-2 border-white rounded-[10px] mb-6' type="password"  placeholder='your password' />

        </form>
        </div>
      </div>


      <div className=" w-[850px] flex h-[660px] bg-black ">
        <img src="https://phoneky.co.uk/thumbs/screensavers/down/misc/neonbutter_slltsfjj.gif" alt="ME" />
      </div>



    </div>
      
    </>
  )
}

export default About
