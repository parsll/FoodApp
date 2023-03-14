import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ResuableComponents/Button";
import InputField from "../../ResuableComponents/InputField";
import Header from "../Header/Header";

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="px-10">
        <div className="m-auto flex-row justify-center">
          <h1 className=" text-center text-[40px]">Hello</h1>
          <p className="text-center">want to join us</p>
        </div>

        <div className="flex items-center justify-center">
          <form
            className="4xl:max-w-4xls max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            method="POST"
          >
            <div className="my-2 flex justify-center gap-4">
              <InputField
                type="text"
                placeholder="first name"
                name="firstName"
                id="fname"
                customStyle={{ width: "calc(50% - 1.25rem)" }}
                title="First Name"
              />
              <InputField
                type="text"
                placeholder="last name"
                name="lastName"
                id="lname"
                required
                className="  mx-auto mb-2 mr-5 h-10 w-36 rounded-lg border-2 border-green-50 bg-gray-200 text-center"
                title="Last Name"
                customStyle={{ width: "50%" }}
              />
            </div>
            <div>
              <div className="flex flex-col gap-2 pb-6">
                <InputField
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  id="email"
                  required
                  className="  mx-auto mb-2 mr-5 h-10 w-80 rounded-lg border-2 border-green-50  bg-gray-200"
                  title="Email"
                />
                <InputField
                  type="password"
                  placeholder="*******"
                  name="newPassword"
                  id="password"
                  required
                  className="mx-auto mb-2 mr-5 h-10 w-80 rounded-lg border-2 border-green-50  bg-gray-200"
                  title="Password"
                />
                <InputField
                  type="password"
                  placeholder="*******"
                  name="confirmPassword"
                  id="rpassword"
                  required
                  className="mx-auto mb-3 mr-5 h-10 w-80 rounded-lg border-2 border-green-50 bg-gray-200"
                  title="Re-enter Password"
                />
              </div>
              <Button text={"Create Account"} />
              <div className="my-3 flex justify-start">
                <p>
                  Already have an account? &nbsp;
                  <Link
                    to="/login"
                    className="cursor-pointer font-semibold text-primary hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
