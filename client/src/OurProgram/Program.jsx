import { food } from "../assets/img";
import Footer from "../Components/Footer/Footer";
<<<<<<< HEAD
import NavBar from "../Components/Header/NavBar";

const Program = () => {
  return (
    <>
      <NavBar />
      <section class=" body-font px-10">
        <div class="container mx-auto px-5 py-14">
          <div class="-m-4 flex flex-wrap">
            <div class="p-4 md:w-1/3">
              <h1 className="px-5 py-5 text-3xl font-semibold tracking-[.14em]">
                How we help ?
              </h1>
              <div class="w-[25rem] overflow-hidden rounded-lg border-2 border-gray-400 border-opacity-60">
                <img
                  class="w-full object-cover object-center md:h-36 lg:h-48"
                  src={food}
                  alt="blog"
                />
                <div class="p-6">
                  <p class="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex flex-wrap items-center ">
                    <a class="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                      <svg
                        class="mr-1 h-4 w-4"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="inline-flex items-center text-sm leading-none text-gray-400">
                      <svg
                        class="mr-1 h-4 w-4"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <h1 className="px-5 py-5 text-3xl font-semibold tracking-[.14em]">
                Problem we solve
              </h1>
              <div class="w-[25rem] overflow-hidden rounded-lg border-2 border-gray-400 border-opacity-60">
                <img
                  class="w-full object-cover object-center md:h-36 lg:h-48"
                  src={food}
                  alt="blog"
                />
                <div class="p-6">
                  <p class="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex flex-wrap items-center ">
                    <a class="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                      <svg
                        class="mr-1 h-4 w-4"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="inline-flex items-center text-sm leading-none text-gray-400">
                      <svg
                        class="mr-1 h-4 w-4"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3">
              <h1 className="px-5 py-5 text-3xl font-semibold tracking-[.14em]">
                Where we serve.
              </h1>
              <div class="w-[25rem] overflow-hidden rounded-lg border-2 border-gray-400 border-opacity-60">
                <img
                  class="w-full object-cover object-center md:h-36 lg:h-48"
                  src={food}
                  alt="blog"
                />
                <div class="p-6">
                  <p class="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex flex-wrap items-center ">
                    <a class="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                      <svg
                        class="mr-1 h-4 w-4"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="inline-flex items-center text-sm leading-none text-gray-400">
                      <svg
                        class="mr-1 h-4 w-4"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <section class="body-font px-10 text-gray-600">
              <div class="container mx-auto flex flex-col items-center px-5 py-16 md:flex-row">
                <div class="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
                  <h1 className="py-5 pb-5 text-3xl font-semibold tracking-[.1em]">
                    Hami le Gareko Camping
                  </h1>
                  <img
                    class="rounded object-cover object-center"
                    alt="hero"
                    src={food}
                  />
                </div>
                <div class="mr-16 mt-10 flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
                  <p class="leading-relaxed ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Libero voluptate accusantium voluptatum veritatis delectus
                    repudiandae aperiam vero nemo vel doloribus sapiente esse,
                    laborum numquam quia quisquam. Veritatis optio officiis
                    deserunt, aliquam veniam sit minima aperiam dolore voluptate
                    modi tempora, magni quae perspiciatis reprehenderit eius
                    possimus sapiente minus incidunt. Est et molestiae incidunt
                    autem vitae reiciendis a corrupti sed ipsum accusantium.
                    Perspiciatis non, natus voluptates, consequatur tenetur
                    minima repellendus magnam dolorem animi ex temporibus culpa.
                    Cupiditate facilis molestiae repellendus itaque ipsa
                    voluptatibus in autem commodi est expedita modi impedit
                    voluptatem placeat nostrum, ducimus porro cum ullam,
                    quibusdam ut eligendi dolorem temporibus.
                  </p>
                  <div class="flex justify-center"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Program;
=======

const Program = () =>{
    return (
<>
<section class=" body-font px-10">
  <div class="container px-5 py-14 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <h1 className="px-5 font-semibold text-3xl py-5 tracking-[.14em]">How we help ?</h1>
        <div class="w-[25rem] border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={food} alt="blog"/>
          <div class="p-6">
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <h1 className="px-5 font-semibold text-3xl py-5 tracking-[.14em]">Problem we solve</h1>
        <div class="w-[25rem] border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={food} alt="blog"/>
          <div class="p-6">
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="p-4 md:w-1/3">
        <h1 className="px-5 font-semibold text-3xl py-5 tracking-[.14em]">Where we serve.</h1>
        <div class="w-[25rem] border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={food} alt="blog"/>
          <div class="p-6">
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>

<section class="text-gray-600 body-font px-10">
  <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <h1 className="pb-5 font-semibold text-3xl py-5 tracking-[.1em]">Hami le Gareko Camping</h1>
      <img class="object-cover object-center rounded" alt="hero" src={food}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mr-16 mt-10">
      <p class="leading-relaxed ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptate accusantium voluptatum veritatis delectus repudiandae aperiam vero nemo vel doloribus sapiente esse, laborum numquam quia quisquam. Veritatis optio officiis deserunt, aliquam veniam sit minima aperiam dolore voluptate modi tempora, magni quae perspiciatis reprehenderit eius possimus sapiente minus incidunt. Est et molestiae incidunt autem vitae reiciendis a corrupti sed ipsum accusantium. Perspiciatis non, natus voluptates, consequatur tenetur minima repellendus magnam dolorem animi ex temporibus culpa. Cupiditate facilis molestiae repellendus itaque ipsa voluptatibus in autem commodi est expedita modi impedit voluptatem placeat nostrum, ducimus porro cum ullam, quibusdam ut eligendi dolorem temporibus.</p>
      <div class="flex justify-center">
    </div>
    </div>
  </div>
</section>
    </div>
  </div>
</section>
<Footer/>
</>
    );
}
export default Program;
>>>>>>> 92030e8f29913364a8be562bf301caf32d984271
