import React from "react";
import { backgroundImage } from "../../assets/img";

const Campaign = () => {
  return (
    <>
      <div className="container mx-auto my-10">
        <h1 className="text-center text-3xl font-semibold tracking-wider">
          Campaigning
        </h1>
        <section className="body-font text-gray-600">
          <div className="container mx-auto px-5 py-24">
            <div className="mb-20 flex w-full flex-wrap">
              <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                  Campaigning in different Areas
                </h1>
                <div className="h-1 w-20 rounded bg-indigo-500"></div>
              </div>
              <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
                Food Distribution Campaign in Gorkha. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Molestias ipsam rem voluptatibus
                neque eveniet vel dolorem quas repellat quis recusandae?
              </p>
            </div>
            <div className="-m-4 flex flex-wrap">
              <div className="p-4 md:w-1/2 xl:w-1/4">
                <div className="rounded-lg bg-gray-100 p-6">
                  <img
                    className="mb-6 h-40 w-full rounded object-cover object-center"
                    src={backgroundImage}
                    alt="content"
                  />
                  <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                    Chitwan
                  </h3>
                  <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                    Food Share
                  </h2>
                  <p className="text-base leading-relaxed">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 xl:w-1/4">
                <div className="rounded-lg bg-gray-100 p-6">
                  <img
                    className="mb-6 h-40 w-full rounded object-cover object-center"
                    src={backgroundImage}
                    alt="content"
                  />
                  <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                    Chitwan
                  </h3>
                  <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                    Food Distribution
                  </h2>
                  <p className="text-base leading-relaxed">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 xl:w-1/4">
                <div className="rounded-lg bg-gray-100 p-6">
                  <img
                    className="mb-6 h-40 w-full rounded object-cover object-center"
                    src={backgroundImage}
                    alt="content"
                  />
                  <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                    Chitwan
                  </h3>
                  <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                    Food Campaign
                  </h2>
                  <p className="text-base leading-relaxed">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 xl:w-1/4">
                <div className="rounded-lg bg-gray-100 p-6">
                  <img
                    className="mb-6 h-40 w-full rounded object-cover object-center"
                    src={backgroundImage}
                    alt="content"
                  />
                  <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                    Chitwan
                  </h3>
                  <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                    Groceries Distribute
                  </h2>
                  <p className="text-base leading-relaxed">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
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

export default Campaign;
