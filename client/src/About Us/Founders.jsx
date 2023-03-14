import { food, profile, profile1 } from "../assets/img";
import Footer from "../Components/Footer/Footer";

const Founders = () => {
    return (
<>
<section className="text-gray-600 body-font px-24 ">
  <div className="container px-5 py-14 mx-auto">
    <h1 className="text-3xl font-semibold px-14">Founders</h1>
    <div className="flex flex-wrap py-5">
    <div className="p-4 md:w-1/3 ">
        <div className="">
          <img className="lg:h-48 md:h-36 w-[13rem] object-cover object-center ml-16 rounded" src={profile1} alt="blog"/>
          <div className="p-5 px-14 ">
            <div className="px-14">
            <h1 className="title-font text-lg font-medium text-gray-900 ">Korean Me</h1>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1 px-3">Designer</h2>
            </div>
            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Blanditiis numquam iusto aspernatur fuga.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3 ">
        <div className="">
          <img className="lg:h-48 md:h-36 w-[13rem] object-cover object-center ml-16 rounded" src={profile1} alt="blog"/>
          <div className="p-5 px-14 ">
            <div className="px-14">
            <h1 className="title-font text-lg font-medium text-gray-900 ">Me Korean</h1>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1 px-3">Designer</h2>
            </div>
            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Blanditiis numquam iusto aspernatur fuga.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3 ">
        <div className="">
          <img className="lg:h-48 md:h-36 w-[13rem] object-cover object-center ml-16 rounded" src={profile} alt="blog"/>
          <div className="p-5 px-14 ">
            <div className="px-14">
            <h1 className="title-font text-lg font-medium text-gray-900 ">Isabel</h1>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1 px-3">Designer</h2>
            </div>
            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Blanditiis numquam iusto aspernatur fuga.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Why it works ?</h1>
      <p class="mb-8 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quos voluptatum error nesciunt quis dolore, debitis cum placeat dignissimos molestiae expedita. Placeat sint in alias distinctio sunt, qui dolorem corrupti doloribus quis ullam delectus iusto quibusdam perferendis, iste, asperiores at sed nemo aliquid eos incidunt! Aspernatur rerum harum cum deleniti minus, ad quis asperiores dolores voluptatibus, eligendi similique neque sint inventore veniam quia? Velit, magni voluptas corrupti quaerat dicta sequi dolores mollitia officia nulla accusantium dolore ex aperiam itaque quo ipsa pariatur facilis consequatur laudantium tenetur qui ipsum sed temporibus est? Quaerat repudiandae excepturi modi aliquam culpa explicabo vitae quia! dicta sequi dolores mollitia officia nulla accusantium dolore ex aperiam itaque quo ipsa pariatur facilis consequatur laudantium tenetur qui ipsum sed temporibus est? Quaerat repudiandae excepturi modi aliquam culpa explicabo vitae quia!
      dicta sequi dolores mollitia officia nulla accusantium dolore ex aperiam itaque quo ipsa pariatur facilis consequatur laudantium tenetur qui ipsum sed temporibus est? Quaerat repudiandae excepturi modi aliquam culpa explicabo vitae quia!</p>
      <div class="flex w-full md:justify-start justify-center items-end">
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={food}/>
    </div>
  </div>
</section>
  <Footer/>
</>
    );
}
export default Founders ;