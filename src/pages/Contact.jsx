import React from 'react'
import Navbar from '../components/header/Navbar';
import { Outlet } from 'react-router-dom';
import PageCompoonent from '../components/PageCompoonent';
import Panel from '../components/component_ecole/Panel';

const Contact = () => {
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

export default Contact