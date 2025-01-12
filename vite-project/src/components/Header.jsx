import React from "react";
import rightimage from "../assets_frontend/header_img.png";
import ArrowIcon from "../assets_frontend/arrow_icon.svg";
import group_profile from "../assets_frontend/group_profiles.png";
export default function Header() {
  return (
    <div className="flex flex-row md:flex-row flex-wrap bg-primary rounded-lg px-6 md:10px lg:px-20">
      {/* left */}
      <div className=" md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className=" text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment with Trusted Doctors <br />
        </p>
        <div className="flex flex-col md:flex-row items-center text-white">
          <img src={group_profile} alt="" className="w-15" />
          <p className="mx-0">
            {" "}
            Simply browse through our extensive list of trusted docters <br className="hidden sm:block"/> Sechedule your appointment
          </p>
        </div>
        <a href="#speciality" className="flex items-center rounded-full bg-white px-8 py-3 text-grey-600 text-sm m-automd:m-0 hover:scale-105 translate-all duration-300 ">
          Book appointment <img src={ArrowIcon} className="w-3"></img>
        </a>
      </div>
      {/* right */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={rightimage} alt="" />
      </div>
    </div>
  );
}
