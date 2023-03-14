import React from "react";
import { backgroundImage } from "../../assets/img";
import Header from "../../Components/Header/Header";
import IntroCard from "./IntroCard";
import NavBar from "./NavBar";

const Profile = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="profile z-20 grid h-[8rem] w-full place-items-center rounded-xl sm:h-[15rem] md:h-[22rem] lg:h-[28rem]">
        <div className="coverImage absolute -z-10 h-[60vh] w-full rounded-full">
          <img
            src={backgroundImage}
            alt="Cover"
            className="h-full w-full object-cover"
          />
        </div>
        <label
          htmlFor="input-file"
          className="m-auto flex h-10 w-32 cursor-pointer items-center justify-center bg-white bg-opacity-60 text-black hover:bg-white"
        >
          <input
            type={"file"}
            className="hidden text-lg"
            id="input-file"
          ></input>
          <div htmlFor="input-file">Edit Image</div>
        </label>
      </div>
      <div className="m-auto mx-5 my-5 mt-[-1rem] rounded-lg bg-[#F5F5F5] px-1 pt-10 sm:mt-[-5rem] md:mx-20 md:mt-[-7rem] md:px-5 lg:mt-[-9rem]">
        <div className="relative flex flex-wrap justify-center sm:justify-start ">
          <i className="fa-solid fa-ellipsis-vertical absolute right-3 cursor-pointer"></i>
          <label htmlFor="profileImage">
            <img
              src={backgroundImage}
              alt="profile img"
              className="mx-10 h-24 w-24 rounded-full bg-black"
            />
          </label>
          <input type={"file"} className="hidden" id="profileImage"></input>
          <div className="flex-col">
            <div className="flex-col">
              <h1 className="text-lg font-bold tracking-widest">nothing</h1>
              <a href={`mailto:`} className="text-sm font-light">
                santoshghimire@gmail.com
              </a>
            </div>
            <div className="my-5 flex-col">
              <h1 className="text-lg font-semibold">Photo Upload</h1>
              <p>2</p>
            </div>
          </div>
        </div>
      </div>

      <IntroCard />
    </>
  );
};

export default Profile;
