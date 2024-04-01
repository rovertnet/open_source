import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar"
import PageCompoonent from "../components/PageCompoonent";

const About = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <PageCompoonent title="About" >
        A propos
      </PageCompoonent>
    </>
  );
}

export default About