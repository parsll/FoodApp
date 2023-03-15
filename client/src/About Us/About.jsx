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
              Slogan gone wrong
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed
          provident modi, quas sunt quae consequuntur quisquam eaque saepe non
          quo laboriosam vitae atque voluptatem aut culpa asperiores! Commodi
          adipisci fugiat quam error quas voluptatum ex sapiente
        </p>
        <p className="pt-10 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          repudiandae omnis ipsa unde blanditiis sapiente asperiores. Earum
        </p>
      </div>

      <Founders />
    </>
  );
};
export default About;
