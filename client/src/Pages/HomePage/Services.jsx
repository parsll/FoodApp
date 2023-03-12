import React from "react";
import { backgroundImage } from "../../assets/img";

const Services = () => {
  return (
    <>
      <div className="container m-auto mt-10 px-3 py-4">
        <h1 className="text-center text-3xl font-semibold text-black">
          Our Services
        </h1>
        <section className="body-font bg-white text-gray-600">
          <div className="container mx-auto p-5">
            <div className="-m-4 flex flex-wrap">
              <div className="p-4 md:w-1/3">
                <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 bg-primary bg-opacity-50">
                  <img
                    className="w-full object-cover object-center md:h-36 lg:h-48"
                    src={backgroundImage}
                    alt=""
                  />
                  <div className="p-6">
                    <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                      Hamro Kaam
                    </h1>
                    <p className="mb-3 leading-relaxed">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Est aut amet totam eius fuga at cupiditate, consequatur
                      explicabo rem omnis?
                    </p>
                    <div className="flex flex-wrap items-center ">
                      <a className="inline-flex cursor-pointer items-center text-black md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="ml-2 h-4 w-4"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                  <img
                    className="w-full object-cover object-center md:h-36 lg:h-48"
                    src={backgroundImage}
                    alt=""
                  />
                  <div className="p-6">
                    <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                      Hamro Kaam
                    </h1>
                    <p className="mb-3 leading-relaxed">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Est aut amet totam eius fuga at cupiditate, consequatur
                      explicabo rem omnis?
                    </p>
                    <div className="flex flex-wrap items-center">
                      <a className="inline-flex cursor-pointer items-center text-black md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="ml-2 h-4 w-4"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 bg-primary bg-opacity-50">
                  <img
                    className="w-full object-cover object-center md:h-36 lg:h-48"
                    src={backgroundImage}
                    alt=""
                  />
                  <div className="p-6">
                    <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                      Hamro Kaam
                    </h1>
                    <p className="mb-3 leading-relaxed">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Est aut amet totam eius fuga at cupiditate, consequatur
                      explicabo rem omnis?
                    </p>
                    <div className="flex flex-wrap items-center ">
                      <a className="inline-flex cursor-pointer items-center text-black md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="ml-2 h-4 w-4"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
