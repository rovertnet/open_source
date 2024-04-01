import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar"
import PageCompoonent from "../components/PageCompoonent";
import NewLetter from "../components/NewLetter";

const About = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <PageCompoonent title="About">
        <NewLetter />
      </PageCompoonent>
    </>
  );
}

export default About