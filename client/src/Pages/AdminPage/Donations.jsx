import React from "react";
import { Link } from "react-router-dom";
import { backgroundImage } from "../../assets/img";

const Donations = () => {
  return (
    <>
      <div className="container">
        <div className="mt-10 flex h-fit flex-wrap justify-between gap-3 px-20 sm:mt-10">
          <section class="body-font text-gray-600">
            <div class="container mx-auto px-5 py-5">
              <div class="mb-20 flex w-full flex-col text-center">
                <h1 class="title-font mb-4 text-2xl font-medium tracking-widest text-gray-900">
                  Donation Products
                </h1>
                <p class="mx-auto text-base leading-relaxed lg:w-2/3">
                  The donated food and services will be displayed in this
                  section, and you may acquire them either free of charge or by
                  paying a fee.
                </p>
              </div>
              <div class="-m-4 flex flex-wrap">
                <div class="p-4 lg:w-1/2">
                  <div class="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                    <Link to="/donatedescription">
                      <div className="mb-4 flex h-48 w-48 flex-shrink-0 rounded-lg hover:cursor-pointer hover:opacity-70 sm:mb-0">
                        <img
                          alt="team"
                          class="h-full w-full flex-shrink-0 rounded-lg object-cover object-center"
                          src={backgroundImage}
                        />
                      </div>
                    </Link>
                    <div class="flex-grow sm:pl-8">
                      <h2 class="title-font text-lg font-medium text-gray-900">
                        Organization
                      </h2>
                      <h3 class="mb-3 text-gray-500">Chabahil, Kathmandu</h3>
                      <p class="mb-4">
                        The donation consists of a one-time serving of food that
                        can feed approximately 20 people. This high-quality food
                        has been carefully prepared and is guaranteed safe for
                        consumption without any risk of contamination.
                      </p>
                      <div class="flex justify-between">
                        <span>NRs. 000</span>
                        <span>2077 / 11 / 20</span>
                      </div>
                      <div className="my-2 flex h-fit justify-end">
                        <button className="ouline-none cursor-pointer rounded-lg border-none bg-primary px-3 py-1 font-semibold text-black">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-4 lg:w-1/2">
                  <div class="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                    <Link to="/donatedescription">
                      <div className="mb-4 flex h-48 w-48 flex-shrink-0 rounded-lg hover:cursor-pointer hover:opacity-70 sm:mb-0">
                        <img
                          alt="team"
                          class="h-full w-full flex-shrink-0 rounded-lg object-cover object-center"
                          src={backgroundImage}
                        />
                      </div>
                    </Link>
                    <div class="flex-grow sm:pl-8">
                      <h2 class="title-font text-lg font-medium text-gray-900">
                        Organization
                      </h2>
                      <h3 class="mb-3 text-gray-500">Chabahil, Kathmandu</h3>
                      <p class="mb-4">
                        The donation consists of a one-time serving of food that
                        can feed approximately 20 people. This high-quality food
                        has been carefully prepared and is guaranteed safe for
                        consumption without any risk of contamination.
                      </p>
                      <div class="flex justify-between">
                        <span>NRs. 20,000</span>
                        <span>2077 / 11 / 20</span>
                      </div>
                      <div className="my-2 flex h-fit justify-end">
                        <button className="ouline-none cursor-pointer rounded-lg border-none bg-primary px-3 py-1 font-semibold text-black">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-4 lg:w-1/2">
                  <div class="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                    <Link to="/donatedescription">
                      <div className="mb-4 flex h-48 w-48 flex-shrink-0 rounded-lg hover:cursor-pointer hover:opacity-70 sm:mb-0">
                        <img
                          alt="team"
                          class="h-full w-full flex-shrink-0 rounded-lg object-cover object-center"
                          src={backgroundImage}
                        />
                      </div>
                    </Link>
                    <div class="flex-grow sm:pl-8">
                      <h2 class="title-font text-lg font-medium text-gray-900">
                        Organization
                      </h2>
                      <h3 class="mb-3 text-gray-500">Chabahil, Kathmandu</h3>
                      <p class="mb-4">
                        The donation consists of a one-time serving of food that
                        can feed approximately 20 people. This high-quality food
                        has been carefully prepared and is guaranteed safe for
                        consumption without any risk of contamination.
                      </p>
                      <div class="flex justify-between">
                        <span>NRs. 1,000</span>
                        <span>2077 / 11 / 20</span>
                      </div>
                      <div className="my-2 flex h-fit justify-end">
                        <button className="ouline-none cursor-pointer rounded-lg border-none bg-primary px-3 py-1 font-semibold text-black">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Donations;
