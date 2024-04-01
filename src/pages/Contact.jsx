
import Navbar from '../components/header/Navbar';
import { Outlet } from 'react-router-dom';
import PageCompoonent from '../components/PageCompoonent';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <PageCompoonent title="Contact">
        Contact
      </PageCompoonent>
    </>
  );
}

export default Contact