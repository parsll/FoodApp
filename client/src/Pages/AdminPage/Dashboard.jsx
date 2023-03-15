import React, { useState } from "react";
import { Link } from "react-router-dom";
import { backgroundImage } from "../../assets/img";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="mt-10 flex h-fit flex-wrap justify-between gap-3 px-20 sm:mt-10">
          <div className="flex h-32 w-52 items-end justify-between rounded-md bg-[#F5F5F5] p-3">
            <div className="grid h-full">
              <h1 className="text-lg">New Visitors</h1>
              <h1 className="mt-auto text-3xl font-semibold">899</h1>
            </div>
            <div className="mx-3 flex-col">
              <i className="fa-solid fa-users text-5xl text-slate-500"></i>
            </div>
          </div>
          <div className="flex h-32 w-52 items-end justify-between rounded-md bg-[#F5F5F5] p-3">
            <div className="grid h-full">
              <h1 className="text-lg">Total Donations</h1>
              <h1 className="mt-auto text-3xl font-semibold">55</h1>
            </div>
            <div className="mx-3 flex-col">
              <i className="fa-solid fa-calendar-lines-pen text-5xl text-slate-500"></i>
            </div>
          </div>
          <div className="flex h-32 w-52 items-end justify-between rounded-md bg-[#F5F5F5] p-3">
            <div className="grid h-full">
              <h1 className="text-lg">Total Requests</h1>
              <h1 className="mt-auto text-3xl font-semibold">25</h1>
            </div>
            <div className="mx-3 flex-col">
              <i className="fa-solid fa-calendar-days text-5xl text-slate-500"></i>
            </div>
          </div>
          <div className="flex h-32 w-52 items-end justify-between rounded-md bg-[#F5F5F5] p-3">
            <div className="grid h-full">
              <h1 className="text-lg">Total Visitors</h1>
              <h1 className="mt-auto text-3xl font-semibold">7000</h1>
            </div>
            <div className="mx-3 flex-col">
              <i className="fa-sharp fa-solid fa-ban text-5xl text-slate-500"></i>
            </div>
          </div>
          <section className="body-font text-gray-600">
            <div className="container mx-auto px-5 py-24">
              <div className="mb-20 flex w-full flex-col text-center">
                <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
                  Joined Members
                </h1>
                <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                  We are pleased to have the members who recently joined as a
                  part of our team.
                </p>
              </div>
              <div className="-m-2 flex flex-wrap">
                <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Link to="/profile">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        alt="team"
                        className="h-full w-full flex-shrink-0 rounded-full object-cover object-center"
                        src={backgroundImage}
                      />
                    </div>
                    </Link>
                    <div className="flex-grow">
                      <h2 className="title-font font-medium text-gray-900">
                        Holden Caulfield
                      </h2>
                      <p className="text-gray-500">Requester</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Link to="/profile">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        alt="team"
                        className="h-full w-full flex-shrink-0 rounded-full object-cover object-center"
                        src={backgroundImage}
                      />
                    </div>
                    </Link>
                    <div className="flex-grow">
                      <h2 className="title-font font-medium text-gray-900">
                        Henry Letham
                      </h2>
                      <p className="text-gray-500">Donor</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Link to="/profile">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        alt="team"
                        className="h-full w-full flex-shrink-0 rounded-full object-cover object-center"
                        src={backgroundImage}
                      />
                    </div>
                    </Link>
                    <div className="flex-grow">
                      <h2 className="title-font font-medium text-gray-900">
                        Oskar Blinde
                      </h2>
                      <p className="text-gray-500">Donor</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Link to="/profile">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        alt="team"
                        className="h-full w-full flex-shrink-0 rounded-full object-cover object-center"
                        src={backgroundImage}
                      />
                    </div>
                    </Link>
                    <div className="flex-grow">
                      <h2 className="title-font font-medium text-gray-900">
                        John Doe
                      </h2>
                      <p className="text-gray-500">Donor</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Link to="/profile">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        alt="team"
                        className="h-full w-full flex-shrink-0 rounded-full object-cover object-center"
                        src={backgroundImage}
                      />
                    </div>
                    </Link>
                    <div className="flex-grow">
                      <h2 className="title-font font-medium text-gray-900">
                        Martin Eden
                      </h2>
                      <p className="text-gray-500">Requester</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Link to="/profile">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        alt="team"
                        className="h-full w-full flex-shrink-0 rounded-full object-cover object-center"
                        src={backgroundImage}
                      />
                    </div>
                    </Link>
                    <div className="flex-grow">
                      <h2 className="title-font font-medium text-gray-900">
                        Boris Kitua
                      </h2>
                      <p className="text-gray-500">Donor</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Link to="/profile">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        alt="team"
                        className="h-full w-full flex-shrink-0 rounded-full object-cover object-center"
                        src={backgroundImage}
                      />
                    </div>
                    </Link>
                    <div className="flex-grow">
                      <h2 className="title-font font-medium text-gray-900">
                        Atticus Finch
                      </h2>
                      <p className="text-gray-500">Requester</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Link to="/profile">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        alt="team"
                        className="h-full w-full flex-shrink-0 rounded-full object-cover object-center"
                        src={backgroundImage}
                      />
                    </div>
                    </Link>
                    <div className="flex-grow">
                      <h2 className="title-font font-medium text-gray-900">
                        Alper Kamu
                      </h2>
                      <p className="text-gray-500">Donor</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Link to="/profile">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        alt="team"
                        className="h-full w-full flex-shrink-0 rounded-full object-cover object-center"
                        src={backgroundImage}
                      />
                    </div>
                    </Link>
                    <div className="flex-grow">
                      <h2 className="title-font font-medium text-gray-900">
                        Rodrigo Monchi
                      </h2>
                      <p className="text-gray-500">Donor</p>
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

export default Dashboard;
