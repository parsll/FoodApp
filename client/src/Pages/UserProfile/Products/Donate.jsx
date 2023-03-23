import moment from "moment";
import React from "react";
import { toast } from "react-toastify";
import { doPost } from "../../../Services/Axios";
import { useForm } from "../../../Services/useForm";

const Donate = () => {
  const initialState = {
    amount: "",
    donor_name: "",

    company_name: "",

    address: "",
    email: "",
    expiry: "",
    description: "",
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
  console.log("====================================");
  console.log(errors);
  console.log("====================================");
  return (
    <>
      <section class="body-font text-gray-600">
        <div class="container mx-auto flex flex-wrap items-center px-5 py-10">
          <div class="pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
            <h1 class="title-font text-3xl font-medium text-gray-900">
              About Donation
            </h1>
            <p class="mt-4 leading-relaxed">
              One great thing you can do is to assist some of the impoverished
              individuals who lack necessary groceries or food by offering them
              help. Additionally, you could also receive compensation for your
              efforts.
            </p>
          </div>
          <div class="mt-10 flex w-full flex-col rounded-lg bg-gray-100 p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6">
            <h2 class="title-font mb-5 text-lg font-medium text-gray-900">
              Donate
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="text-sm leading-7 text-gray-600">
                Individual/Organization
              </label>
              <input
                type="text"
                placeholder="Name of your organization"
                name="donor_name"
                onChange={handleChange}
                class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="text-sm leading-7 text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="eg: example@gmail.com"
                onChange={handleChange}
                class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.email && errors.email}
            </div>
            <div class="relative mb-4">
              <label for="email" class="text-sm leading-7 text-gray-600">
                Address
              </label>
              <input
                type="text"
                placeholder="eg: chabahil, Kathmandu"
                name="address"
                onChange={handleChange}
                class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="text-sm leading-7 text-gray-600">
                Price
              </label>
              <input
                type="text"
                placeholder="eg: NRs.1000"
                name="amount"
                onChange={handleChange}
                class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.amount && errors.amount}
            </div>
            <div class="relative mb-4">
              <label for="email" class="text-sm leading-7 text-gray-600">
                Expiry Date
              </label>
              <input
                type="date"
                name="expiry"
                onChange={handleChange}
                class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.expiry && errors.expiry}
            </div>
            <div class="relative mb-4">
              <label for="email" class="text-sm leading-7 text-gray-600">
                Product Description
              </label>
              <textarea
                placeholder="eg: I am going to donate this food without any cost or price..."
                name="description"
                onChange={handleChange}
                class="w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <button
              class="rounded border-0 bg-primary py-2 px-8 text-lg text-white hover:bg-opacity-70 focus:outline-none"
              onClick={handleSubmit}
            >
              Donate
            </button>
            <p class="mt-3 text-xs text-gray-500">
              Your assistance and coordination are greatly appreciated.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
