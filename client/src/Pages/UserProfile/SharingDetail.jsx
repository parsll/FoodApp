import React from "react";
import { Link, useLocation } from "react-router-dom";

const SharingDetail = () => {
  const router = useLocation();
  return (
    <>
      <div className="flex justify-around">
        <Link to="/profile/events">
          <h1
            className={`w-36 border-red-300/50 border-primary bg-transparent px-1 py-2 text-center text-2xl hover:bg-[#e2e1e1]  ${
              router.pathname === "/profile/events"
                ? "border-b-2 bg-[#e2e1e1]"
                : ""
            }`}
          >
            Events
          </h1>
        </Link>
        <Link to="/profile/sells">
          <h1
            className={`w-36 border-red-300/50 border-primary bg-transparent px-1 py-2 text-center text-2xl hover:bg-[#e2e1e1]  ${
              router.pathname === "/profile/sells"
                ? "border-b-2 bg-[#e2e1e1]"
                : ""
            }`}
          >
            Sells
          </h1>
        </Link>
      </div>
    </>
  );
};

export default SharingDetail;
