import React from "react";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { creditcard, paypal } from "../../assets/img";
import Header from "../../Components/Header/Header";
import { doPost } from "../../Services/Axios";
import { useForm } from "../../Services/useForm";

const Donation = () => {
  const initialState = {
    amount: "",
    donor_name: "",
    donor_note: "",
    company_name: "",
    contact_number: "",
    address: "",
    email: "",
  };
  const { errors, handleChange, states, validate } = useForm(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(errors, validate());
      if (validate()) {
        const resp = await doPost("/donate", {
          ...states,
        });
        console.log(resp);
      } else {
        return toast.error("Please Fill all fields");
      }
      return toast.success("Donation successful");
    } catch (error) {
      console.log(error);
      toast.error("Error while donating");
    }
  };

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
                  onChange={handleChange}
                  name="donor_name"
                  className={` w-60 rounded-lg bg-gray-100 px-5 py-2 text-black placeholder:text-gray-600 placeholder:opacity-50 focus:border focus:outline-none sm:w-72 md:w-72 lg:w-[340px] ${
                    errors.donor_name && "border-red-400"
                  }`}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="" className="font-semibold">
                  Donor Note
                </label>
                <textarea
                  type="text"
                  placeholder="Some words..."
                  name="donor_note"
                  onChange={handleChange}
                  className="w-60 resize-none rounded-lg bg-gray-100 px-5 py-2 text-black placeholder:text-gray-600 placeholder:opacity-50 focus:border focus:outline-none sm:w-72 md:w-72 lg:w-[340px]"
                ></textarea>
              </div>
              <div className="grid gap-2">
                <label htmlFor="" className="font-semibold">
                  Company Name
                </label>
                <textarea
                  name="company_name"
                  type="text"
                  placeholder="Name of your organization (optional)"
                  onChange={handleChange}
                  className="w-60 resize-none rounded-lg bg-gray-100 px-5 py-2 text-black placeholder:text-gray-600 placeholder:opacity-50 focus:border focus:outline-none sm:w-72 md:w-72 lg:w-[340px]"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="" className="font-semibold">
                  Contact
                </label>
                <input
                  type="text"
                  placeholder="Email ..."
                  name="email"
                  onChange={handleChange}
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
                  name="address"
                  onChange={handleChange}
                  className="w-60 resize-none rounded-lg bg-gray-100 px-5 py-2 text-black placeholder:text-gray-600 placeholder:opacity-50 focus:border focus:outline-none sm:w-72 md:w-72 lg:w-[340px]"
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
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
              <Link to="" className="w-72 h-fit">
                <input
                  name="amount"
                  type="number"
                  placeholder="$1000"
                  onChange={handleChange}
                  className="w-60 rounded-lg bg-gray-100 px-5 py-2 text-black placeholder:text-gray-600 placeholder:opacity-50 focus:border focus:outline-none sm:w-72 md:w-72 lg:w-[340px]"
                />
              </Link>
            </div>
            <div className="grid gap-1">
              <label htmlFor="" className="font-semibold">
                Credit Card
              </label>
              <Link to="" className="w-72 h-fit">
                <img src={creditcard} alt="" />
              </Link>
            </div>
            <div className="grid gap-1">
              <label htmlFor="" className="font-semibold">
                Paypal
              </label>
              <Link to="" className="w-72 h-fit">
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
