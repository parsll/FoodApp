import React from "react";
import { Link, Outlet } from "react-router-dom";
import { creditcard, paypal } from "../../assets/img";
import Header from "../../Components/Header/Header";

const Donation = () => {
  return (
    <>
      <Header />
      <div classNameName="container m-auto">
        <div className="flex flex-wrap justify-around">
          <div className="d:w-3/4 m-4 w-fit">
            <h1 className="mb-5 text-center text-3xl font-semibold">
              Donation
            </h1>
            <div className="mt-10 flex flex-col items-center justify-center space-y-6 md:mt-4 md:space-y-8">
              <div className="grid gap-2">
                <label htmlFor="" className="font-semibold">
                  Donor Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className=" w-60 rounded-lg bg-gray-100 px-5 py-2 text-black placeholder:text-gray-600 placeholder:opacity-50 focus:border focus:outline-none sm:w-72 md:w-72 lg:w-[340px]"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="" className="font-semibold">
                  Donor Note
                </label>
                <textarea
                  type="text"
                  placeholder="Some words..."
                  className="w-60 resize-none rounded-lg bg-gray-100 px-5 py-2 text-black placeholder:text-gray-600 placeholder:opacity-50 focus:border focus:outline-none sm:w-72 md:w-72 lg:w-[340px]"
                ></textarea>
              </div>
              <div className="grid gap-2">
                <label htmlFor="" className="font-semibold">
                  Company Name
                </label>
                <textarea
                  type="text"
                  placeholder="Name of your organization (optional)"
                  className="w-60 resize-none rounded-lg bg-gray-100 px-5 py-2 text-black placeholder:text-gray-600 placeholder:opacity-50 focus:border focus:outline-none sm:w-72 md:w-72 lg:w-[340px]"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="" className="font-semibold">
                  Contact
                </label>
                <input
                  type="text"
                  placeholder="Phone Number..."
                  className=" w-60 rounded-lg bg-gray-100 px-5 py-2 text-black placeholder:text-gray-600 placeholder:opacity-50 focus:border focus:outline-none sm:w-72 md:w-72 lg:w-[340px]"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="" className="font-semibold">
                  Address
                </label>
                <textarea
                  type="text"
                  placeholder="Your mailing address..."
                  className="w-60 resize-none rounded-lg bg-gray-100 px-5 py-2 text-black placeholder:text-gray-600 placeholder:opacity-50 focus:border focus:outline-none sm:w-72 md:w-72 lg:w-[340px]"
                />
              </div>

              <button
                type="submit"
                className="m-auto cursor-pointer rounded-xl bg-primary px-5 py-2 text-xl font-semibold tracking-widest text-white hover:bg-slate-300 hover:text-black"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="my-10 grid h-fit gap-5 p-5">
            <h1 className="text-center text-3xl font-semibold">
              Donation Methods
            </h1>
            <div className="grid gap-1">
              <label htmlFor="" className="font-semibold">
                Cash
              </label>
              <Link to="" className="h-fit w-72">
                <input
                  type="number"
                  placeholder="$1000"
                  className="w-60 rounded-lg bg-gray-100 px-5 py-2 text-black placeholder:text-gray-600 placeholder:opacity-50 focus:border focus:outline-none sm:w-72 md:w-72 lg:w-[340px]"
                />
              </Link>
            </div>
            <div className="grid gap-1">
              <label htmlFor="" className="font-semibold">
                Credit Card
              </label>
              <Link to="" className="h-fit w-72">
                <img src={creditcard} alt="" />
              </Link>
            </div>
            <div className="grid gap-1">
              <label htmlFor="" className="font-semibold">
                Paypal
              </label>
              <Link to="" className="h-fit w-72">
                <img src={paypal} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;