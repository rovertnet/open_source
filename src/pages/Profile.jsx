import { Outlet } from "react-router-dom";
import PageCompoonent from "../components/PageCompoonent";
import Navbar from "../components/header/Navbar";
import NewLetter from "../components/NewLetter";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <PageCompoonent title={"Profile"}>
        <NewLetter />
      </PageCompoonent>
    </>
  );
}

export default Profile