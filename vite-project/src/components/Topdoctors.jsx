import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AppContext  from "../context/AppContext.jsx";
// import { doctors } from "../assets_frontend/assets";

export default function Topdoctors() {
    const navigate= useNavigate()
    const doctor= useContext(AppContext);
    console.log(doctor)
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-4xl font-medium"> Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center"> Simply browse throgh our extensive list of trusted doctors</p>
      <div className="w-full  grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0"> 
        {doctor.map((elem) => {
          return (
            <div onClick={()=>navigate(`/appointment/${elem._id}`)} key={elem._id} className=" border border-cyan-800 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px]">
              <img  className="bg-blue-100"src={elem.image} alt="" />
              <div className="p-4"> 
                <p> </p> <p  className="text-green-500">Available</p>
              </div>
              <p  className="p-4 text-gray-900">{elem.name}</p>
              <p  className="p-4 text-gray-500">{elem.speciality}</p>
            </div>
          );
        })}
      </div>
      <button onClick={()=>{navigate('/doctors')}} className="border bg-blue-300 rounded-full text-black-300 px-12 py-3">More...</button>
    </div>
  );
}
