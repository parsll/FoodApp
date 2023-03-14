import { backgroundImage } from "../assets/img";
import Founders from "./Founders";

const About = () => {
  return (
    <>
      <div className="relative ">
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
            <button className="cursor-pointer rounded-xl bg-primary px-5 py-2 text-xl font-semibold tracking-widest text-white hover:bg-slate-300 hover:text-black">
              Donate
            </button>
          </div>
        </div>
      </div>
      <div className="px-[15rem] mt-20">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed provident modi, quas sunt quae consequuntur quisquam eaque saepe non quo laboriosam vitae atque voluptatem aut culpa asperiores! Commodi adipisci fugiat quam error quas voluptatum ex sapiente molestias, soluta, a ad architecto fuga magni voluptatibus distinctio nesciunt dolorum numquam aliquam quia consectetur quis? Maiores aliquam laboriosam fuga placeat excepturi molestiae, animi at blanditiis corrupti, fugit totam eum explicabo voluptatibus atque illo, ducimus officiis autem? Cumque est itaque aliquid suscipit magni et exercitationem ab tempora blanditiis! Dolore doloremque quo nesciunt porro numquam! Soluta sint repellat doloribus dolor a reprehenderit voluptates molestiae?
        </p>
        <p className="pt-10 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repudiandae omnis ipsa unde blanditiis sapiente asperiores. Earum eligendi fuga hic laborum iusto eum veniam doloribus at perspiciatis modi quaerat velit nam similique, maxime aspernatur repudiandae sint et aut expedita quod enim distinctio dolorum! Repudiandae provident distinctio consectetur adipisci nobis ratione inventore incidunt, reiciendis rem harum asperiores at quas cupiditate dolores nesciunt atque ea explicabo hic consequatur voluptates et voluptatibus odit in! Alias error ut asperiores totam quaerat incidunt. Pariatur error iure quae esse unde aliquid quos molestias ad numquam nemo dolore deserunt, provident ipsam? Odit praesentium sequi maxime ipsa quibusdam.</p>
      </div>
      
      <Founders />
    </>
  );
}
export default About;