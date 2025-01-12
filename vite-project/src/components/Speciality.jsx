import React from "react";
import Header from "./Header";
import { specialityData } from "../assets_frontend/assets";
import { Link,  } from "react-router-dom";
export default function Speciality() {
  return (
    <div id="speciality" className="flex flex-col items-center justify-center gap-4 py-16 tex-grey-800  ">
      <p className="text-3xl font-medium">Find by Speciality</p>
      <p className="sm:w-1/2 text-center text-sm">
        Simply browse through our extensive list of trusted docters Sechedule your appointment
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((elem, index) => {
           return (   <Link key={index} to={`/doctors/${elem.speciality}`} onClick={()=>{scroll(0,0)}} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all translate-y-[-10px] duration-500 ">
              <img className="w-15 sm:w-24 mb-2" src={elem.image} alt="" />
              <p className="text-center">{elem.speciality}</p>
              </Link>
          );
        })}
      </div>
    </div>
  );
}
