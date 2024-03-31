import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar"

const About = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <div className=" bg-dark p-3 shadow-md">
        <h1 className=" text-2xl px-14 text-white font-bold font-pacifico">
          About
        </h1>
      </div>
    </>
  );
}

export default About