import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import PageCompoonent from "../components/PageCompoonent";
import NewLetter from "../components/NewLetter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <PageCompoonent title="DashBoard">
        <NewLetter />
      </PageCompoonent>
    </>
  );
};

export default Home;
