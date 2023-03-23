import React from "react";
import {
  backgroundImage,
  backgroundImage2,
  backgroundImage3,
} from "../../assets/img";

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
                      Food Drive
                    </h1>
                    <p className="mb-3 leading-relaxed">
                      This campaign aims to collect food donations from
                      individuals and businesses to support Food Share Nepal's
                      efforts. It could involve setting up collection boxes at
                      local grocery stores or organizing a food drive at a
                      school or workplace. The campaign could also feature
                      social media posts and emails with
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
                    src={backgroundImage2}
                    alt=""
                  />
                  <div className="p-6">
                    <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                      Meal Sponsorship
                    </h1>
                    <p className="mb-3 leading-relaxed">
                      This service aims to engage businesses and individuals to
                      sponsor meals for people in need. It could involve
                      creating a partnership program where businesses can
                      sponsor a certain number of meals each month, or
                      individuals can make a one-time donation to sponsor a meal
                      for a family. The service could highlight the impact of
                      meal sponsorship, such as how it helps Food Share Nepal
                      provide consistent meals to those in need.
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
                    src={backgroundImage3}
                    alt=""
                  />
                  <div className="p-6">
                    <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                      Donate to Feed a Family
                    </h1>
                    <p className="mb-3 leading-relaxed">
                      This service aims to raise awareness and funds for Food
                      Share Nepal's efforts to provide meals to families in
                      need. It could involve social media posts and emails
                      encouraging people to make a donation of a certain amount,
                      such as $10, which can provide a meal for a family. The
                      service can highlight the impact of a small donation, such
                      as how just $50 can feed a family of five for a week
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
