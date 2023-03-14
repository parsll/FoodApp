import React, { useState } from "react";
import { Link } from "react-router-dom";
import { backgroundImage } from "../../assets/img";

const NavBar = () => {
  const [display, setDisplay] = useState(true);
  const onClickHandler = () => {
    display === true ? setDisplay(false) : setDisplay(true);
  };

  const [show, setShow] = useState(true);
  const onClickHandler1 = () => {
    show === true ? setShow(false) : setShow(true);
  };

  return (
    <>
      <div className="container mt-5 flex justify-between px-5">
        <div className="place-items-left grid h-20 w-20 overflow-hidden rounded-full bg-red-300">
          <Link to={"/"}>
            <img
              src={backgroundImage}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
        <div className="flex gap-3">
          <div className="my-auto h-fit w-fit rounded-xl bg-[#F5F5F5] py-1 text-black">
            <p className="px-2">Santosh Ghimire</p>
          </div>
          <div className="my-auto">
            <img
              src={backgroundImage}
              alt="profile"
              className=" h-12 w-12 cursor-pointer rounded-full bg-black"
              onClick={onClickHandler1}
            />
            <div
              className={
                show === true
                  ? "top-15 absolute right-5 z-20 hidden w-max rounded-lg bg-white py-2 shadow shadow-black"
                  : "top-15 absolute right-5 z-20 grid w-max rounded-lg bg-white py-2 shadow shadow-black"
              }
            >
              <Link
                to="/profile"
                className="font-regular cursor-pointer rounded-lg px-5 py-1 text-lg hover:bg-[#F5F5F5]"
              >
                View Profile
              </Link>
              <h2 className="font-regular cursor-pointer rounded-lg px-5 py-1 text-lg hover:bg-[#F5F5F5]">
                Booking
              </h2>
              <h2 className="font-regular cursor-pointer rounded-lg px-5 py-1 text-lg hover:bg-[#F5F5F5]">
                Sign Out
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
