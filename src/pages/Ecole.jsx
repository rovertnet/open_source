import { Outlet } from "react-router-dom"
import Navbar from "../components/header/Navbar";
import Panel from "../components/component_ecole/Panel";
import PageCompoonent from "../components/PageCompoonent";


const Ecole = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <PageCompoonent title="Scool">
        <Panel />
        
      </PageCompoonent>
    </>
  );
}

export default Ecole