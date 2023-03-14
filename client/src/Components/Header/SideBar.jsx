import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();
  console.log('====================================');
  console.log(location);
  console.log('====================================');
  const admin = 'http://localhost:3000/admin';
  const dashboard = 'http://localhost:3000/admin/dashboard';
  const review = 'http://localhost:3000/admin/review';
  const adddetail = 'http://localhost:3000/admin/adddetail';
  const hoteldetail = 'http://localhost:3000/admin/hoteldetail';
  const offer = 'http://localhost:3000/admin/offer';
  const urlState = window.location.href;
  console.log('====================================');
  console.log(window.location.pathname);
  console.log('====================================');
  return (
    <>
      <div className="fixed h-full w-fit pt-32">
        <Link to="/admin/dashboard">
          <div className="flex rounded-md bg-[#f5f5f5]">
            <div
              className={`grid h-14 w-14 cursor-pointer place-items-center rounded-r-[5px] border-l-primary text-black hover:bg-white ${
                urlState === dashboard ? 'border-l-[.5rem] bg-white' : ''
              }`}
            >
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
        </Link>
        <Link to="/admin/hoteldetail">
          <div className="flex rounded-md bg-[#f5f5f5]">
            <div
              className={`grid h-14 w-14 cursor-pointer place-items-center rounded-r-[5px] border-l-primary text-black hover:bg-white ${
                urlState === hoteldetail ? 'border-l-[.5rem] bg-white' : ''
              }`}
            >
              <i className="fa-regular fa-calendar-days"></i>
            </div>
          </div>
        </Link>
        <Link to="/admin/offer">
          <div className="flex rounded-md bg-[#f5f5f5]">
            <div
              className={`grid h-14 w-14 cursor-pointer place-items-center rounded-r-[5px] border-l-primary text-black hover:bg-white ${
                urlState === offer ? 'border-l-[.5rem] bg-white' : ''
              }`}
            >
              <i className="fa-solid fa-badge-percent"></i>
            </div>
          </div>
        </Link>
        <Link to="/admin/review">
          <div className="flex rounded-md bg-[#f5f5f5]">
            <div
              className={`grid h-14 w-14 cursor-pointer place-items-center rounded-r-[5px] border-l-primary text-black hover:bg-white ${
                urlState === review ? 'border-l-[.5rem] bg-white' : ''
              }`}
            >
              <i className="fa-solid fa-thumbs-up"></i>
            </div>
          </div>
        </Link>
        <Link to="/admin/adddetail">
          <div className="flex rounded-md bg-[#f5f5f5]">
            <div
              className={`grid h-14 w-14 cursor-pointer place-items-center rounded-r-[5px] border-l-primary text-black hover:bg-white ${
                urlState === adddetail ? 'border-l-[.5rem] bg-white' : ''
              }`}
            >
              <i className="fa-solid fa-layer-plus"></i>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
