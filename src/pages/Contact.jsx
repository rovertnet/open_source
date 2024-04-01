import Navbar from "../components/header/Navbar";
import { Outlet } from "react-router-dom";
import PageCompoonent from "../components/PageCompoonent";
import NewLetter from "../components/NewLetter";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <PageCompoonent title="Contact">
        <NewLetter />
      </PageCompoonent>
    </>
  );
};

export default Contact;
