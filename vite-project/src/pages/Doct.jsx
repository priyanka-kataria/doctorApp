import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../assets_frontend/assets";

export default function Doct() {
  // const { doctors } = useContext(AppContext);

  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterdoc] = useState(doctors);

  const Applyfiter = () => {
    if (speciality) {
      setFilterdoc(doctors.filter((doc) => doc.speciality == speciality));
    } else {
      setFilterdoc(doctors);
    }
  };
  useEffect(() => {
    Applyfiter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className="py-1 px-3 border rounded text-sm  transition-all sm:hidden ">
          Filters
        </button>
        <div className="flex-col gap-4 text-sm text-gray-600 flex sm:flex">
        <p
    onClick={() => {
      speciality === "General physician"
        ? navigate("/doctors")
        : navigate("/doctors/General physician");
    }}
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
      speciality === "General physician" ? "bg-blue-200 border-blue-500" : "border-gray-300"
    }`}
  >
    General physician
  </p>
  <p
    onClick={() => {
      speciality === "Gynecologist"
        ? navigate("/doctors")
        : navigate("/doctors/Gynecologist");
    }}
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
      speciality === "Gynecologist" ? "bg-blue-200 border-blue-500" : "border-gray-300"
    }`}
  >
    Gynecologist
  </p>
  <p
    onClick={() => {
      speciality === "Dermatologist"
        ? navigate("/doctors")
        : navigate("/doctors/Dermatologist");
    }}
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
      speciality === "Dermatologist" ? "bg-blue-200 border-blue-500" : "border-gray-300"
    }`}
  >
    Dermatologist
  </p>
  <p
    onClick={() => {
      speciality === "Pediatricians"
        ? navigate("/doctors")
        : navigate("/doctors/Pediatricians");
    }}
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
      speciality === "Pediatricians" ? "bg-blue-200 border-blue-500" : "border-gray-300"
    }`}
  >
    Pediatricians
  </p>
  <p
    onClick={() => {
      speciality === "Neurologist"
        ? navigate("/doctors")
        : navigate("/doctors/Neurologist");
    }}
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
      speciality === "Neurologist" ? "bg-blue-200 border-blue-500" : "border-gray-300"
    }`}
  >
    Neurologist
  </p>
  <p
    onClick={() => {
      speciality === "Gastroenterologist"
        ? navigate("/doctors")
        : navigate("/doctors/Gastroenterologist");
    }}
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
      speciality === "Gastroenterologist" ? "bg-blue-200 border-blue-500" : "border-gray-300"
    }`}
  >
    Gastroenterologist
  </p>
        </div>

        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((elem) => {
            return (
              <div
                onClick={() => navigate(`/appointment/${elem._id}`)}
                key={elem._id}
                className=" border border-cyan-800 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px]"
              >
                <img className="bg-blue-100" src={elem.image} alt="" />
                <div className="p-4">
                  <p> </p> <p className="text-green-500">Available</p>
                </div>
                <p className="p-4 text-gray-900">{elem.name}</p>
                <p className="p-4 text-gray-500">{elem.speciality}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
