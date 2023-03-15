import React from "react";
import { Link } from "react-router-dom";

const Switch = () => {
  return (
    <>
      <div className="container mx-auto my-10 flex flex-wrap justify-end gap-5">
        <div className="flex">
          <Link
            to="/request"
            className="m-auto w-fit rounded-md bg-primary py-2 px-14 text-white hover:bg-opacity-70"
          >
            Request
          </Link>
        </div>
        <div className="flex">
          <Link
            to="/donate"
            className="m-auto w-fit rounded-md border bg-white py-2 px-14 text-primary hover:bg-primary hover:bg-opacity-90 hover:text-white"
          >
            Donate
          </Link>
        </div>
      </div>
    </>
  );
};

export default Switch;
