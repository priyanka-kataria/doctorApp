import React from "react";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Myappointment from "./pages/Myappointment";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/contact";
import Doct from "./pages/Doct";
import Myprofile from "./pages/Myprofile";
import Apoointment from "./pages/Apoointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppState from "./context/AppState";

export default function App() {
  return (
    <>
    <AppState>
    <div className="text-black-200 mx-4 sm:max[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doct/>} />
        <Route path="/doctors/:speciality" element={<Doct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/my-appointment" element={<Myappointment />} />
        <Route path="/appointment/:docId" element={<Apoointment />} />
      </Routes>
      <Footer/>
    </div>
    </AppState>
    </>
  );
}
