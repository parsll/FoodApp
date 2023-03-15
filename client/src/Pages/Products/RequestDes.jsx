import React from "react";
import { backgroundImage } from "../../assets/img";

const RequestDes = () => {
  return (
    <>
      <section class="body-font text-gray-600">
        <div class="container mx-auto flex flex-col items-center justify-center px-5 py-10">
          <h1 className="my-10 text-center text-3xl font-bold tracking-widest">
            Requested Product
          </h1>
          <img
            class="mb-10 w-5/6 rounded object-cover object-center md:w-3/6 lg:w-2/6"
            alt="hero"
            src={backgroundImage}
          />
          <div class="mb-16 flex w-full flex-col items-center text-center md:w-2/3">
            <h1 class="title-font mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
              ABC Organization
            </h1>
            <p class="mb-8 leading-relaxed">
              The request consists of a one-time serving of food that can feed
              approximately 20 people. This high-quality food has been carefully
              prepared and is guaranteed safe for consumption without any risk
              of contamination.
            </p>
            <div class="flex w-full items-end justify-center">
              <div class="relative mr-4 w-2/4 text-left md:w-full lg:w-full xl:w-1/2">
                <label for="hero-field" class="text-sm leading-7 text-gray-600">
                  Message
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  placeholder="Why you request for this meal..."
                  class="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <button class="inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                Request
              </button>
            </div>
            <p class="mt-2 mb-8 w-full text-sm text-gray-500">
              You will get notified as soon as your request approved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestDes;
