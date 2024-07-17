import React from "react";

const Resume = () => {
  return (
    <>
      <div className="flex justify-center mt-[100px]">
        <div className="w-[1300px] h-[800px] bg-white rounded-[20px] flex flex-col">
          <div className="flex flex items-center gap-[50px] pl-[50px] pt-10">
            <h1 className=" text-[40px] font-roboto font-bold ">Resume</h1>
            <div className=" w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] "></div>
          </div>

          <div className="flex justify-evenly mt-10">
            <div className=" flex flex-col gap-[20px] ">
              <div className=" w-[40px] h-[40px] flex gap-2 ">
                <img src="photos/college.png" alt="college" />
                <h2 className=" font-medium text-[26px] font-poppins ">
                  Education
                </h2>
              </div>
              <div className=" bg-[#fff4f4] flex flex-col justify-center items-center  w-[350px] h-[140px] rounded-md ">
                <div className=" text-start pl-4 pr-3">
                  <p>2021-2024</p>
                  <p>Ph.D In Horriblensess - University, Los Angeles, CA</p>
                </div>
              </div>
              <div className=" bg-[#eef5fa] w-[350px] flex flex-col justify-center items-center h-[140px] rounded-md ">
                <div className=" text-start pl-4 pr-3">
                  <p>2017-2021</p>
                  <p>Computer Science - Imperialize Technical Institute</p>
                </div>
              </div>
              <div className=" bg-[#fff4f4] w-[350px] flex flex-col justify-center items-center h-[140px] rounded-md ">
                <div className=" text-start pl-4 pr-3">
                  <p>2015-2017</p>
                  <p>Graphic Designer - Web Graphy, Los Angeles, CA</p>
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-[20px] ">
              <div className=" w-[40px] h-[40px] flex gap-2 ">
                <img src="photos/suitcase.png" alt="college" />
                <h2 className=" font-medium text-[26px] font-poppins ">
                  Experience
                </h2>
              </div>
              <div className=" bg-[#eef5fa] w-[350px] flex flex-col justify-center items-center h-[140px] rounded-md ">
                <div className=" text-start pr-11">
                  <p>2019 - Presen</p>
                  <p>Sr. Software Tester Google Inc.</p>
                </div>
              </div>
              <div className=" bg-[#fff4f4] w-[350px] flex flex-col justify-center items-center h-[140px] rounded-md ">
                <div className=" text-start pl-4 pr-3">
                  <p>2015-2017</p>
                  <p>Cr. Web Developer elite-themes24 ltd.</p>
                </div>
              </div>
              <div className=" bg-[#eef5fa] w-[350px] h-[140px] flex flex-col justify-center items-center rounded-md ">
                <div className=" text-start  pr-3">
                  <p>2014 - 2015</p>
                  <p>Jr. Web Developer Creative Gigs.</p>
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-[20px] ">
              <div className=" w-[40px] h-[40px] flex gap-2 ">
                <img src="photos/award.png" alt="college" />
                <h2 className=" font-medium text-[26px] font-poppins ">
                  Awards
                </h2>
              </div>
              <div className=" bg-[#eef5fa] w-[350px] flex flex-col justify-center items-center h-[140px] rounded-md ">
                <div className=" text-start pl-5 pr-2">
                  <p>2015-2017</p>
                  <p>Graphic Designer Web Graphy, Los Angeles, CA</p>
                </div>
              </div>
              <div className=" bg-[#fff4f4] w-[350px] flex flex-col justify-center items-center h-[140px] rounded-md ">
                <div className=" text-start pr-10">
                  <p>2014 - 2015</p>
                  <p>Jr. Web Developer Creative Gigs.</p>
                </div>
              </div>
              <div className=" bg-[#eef5fa] w-[350px] flex flex-col justify-center items-center h-[140px] rounded-md ">
                <div className=" text-start pl-4 pr-3">
                  <p>2015-2017</p>
                  <p>Best Freelancer Fiver & Upwork Level 2 & Top Rated.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
