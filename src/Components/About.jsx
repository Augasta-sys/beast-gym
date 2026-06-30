import aboutGirl from "../assets/Images/aboutGirl.png";


export default function About() {
  return (
    <section className="bg-white mt-12 px-8 pt-32 pb-24">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-y-10 gap-16 items-center">

        <div className="flex flex-col justify-center h-full pl-10">
            <h3 className="text-red-600 uppercase indent-20 font-bold text-3xl mb-3">ABOUT US</h3>
            <p className="uppercase text-gray-600  indent-20 text-sm mb-8 leading-12 tracking-wide pr-8">Know more to be more with us</p>
            <p className="text-gray-500 place-items-center-safe leading-8 w-[90%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, consequatur? Est dicta ullam laborum, pariatur itaque quo dolor vitae. Suscipit cupiditate, iure eos architecto commodi animi perferendis reiciendis consequuntur tempora. Similique eveniet aperiam reiciendis, itaque exercitationem minus aliquid culpa. Quos mollitia officiis similique, facilis nobis magnam error? Non architecto aliquam ipsam! Dolor consequatur veritatis repellendus deserunt quidem laudantium maxime voluptatem distinctio quam quas recusandae dolorum optio, reiciendis quo, quaerat soluta minima odit culpa atque adipisci debitis dolorem a nulla? Et.</p>
        </div>

        <div className="flex justify-center items-center pt-10">
        <img src={aboutGirl} alt="about" className="w-[520px]" />      
    </div>
    </div>
      </section>
  );
}
