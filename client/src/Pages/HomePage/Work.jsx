import React from "react";
import { backgroundImage, backgroundImage6 } from "../../assets/img";

const Work = () => {
  return (
    <>
      <div className="m-auto mt-10 px-3 py-4">
        <h1 className="text-center text-3xl font-semibold text-black">
          Our Works
        </h1>
        <section class="body-font overflow-hidden text-gray-600">
          <div class="container mx-auto p-5">
            <div class="relative mx-auto flex flex-wrap lg:w-4/5">
              <img
                alt="food"
                class="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
                src={backgroundImage6}
              />
              <div class="mt-6 flex w-full items-end lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
                <div className="flex-col">
                  <h1 class="title-font mb-1 text-2xl font-medium text-gray-900">
                    Social Work
                  </h1>
                  <p class="leading-relaxed">
                    Food Share Nepal organizes various campaings and food
                    distribution projects. Our team has succesfully completed
                    food and groceries distribution to the needy people. In
                    addition to this, Food Share Nepal has been doing Meal
                    Sponshorship Campaign and Donate to feed a family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
