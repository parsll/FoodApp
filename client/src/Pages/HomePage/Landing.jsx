import React from "react";
import { backgroundImage } from "../../assets/img";
import Services from "./Services";
import Work from "./Work";

const Landing = () => {
  return (
    <>
      <div className="relative bg-slate-500">
        <div className="overflow-hidden">
          <img
            src={backgroundImage}
            alt=""
            className="relative top-0 left-0 h-[60vh] w-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 h-[60vh] w-full bg-black bg-opacity-50"></div>
        <div className="absolute top-0 left-0 grid h-[70vh] w-full place-items-center">
          <div className="container grid place-items-center gap-5 mt-20">
            <h1 className="text-3xl text-white text-center">Slogan gone wrong</h1>
            <button className="cursor-pointer rounded-xl bg-primary px-5 py-2 text-2xl font-semibold tracking-widest text-white hover:bg-slate-300 hover:text-black">
              Donate
            </button>
          </div>
        </div>
      </div>
      <Services />
      <Work />
    </>
  );
};

export default Landing;
