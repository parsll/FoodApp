import React from "react";
import { Link } from "react-router-dom";
import {
  backgroundImage,
  backgroundImage3,
  backgroundImage6,
  backgroundImage7,
} from "../../assets/img";

const RequestProduct = () => {
  return (
    <>
      <section class="body-font text-gray-600">
        <div class="container mx-auto px-5 py-24">
          <div class="mb-20 flex w-full flex-col text-center">
            <h1 class="title-font mb-4 text-2xl font-medium tracking-widest text-gray-900">
              Request Products
            </h1>
            <p class="mx-auto text-base leading-relaxed lg:w-2/3">
              The requested food and services will be displayed in this section,
              and you may acquire them either free of charge or by paying a fee.
            </p>
          </div>
          <div class="-m-4 flex flex-wrap">
            <div class="p-4 lg:w-1/2">
              <div class="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <Link to="/requestdescription">
                  <div className="mb-4 flex h-48 w-48 flex-shrink-0 rounded-lg hover:cursor-pointer hover:opacity-70 sm:mb-0">
                    <img
                      alt="team"
                      class="h-full w-full flex-shrink-0 rounded-lg object-cover object-center"
                      src={backgroundImage6}
                    />
                  </div>
                </Link>
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    Organization
                  </h2>
                  <h3 class="mb-3 text-gray-500">Chabahil, Kathmandu</h3>
                  <p class="mb-4">
                    The request consists of a one-time serving of food that can
                    feed approximately 20 people. This high-quality food has
                    been carefully prepared and is guaranteed safe for
                    consumption without any risk of contamination.
                  </p>
                  <div class="flex justify-between">
                    <span>NRs. 1,000</span>
                    <span>2077 / 11 / 20</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <Link to="/requestdescription">
                  <div className="mb-4 flex h-48 w-48 flex-shrink-0 rounded-lg hover:cursor-pointer hover:opacity-70 sm:mb-0">
                    <img
                      alt="team"
                      class="h-full w-full flex-shrink-0 rounded-lg object-cover object-center"
                      src={backgroundImage7}
                    />
                  </div>
                </Link>
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    Hyatt Hotel
                  </h2>
                  <h3 class="mb-3 text-gray-500">Boudha, Kathmandu</h3>
                  <p class="mb-4">
                    This consist of high quality food for upto 100 peoples and
                    is generally in for pickup at Hyatt Nepal. This is generally
                    to distribute in other places and upfront request
                  </p>
                  <div class="flex justify-between">
                    <span>2079 / 12 / 20</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <Link to="/requestdescription">
                  <div className="mb-4 flex h-48 w-48 flex-shrink-0 rounded-lg hover:cursor-pointer hover:opacity-70 sm:mb-0">
                    <img
                      alt="team"
                      class="h-full w-full flex-shrink-0 rounded-lg object-cover object-center"
                      src={backgroundImage3}
                    />
                  </div>
                </Link>
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    Thamel
                  </h2>
                  <h3 class="mb-3 text-gray-500">Chabahil, Kathmandu</h3>
                  <p class="mb-4">
                    The donation consists of a two-time serving of food that can
                    feed approximately 50 people. This high-quality food has
                    been carefully prepared and is guaranteed safe for
                    consumption without any risk of contamination.
                  </p>
                  <div class="flex justify-between">
                    <span>NRs. 10000</span>
                    <span>2077 / 11 / 20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestProduct;
