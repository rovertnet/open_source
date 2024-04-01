import { Navbar } from "flowbite-react";
import { Outlet } from "react-router-dom";
import PageCompoonent from "../components/PageCompoonent";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <PageCompoonent title={"Profile"} >
        Profile
      </PageCompoonent>
    </>
  );
}

export default Profile