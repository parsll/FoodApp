import { Link } from "react-router-dom";
import { backgroundImage } from "../assets/img";
import NavBar from "../Components/Header/NavBar";
import Founders from "./Founders";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="relative bg-slate-500">
        <div className="overflow-hidden">
          <img
            src={backgroundImage}
            alt=""
            className="relative top-0 left-0 h-[60vh] w-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 h-[60vh] w-full bg-black bg-opacity-50"></div>
        <div className="absolute top-0 left-0 grid h-[70vh] w-full place-items-center">
          <div className="container mt-20 grid place-items-center gap-5">
            <h1 className="text-center text-3xl text-white">
              Share a meal, share the love: Join hands with Food Share Nepal.
            </h1>
            <Link
              to="/donation"
              className="cursor-pointer rounded-xl bg-primary px-5 py-2 text-xl font-semibold tracking-widest text-white hover:bg-slate-300 hover:text-black"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
      <div className="container my-10 mx-auto px-5 text-justify">
        <p>
          Food Share Nepal is an internet based platform which connects people
          with excess food and groceries to the people in need in minimum cost.
          It promotes social and economic sustainability. Our team is working to
          reduce hunger rate, food wastage and food insecurity in the
          country.Our goal is to build stronger communities by fostering
          connections between people and organizations.
        </p>
      </div>

      <Founders />
    </>
  );
};
export default About;
