import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="container mx-auto flex flex-wrap items-center justify-between p-5">
        <a
          className="title-font flex items-center font-medium text-gray-900"
          href=""
        >
          9866545236
        </a>
        <a
          className="title-font flex items-center font-medium text-gray-900"
          href=""
        >
          foodapp@gmail.com
        </a>
      </header>
      <div className="body-font bg-[#899976] text-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
          <a className="title-font flex w-fit items-center justify-center font-medium text-gray-900">
            <span className="cursor-pointer text-xl">Logo</span>
          </a>
          <nav className="hidden w-8/12 lg:w-5/12 flex-wrap items-center justify-around text-base md:ml-auto md:flex">
            <a className="cursor-pointer hover:text-gray-700">Home</a>
            <a className="cursor-pointer hover:text-gray-700">About Us</a>
            <a className="cursor-pointer hover:text-gray-700">Our Program</a>
            <a className="cursor-pointer hover:text-gray-700">Partners</a>
          </nav>
          <button className="inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none">
            SignIn
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
