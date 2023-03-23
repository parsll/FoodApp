import { food, profile, profile1 } from "../assets/img";
import Footer from "../Components/Footer/Footer";

const Founders = () => {
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-14">
          <h1 className="text-center text-3xl font-semibold">Founders</h1>
          <div className="flex flex-wrap gap-3">
            <div className="mx-auto flex flex-wrap gap-4">
              <div className="mx-auto w-[17rem] rounded-xl bg-[#f5f5f5] p-4 md:w-[20rem]">
                <div className="mx-auto h-[13rem] w-[13rem] overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full rounded-lg object-cover object-center"
                    src={profile1}
                    alt="blog"
                  />
                </div>
                <div className="">
                  <div className="">
                    <h1 className="title-font text-center text-lg font-medium text-gray-900 ">
                      Shibaa Adhikari
                    </h1>
                    <h2 className="title-font mb-1 px-3 text-center text-xs font-medium tracking-widest text-gray-600">
                      Developer
                    </h2>
                  </div>
                  <p className="mb-3 text-justify leading-relaxed">
                    Premium developer with 5 years of experience.
                  </p>
                </div>
              </div>
              <div className="mx-auto w-[17rem] rounded-xl bg-[#f5f5f5] p-4 md:w-[20rem]">
                <div className="mx-auto h-[13rem] w-[13rem] overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full rounded-lg object-cover object-center"
                    src={profile}
                    alt="blog"
                  />
                </div>
                <div className="">
                  <div className="">
                    <h1 className="title-font text-center text-lg font-medium text-gray-900 ">
                      Ajju Maharjan
                    </h1>
                    <h2 className="title-font mb-1 px-3 text-center text-xs font-medium tracking-widest text-gray-600">
                      Designer
                    </h2>
                  </div>
                  <p className="mb-3 text-justify leading-relaxed">
                    Designer since 5years.
                  </p>
                </div>
              </div>
              <div className="mx-auto w-[17rem] rounded-xl bg-[#f5f5f5] p-4 md:w-[20rem]">
                <div className="mx-auto h-[13rem] w-[13rem] overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full rounded-lg object-cover object-center"
                    src={profile1}
                    alt="blog"
                  />
                </div>
                <div className="">
                  <div className="">
                    <h1 className="title-font text-center text-lg font-medium text-gray-900 ">
                      Surya Narayan Chaudhary
                    </h1>
                    <h2 className="title-font mb-1 px-3 text-center text-xs font-medium tracking-widest text-gray-600">
                      Developer
                    </h2>
                  </div>
                  <p className="mb-3 text-justify leading-relaxed">
                    Developer of the year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto flex flex-col items-center px-5 py-14 md:flex-row">
          <div class="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 class="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
              Why it works ?
            </h1>
            <p class="mb-8 text-justify leading-relaxed">
              Food Share Nepal is an internet based platform which connects
              people with excess food and groceries to the people in need in
              minimum cost. It promotes social and economic sustainability. Our
              team is working to reduce hunger rate, food wastage and food
              insecurity in the country.Our goal is to build stronger
              communities by fostering connections between people and
              organizations.
            </p>
            <div class="flex w-full items-end justify-center md:justify-start"></div>
          </div>
          <div class="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              class="rounded object-cover object-center"
              alt="hero"
              src={food}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Founders;
