import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import { assets } from "../assets_frontend/assets";

export default function Appointment() {
  const { docId } = useParams();
  const doctor = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const FetchDocInfo = async () => {
    const DocInfo = doctor.find((doc) => doc._id === docId);
    setDocInfo(DocInfo);
    console.log(DocInfo, "jello");
  };

  useEffect(() => {
    FetchDocInfo();
  }, [doctor, docId]);

  return !docInfo ? (
    <div className="text-center text-gray-500">Loading...</div>
  ) : (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className=" bg-primary w-full sm:max-w-72  rounded-lg"
            src={docInfo.image}
            alt=""
          ></img>
        </div>
        <div>
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img
              className="w-5"
              src={assets.verified_icon}
              alt="Verified Icon"
            />
          </p>

          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <span>{docInfo.degree}</span> - <span>{docInfo.speciality}</span>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>

          {/* Doctor About Section */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About
              <img src={assets.info_icon} alt="Info Icon" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">
              {docInfo.about}
            </p>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:
              <span className="text-gray-600">{docInfo.fees}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
