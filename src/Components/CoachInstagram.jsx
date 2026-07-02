import instaBg from "../assets/Images/instaBg.png";

import insta1 from "../assets/Images/insta1.png";
import insta2 from "../assets/Images/insta2.png";
import insta3 from "../assets/Images/insta3.png";
import insta4 from "../assets/Images/insta4.png";
import insta5 from "../assets/Images/insta5.png";
import insta6 from "../assets/Images/insta6.png";
import insta7 from "../assets/Images/insta7.png";
import insta8 from "../assets/Images/insta8.png";

import { FaInstagram } from "react-icons/fa";

const CoachInstagram = () => {
  const images = [
    insta1,
    insta2,
    insta3,
    insta4,
    insta5,
    insta6,
    insta7,
    insta8,
  ];

  return (
    <section
  className="relative min-h-screen bg-cover bg-center bg-no-repeat translate-y-70 flex items-center"
  style={{ backgroundImage: `url(${instaBg})` }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center translate-x-35 mb-10 lg:mb-14">

          <h2 className="text-red-600 leading-10 font-oswald text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
            Instagram
          </h2>

          <p className="text-white leading-15 font-raleway uppercase tracking-[2px] md:tracking-[4px] mt-3 text-xs sm:text-sm lg:text-base">
            Follow Beast Gym On Instagram
          </p>

        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 translate-x-30 lg:grid-cols-4 gap-10">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg group"
            >
              <img
                src={img}
                alt={`Instagram ${index + 1}`}
                className="w-full h-[100%] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center translate-x-30 mt-10 lg:mt-14">

          <button className="bg-red-600 font-oswald text-3xl hover:bg-red-700 transition-all duration-300 px-6 sm:px-8 py-3 rounded-md text-white uppercase font-semibold flex items-center gap-3">
            <FaInstagram className="text-lg" />
            Follow Us
          </button>

        </div>

      </div>
    </section>
  );
};

export default CoachInstagram;