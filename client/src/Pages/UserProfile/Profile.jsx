import React from "react";
import { Outlet } from "react-router";
import Header from "../../Components/Header/Header";
import IntroCard from "./IntroCard";
import NavBar from "./NavBar";
import SharingDetail from "./SharingDetail";
import Switch from "./Products/Switch";

const Profile = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container mx-5 grid gap-5 sm:flex">
        <IntroCard />
        <div className="mx-2 flex flex-wrap lg:justify-center">
          <div className="flex-col">
            <div className="relative my-5 h-fit w-full rounded-lg bg-[#F5F5F5] p-3 lg:w-[45rem]">
              <SharingDetail />
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Switch />
    </>
  );
};

export default Profile;
