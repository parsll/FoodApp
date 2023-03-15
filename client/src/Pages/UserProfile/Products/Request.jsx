import React from "react";

const Request = () => {
  return (
    <>
      <section class="body-font text-gray-600">
        <div class="container mx-auto flex flex-wrap items-center px-5 py-10">
          <div class="pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
            <h1 class="title-font text-3xl font-medium text-gray-900">
              About Request
            </h1>
            <p class="mt-4 leading-relaxed">
              You can request the products and services you need, and someone
              will certainly respond to your request and provide assistance.
            </p>
          </div>
          <div class="mt-10 flex w-full flex-col rounded-lg bg-gray-100 p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6">
            <h2 class="title-font mb-5 text-lg font-medium text-gray-900">
              Request
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="text-sm leading-7 text-gray-600">
                Individual
              </label>
              <input
                type="text"
                placeholder="Your name (Optional)..."
                class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="text-sm leading-7 text-gray-600">
                Address
              </label>
              <input
                type="text"
                placeholder="eg: chabahil, Kathmandu"
                class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="text-sm leading-7 text-gray-600">
                Define Date (When would you like to receive your products?)
              </label>
              <input
                type="date"
                class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="text-sm leading-7 text-gray-600">
                Product Description
              </label>
              <textarea
                placeholder="eg: I am hungry and would like to have some food..."
                class="w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <button class="rounded border-0 bg-primary py-2 px-8 text-lg text-white hover:bg-opacity-70 focus:outline-none">
              Request
            </button>
            <p class="mt-3 text-xs text-gray-500">
              Your assistance and coordination are greatly appreciated.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Request;
