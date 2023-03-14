import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const NavBar = () => {
  const [display, setDisplay] = useState(true);
  const onClickHandler = () => {
    display === true ? setDisplay(false) : setDisplay(true);
  };
  return (
    <>
      <Header />
      <div className="body-font bg-primary text-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
          <Link to="/" className="title-font flex w-fit items-center justify-center font-medium text-black">
            <span className="cursor-pointer text-xl">Logo</span>
          </Link>
          <nav className="hidden w-8/12 flex-wrap items-center justify-around text-base md:ml-auto md:flex lg:w-5/12">
            <Link to="/" className="cursor-pointer text-white hover:text-slate-400">
              Home
            </Link>
            <Link to="/about" className="cursor-pointer text-white hover:text-slate-400">
              About Us
            </Link>
            <Link to="/ourprogram" className="cursor-pointer text-white hover:text-slate-400">
              Our Program
            </Link>
            <Link to="" className="cursor-pointer text-white hover:text-slate-400">
              Partners
            </Link>
          </nav>
          <i
            className="fa-solid fa-bars flex md:hidden"
            onClick={onClickHandler}
          ></i>
          <Link to="/login">
            <button className="inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none">
              SignIn
            </button>
          </Link>
        </div>
      </div>
      <div
        className={
          display === true
            ? "h-0 scale-0 justify-center bg-[#899966]"
            : "h-fit scale-100 justify-center bg-[#899966] transition-all md:h-0 md:scale-0"
        }
      >
        <nav className="grid w-full place-items-center">
          <Link to="" className="flex h-10 w-full cursor-pointer items-center justify-center hover:bg-slate-700 hover:text-white">
            Home
          </Link>
          <Link to="" className="flex h-10 w-full cursor-pointer items-center justify-center hover:bg-slate-700 hover:text-white">
            About Us
          </Link>
          <Link to="" className="flex h-10 w-full cursor-pointer items-center justify-center hover:bg-slate-700 hover:text-white">
            Our Program
          </Link>
          <Link to="" className="flex h-10 w-full cursor-pointer items-center justify-center hover:bg-slate-700 hover:text-white">
            Partners
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
