import aboutGirl from "../assets/Images/aboutGirl.png";

function About() {
  return (
    <section
      id="about"
      className="
      relative
      mt-24
      lg:mt-32
      mx-5
      leading-15
      md:mx-10
      lg:mx-16
      bg-white
      rounded-t-[40px]
      py-12
      md:py-16
      lg:py-20
      px-6
      md:px-10
      lg:px-16
      "
    >

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left Content */}
        <div>

          <h2
            className="
            text-red-600
            text-3xl
            md:text-4xl
            font-bold
            text-center
            lg:text-left
            lg:translate-x-20
            "
          >
            ABOUT US
          </h2>

          <p
            className="
            uppercase
            text-gray-500
            mt-4
            text-center
            lg:text-left
            lg:translate-x-20
            "
          >
            Know more to be more with us
          </p>

          <p
            className="
            text-gray-500
            mt-8
            leading-8
            text-center
            lg:text-left
            lg:translate-x-20
            "
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ipsam perspiciatis, minima incidunt laborum laudantium illo, nesciunt totam soluta quidem culpa tenetur consectetur saepe enim, rem numquam vero. Illo, illum voluptas necessitatibus commodi odit quia optio aperiam ipsa. Atque nesciunt esse totam? Culpa, dolore fugiat praesentium vel, iure, reiciendis minus quod repellat delectus odit expedita reprehenderit deleniti cum ut labore laborum nulla illum rerum corrupti placeat molestias recusandae! Reprehenderit, fugiat magni blanditiis maiores deleniti architecto aliquid iusto quos quae error, repellat sapiente, illo laudantium mollitia eaque quaerat aspernatur perspiciatis incidunt illum beatae. Natus maxime saepe voluptatibus, incidunt at aut alias?
          </p>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <img
            src={aboutGirl}
            alt="About"
            className="
            w-full
            max-w-[300px]
            md:max-w-[420px]
            lg:max-w-[500px]
            lg:translate-y-20
            object-contain
            "
          />

        </div>

      </div>

    </section>
  );
}

export default About;
