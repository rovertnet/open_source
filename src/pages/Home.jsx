import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import PageCompoonent from "../components/PageCompoonent";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      
      <PageCompoonent>
        
      </PageCompoonent>

    </>
  );
};

export default Home;
