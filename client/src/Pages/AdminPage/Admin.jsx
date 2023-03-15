import React, { useState } from "react";
import { Outlet, useLocation } from "react-router";
import SideBar from "../../Components/Header/SideBar";
import NavBar from "../UserProfile/NavBar";

const Admin = (props) => {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <SideBar />
      <Outlet context={props} />
    </>
  );
};

export default Admin;
