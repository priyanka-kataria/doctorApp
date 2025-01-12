import React from "react";
// import footimg from "../assets_frontend/"
import logo from "../assets_frontend/logo.svg";
export default function Footer() {
  return (
    <div className="md:mx-10 ">
      <div className="flex flex-col sm:grid grid-cols-[1fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={logo} alt="/"></img>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum
            eos exercitationem. Laboriosam quos neque qui architecto numquam,
            odio omnis. Reiciendis, veritatis ex.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+0-000-000-000</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
