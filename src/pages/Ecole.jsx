import { Outlet } from "react-router-dom"
import Navbar from "../components/header/Navbar";
import Panel from "../components/component_ecole/Panel";
import PageCompoonent from "../components/PageCompoonent";
import NewLetter from "../components/NewLetter";


const Ecole = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <PageCompoonent title="Scool">
        <Panel />
        <NewLetter />
      </PageCompoonent>
    </>
  );
}

export default Ecole