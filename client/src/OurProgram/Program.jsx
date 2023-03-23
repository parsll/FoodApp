import {
  backgroundImage,
  backgroundImage10,
  backgroundImage5,
  food,
} from "../assets/img";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Header/NavBar";

const Program = () => {
  return (
    <>
      <NavBar />
      <div className="container my-5 mx-auto">
        <section class="body-font text-gray-600">
          <div class="container mx-auto my-10 px-5">
            <div class="-m-4 flex flex-wrap">
              <div class="h-fit p-4 md:w-1/3">
                <h1 className="my-3 text-center text-3xl">How we help ??</h1>
                <div class="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                  <img
                    class="w-full object-cover object-center md:h-36 lg:h-48"
                    src={backgroundImage5}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                      Kathmandu
                    </h2>
                    <h1 class="title-font mb-3 text-lg font-medium text-gray-900">
                      Food Drive
                    </h1>
                    <p class="mb-3 leading-relaxed">
                      This campaign aims to collect food donations from
                      individuals and businesses to support Food Share Nepal's
                      efforts. It could involve setting up collection boxes at
                      local grocery stores or organizing a food drive at a
                      school or workplace. The campaign could also feature
                      social media posts and emails with
                    </p>
                  </div>
                </div>
              </div>
              <div class="h-fit p-4 md:w-1/3">
                <h1 className="my-3 text-center text-3xl">Where we serve ??</h1>
                <div class="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                  <img
                    class="w-full object-cover object-center md:h-36 lg:h-48"
                    src={backgroundImage}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                      Pokhara
                    </h2>
                    <h1 class="title-font mb-3 text-lg font-medium text-gray-900">
                      Meal Sponsorship
                    </h1>
                    <p class="mb-3 leading-relaxed">
                      This campaign aims to engage businesses and individuals to
                      sponsor meals for people in need. It could involve
                      creating a partnership program where businesses can
                      sponsor a certain number of meals each month, or
                      individuals can make a one-time donation to sponsor a meal
                      for a family. The campaign could highlight the impact of
                      meal sponsorship, such as how it helps Food Share Nepal
                      provide consistent meals to those in need.
                    </p>
                  </div>
                </div>
              </div>
              <div class="h-fit p-4 md:w-1/3">
                <h1 className="my-3 text-center text-3xl">
                  Problem We Solve !!
                </h1>
                <div class="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                  <img
                    class="w-full object-cover object-center md:h-36 lg:h-48"
                    src={backgroundImage10}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                      Kathmandu
                    </h2>
                    <h1 class="title-font mb-3 text-lg font-medium text-gray-900">
                      Donate to feed a family
                    </h1>
                    <p class="mb-3 leading-relaxed">
                      This campaign aims to raise awareness and funds for Food
                      Share Nepal's efforts to provide meals to families in
                      need. It could involve social media posts and emails
                      encouraging people to make a donation of a certain amount,
                      such as $10, which can provide a meal for a family. The
                      campaign can highlight the impact of a small donation,
                      such as how just $50 can feed a family of five for a week.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="body-font text-gray-600">
          <div class="container mx-auto flex flex-col items-center md:flex-row">
            <div class="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
              <h1 className="pb-5 text-3xl font-semibold tracking-[.1em]">
                Hami le Gareko Camping
              </h1>
              <img
                class="rounded object-cover object-center"
                alt="hero"
                src={food}
              />
            </div>
            <div class="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
              <p class="leading-relaxed ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                voluptate accusantium voluptatum veritatis delectus repudiandae
                aperiam vero nemo vel doloribus sapiente esse, laborum numquam
                quia quisquam. Veritatis optio officiis deserunt, aliquam veniam
                sit minima aperiam dolore voluptate modi tempora, magni quae
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Program;
