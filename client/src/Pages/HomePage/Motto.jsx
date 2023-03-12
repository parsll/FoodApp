import React from "react";
import { backgroundImage } from "../../assets/img";

const Motto = () => {
  return (
    <>
      <div className="container my-10 mx-auto">
        <h1 className="my-5 text-center text-3xl">How we Work ??</h1>
        <section className="body-font text-gray-600">
          <div className="container mx-auto px-5">
            <div className="-m-4 flex flex-wrap justify-around">
              <div className="w-full p-4 sm:w-[20rem] md:w-[17rem] lg:w-[15rem]">
                <a className="relative mx-auto block h-[7rem] w-[7rem] overflow-hidden rounded-full">
                  <img
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center"
                    src={backgroundImage}
                  />
                </a>
                <div className="mt-4">
                  <h2 className="title-font text-justify text-lg font-medium text-gray-900">
                    Access our Desktop or Mobile App
                  </h2>
                </div>
              </div>
              <div className="w-full p-4 sm:w-[20rem] md:w-[17rem] lg:w-[15rem]">
                <a className="relative mx-auto block h-[7rem] w-[7rem] overflow-hidden rounded-full">
                  <img
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center"
                    src={backgroundImage}
                  />
                </a>
                <div className="mt-4">
                  <h2 className="title-font text-justify text-lg font-medium text-gray-900">
                    Share info about your donation or discount
                  </h2>
                </div>
              </div>
              <div className="w-full p-4 sm:w-[20rem] md:w-[17rem] lg:w-[15rem]">
                <a className="relative mx-auto block h-[7rem] w-[7rem] overflow-hidden rounded-full">
                  <img
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center"
                    src={backgroundImage}
                  />
                </a>
                <div className="mt-4">
                  <h2 className="title-font text-justify text-lg font-medium text-gray-900">
                    Publicly available for everyone and local distribution
                  </h2>
                </div>
              </div>
              <div className="w-full p-4 sm:w-[20rem] md:w-[17rem] lg:w-[15rem]">
                <a className="relative mx-auto block h-[7rem] w-[7rem] overflow-hidden rounded-full">
                  <img
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center"
                    src={backgroundImage}
                  />
                </a>
                <div className="mt-4">
                  <h2 className="title-font text-justify text-lg font-medium text-gray-900">
                    A local volunteer picks it up.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Motto;
