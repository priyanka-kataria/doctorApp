import React, { useState } from "react";

import { assets } from "../assets_frontend/assets";
export default function MyAppointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: "Dr. Richard James",
      specialization: "General Physician",
      address: "57th Cross, Richmond, Circle, Church Road, London",
      date: "25 July, 2024",
      time: "6:30 PM",
      image: assets.profile_pic, // Replace with the doctor's image URL
      status: "Pending", // Options: "Pending", "Paid", "Cancelled"
    },
    {
      id: 2,
      doctorName: "Dr. Richard James",
      specialization: "General Physician",
      address: "57th Cross, Richmond, Circle, Church Road, London",
      date: "25 July, 2024",
      time: "6:30 PM",
      image: assets.profile_pic,
      status: "Unpaid",
    },
    {
      id: 3,
      doctorName: "Dr. Richard James",
      specialization: "General Physician",
      address: "57th Cross, Richmond, Circle, Church Road, London",
      date: "25 July, 2024",
      time: "6:30 PM",
      image: assets.profile_pic,
      status: "Paid",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-600 text-center sm:text-left">
        My Appointments
      </h1>
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="flex flex-col sm:flex-row items-center border-b pb-4 mb-4 sm:items-start"
        >
          <img
            src={appointment.image}
            alt={appointment.doctorName}
            className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6"
          />
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-medium text-gray-800">
              {appointment.doctorName}
            </h2>
            <p className="text-sm text-gray-600">{appointment.specialization}</p>
            <p className="text-sm text-gray-500 mt-1">Address: {appointment.address}</p>
            <p className="text-sm text-gray-500 mt-1">
              Date & Time: {appointment.date}, {appointment.time}
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
            {appointment.status === "Unpaid" && (
              <button
                onClick={() => handleStatusChange(appointment.id, "Paid")}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-600 w-full sm:w-auto"
              >
                Pay Here
              </button>
            )}
            {appointment.status === "Paid" && (
              <button
                disabled
                className="bg-green-500 text-white px-4 py-2 rounded mb-2 cursor-not-allowed w-full sm:w-auto"
              >
                Paid
              </button>
            )}
            <button
              onClick={() => handleStatusChange(appointment.id, "Cancelled")}
              className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-all w-full sm:w-auto"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
