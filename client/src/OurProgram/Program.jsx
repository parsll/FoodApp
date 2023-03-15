import { backgroundImage, food } from "../assets/img";
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
                    src={backgroundImage}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                      CATEGORY
                    </h2>
                    <h1 class="title-font mb-3 text-lg font-medium text-gray-900">
                      The Catalyzer
                    </h1>
                    <p class="mb-3 leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
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
                      CATEGORY
                    </h2>
                    <h1 class="title-font mb-3 text-lg font-medium text-gray-900">
                      The 400 Blows
                    </h1>
                    <p class="mb-3 leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
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
                    src={backgroundImage}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                      CATEGORY
                    </h2>
                    <h1 class="title-font mb-3 text-lg font-medium text-gray-900">
                      Shooting Stars
                    </h1>
                    <p class="mb-3 leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
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
