import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className=" bg-dark p-3 shadow-md">
        <h1 className=" text-2xl px-14 text-white font-bold font-pacifico">
          DashBoard
        </h1>
      </div>
    </>
  );
};

export default Home;
