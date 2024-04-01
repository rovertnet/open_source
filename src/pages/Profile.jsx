import { Outlet } from "react-router-dom";
import PageCompoonent from "../components/PageCompoonent";
import Navbar from "../components/header/Navbar";

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