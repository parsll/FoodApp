import React, { useState } from "react";
import { backgroundImage } from "../../assets/img";

const Events = () => {
  const [display, setDisplay] = useState(false);
  const onClickHandler = () => {
    setDisplay((prev) => !prev);
  };
  return (
    <>
      <div className="flex w-full justify-end" onClick={onClickHandler}>
        <div className="flex cursor-pointer items-center rounded-lg bg-white px-3 py-1 font-semibold text-primary">
          <i className="fa-solid fa-plus mx-3"></i>
          <button type="submit" className="">
            Add
          </button>
        </div>
      </div>
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
            <h1 className="text-center text-3xl">Add Events</h1>
            <div className="grid place-items-center gap-3 rounded-lg bg-[#F5F5F5] p-2">
              <button className="rounded-md bg-primary py-2 px-14 text-white">
                Upload Photo
              </button>
              <p className="text-lg">Drag and drop the file</p>
            </div>
            <p className="text-lg">Add a description</p>
            <textarea
              placeholder="Write something about this photo"
              className="h-20 w-full resize-none rounded-lg bg-[#f5f5f5] p-3 outline-none"
            ></textarea>
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
                Organization
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
                Date
              </label>
              <input
                type="date"
                name=""
                id=""
                className="text-md rounded-lg border-none bg-[#f5f5f5] px-3 py-1 outline-none"
              />
            </div>
            <button className="m-auto w-fit rounded-md bg-primary py-2 px-14 text-white">
              Post
            </button>
          </div>
        </div>
      )}
      <section class="body-font overflow-hidden text-gray-600">
        <div class="container mx-auto my-10">
          <div class="mx-auto flex flex-wrap lg:w-4/5">
            <img
              alt="events"
              class="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
              src={backgroundImage}
            />
            <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
              <h2 class="title-font text-sm tracking-widest text-gray-500">
                Ajju enterprises
              </h2>
              <h1 class="title-font mb-1 text-3xl font-medium text-gray-900">
                Events in Chitwan
              </h1>

              <p class="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              </p>
              <div className="flex items-end justify-end text-primary">
                <p>2019 / 11 / 02</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="body-font overflow-hidden text-gray-600">
        <div class="container mx-auto my-10">
          <div class="mx-auto flex flex-wrap lg:w-4/5">
            <img
              alt="events"
              class="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
              src={backgroundImage}
            />
            <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
              <h2 class="title-font text-sm tracking-widest text-gray-500">
                Ajju enterprises
              </h2>
              <h1 class="title-font mb-1 text-3xl font-medium text-gray-900">
                Events in Chitwan
              </h1>

              <p class="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              </p>
              <div className="flex items-end justify-end text-primary">
                <p>2019 / 11 / 02</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
