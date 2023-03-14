import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <div className="4xl:max-w-4xls flex max-w-[90%] flex-col items-center justify-center sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl">
          <div className="m-auto flex-row justify-center">
            <h1 className="text-center text-[40px]">Welcome</h1>
            <p className="text-center">sign in to your account</p>
          </div>
          <div className="w-full p-[2rem]">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
              method="POST"
            >
              <div className="my-3 flex-row">
                <label htmlFor="email font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border-2 py-2 px-5"
                  placeholder="example@gmail.com"
                />
                <span className="text-red-700"></span>
              </div>
              <div className="my-3 flex-row">
                <label htmlFor="password font-bold">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full border-2 py-2 px-5"
                  placeholder="********"
                />
                <span className="text-red-700"></span>
              </div>

              <div className="flex items-center justify-between">
                <Link to="/sendmail">
                  <p className="cursor-pointer hover:underline">
                    Forgot Password ??
                  </p>
                </Link>
              </div>
              <button className="my-2 w-full rounded-md bg-primary py-2 text-white drop-shadow-lg">
                Login
              </button>
              <div className="my-3 flex justify-start">
                <p>
                  Don't have an account ?
                  <Link
                    to="/register"
                    className="cursor-pointer pl-4 font-semibold text-primary hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
