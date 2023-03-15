import React from "react";
import { backgroundImage, LogoNoBack } from "../../assets/img";

const Footer = () => {
  return (
    <>
      <div className="bg-red relative">
        <div className="expand h-fit w-full bg-primary bg-opacity-50 py-10">
          <div className="mx-10 flex w-24 overflow-hidden">
            <img
              src={LogoNoBack}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-fit flex-wrap justify-evenly gap-14 px-14">
            <div className="w-content leading-10">
              <h1 className="mb-5 text-[2rem] font-semibold text-primary">
                Contact
              </h1>
              <p>
                <a href="#" className="hover:text-slate-100">
                  Chabahil, Kathmandu
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-slate-100">
                  foodshare@gmail.com
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-slate-100">
                  9863232221
                </a>
              </p>
            </div>
            <div className="w-content leading-10">
              <h1 className="mb-5 text-[2rem] font-semibold">
                Terms and Services
              </h1>
              <p>
                <a href="#" className="hover:text-slate-100">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-slate-100">
                  Terms and Conditions
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-slate-100">
                  FAQ's
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-slate-100">
                  Contat Us
                </a>
              </p>
            </div>
            <div className="w-content leading-10">
              <h1 className="mb-5 text-[2rem] font-semibold">Social Media</h1>
              <p>
                <a href="#" className="hover:text-slate-100">
                  Facebook
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-slate-100">
                  Instagram
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-slate-100">
                  Youtube
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-slate-100">
                  Twitter
                </a>
              </p>
            </div>
          </div>
          <div className="copyright grid place-items-center">
            <small className="m-auto mt-5">Copyright &copy; 2023</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
