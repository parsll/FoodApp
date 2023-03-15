import React, { useState } from "react";
import { backgroundImage } from "../../assets/img";

const IntroCard = () => {
  const [display, setDisplay] = useState(false);
  const onClickHandler = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <>
      {display === true && (
        <div className="fixed top-0 left-0 z-50 grid h-full w-full place-items-center overflow-y-scroll bg-black bg-opacity-75">
          <div className="grid w-[25rem] gap-3 rounded-md bg-white p-5 px-10">
            <div className="relative flex items-center">
              <span
                className="absolute -right-8 cursor-pointer bg-transparent"
                onClick={onClickHandler}
              >
                &#x274C;
              </span>
            </div>
            <h1 className="text-center text-3xl">Edit Profile</h1>
            <div className="grid">
              <p className="text-lg">Add a description</p>
              <textarea
                placeholder="Write something about this photo"
                className="h-20 w-full resize-none rounded-lg bg-[#f5f5f5] p-3 outline-none"
              ></textarea>
            </div>
            <div className="grid">
              <label htmlFor="" className="text-lg">
                Address
              </label>
              <input
                type="text"
                name=""
                id=""
                className="text-md rounded-lg border-none bg-[#f5f5f5] px-3 py-1 outline-none"
              />
            </div>
            <div className="grid">
              <label htmlFor="" className="text-lg">
                Email
              </label>
              <input
                type="text"
                name=""
                id=""
                className="text-md rounded-lg border-none bg-[#f5f5f5] px-3 py-1 outline-none"
              />
            </div>
            <div className="grid">
              <label htmlFor="" className="text-lg">
                Phone Number
              </label>
              <input
                type="text"
                name=""
                id=""
                className="text-md rounded-lg border-none bg-[#f5f5f5] px-3 py-1 outline-none"
              />
            </div>
            <button className="m-auto w-fit rounded-md bg-primary py-2 px-14 text-white">
              Edit
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap lg:mx-10">
        <div className="mx-auto flex-col">
          <div className="h-content relative my-5 w-[15rem] rounded-lg bg-[#F5F5F5] p-3">
            <div className="absolute top-0 right-0" onClick={onClickHandler}>
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-white px-3 py-1 font-semibold text-primary"
              >
                Edit
              </button>
            </div>
            <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full text-xl font-semibold">
              <img
                src={backgroundImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="my-1 flex">
              <p className="mx-auto text-2xl font-semibold">Ajju Maharjan</p>
            </div>
            <div className="my-1 flex">
              <p className="mx-auto text-lg">Chabahil, Kathmandu</p>
            </div>
            <div className="my-1 flex">
              <div className="mx-auto flex">
                <div className="flex">
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-regular fa-star text-primary"></i>
                  <i className="fa-regular fa-star text-primary"></i>
                </div>
                &emsp; | &emsp;{" "}
                <button className="h-fit w-fit bg-transparent">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                  <span className="mx-2">4</span>
                </button>
              </div>
            </div>
            <hr className="my-3 h-[2px] bg-primary" />
            <div className="my-1 flex">
              <p className="text-2xl font-semibold">Contact</p>
            </div>
            <div className="my-3">
              <p className="text-lg">Email</p>
              <p className="text-sm">ajju.maharjan@gmail.com</p>
            </div>
            <div className="my-3">
              <p className="text-lg">Phone Number</p>
              <p className="text-sm">9865325455</p>
            </div>
            <div className="my-3">
              <p className="text-lg">Address</p>
              <p className="text-sm">Chabahil, Kathmandu</p>
            </div>
          </div>
          <div className="h-content my-5 w-[15rem] rounded-lg bg-[#F5F5F5] p-3">
            <h1 className="mb-4 text-xl font-semibold">Your Info</h1>
            <div className="">
              <p className="text-lg">Description</p>
              <textarea
                name=""
                className="h-20 w-full resize-none bg-white p-2 text-sm"
                disabled
                value="Daily donor, sells low cost foods after 6pm onwards."
              ></textarea>
            </div>
            <div className="my-3 cursor-pointer items-center">
              <p className="text-xl">Hotel Rome,</p>
              <p className="text-xl">Ajju Paradise Hotel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroCard;
