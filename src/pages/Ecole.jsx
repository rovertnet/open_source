import { Outlet } from "react-router-dom"
import Navbar from "../components/header/Navbar";
import Panel from "../components/component_ecole/Panel";


const Ecole = () => {
  return (
    <div className=" bg-blanc">
      <Navbar />
      <Outlet />
      <div className=" bg-dark p-3 shadow-md">
        <h1 className=" text-2xl px-14 text-white font-bold font-pacifico">
          Scool
        </h1>
      </div>
      <Panel />
    </div>
  );
}

export default Ecole