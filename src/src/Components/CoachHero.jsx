import Navbar from "./Navbar";
import coachBg from "../assets/Images/coachBg.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const CoachHero = ({ coach }) => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${coachBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-20">
        {/* Navbar */}
        <div className="bg-white lg:bg-transparent shadow-md lg:shadow-none">
          <Navbar />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 lg:pt-24 lg:pb-24">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

            {/* Left Image */}
            <div className="flex justify-center items-center">
              <div className="border-4 border-red-600 mt-8 translate-y-20 lg:mt-28">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-[280px] sm:w-[380px] lg:w-[450px] object-cover"
                />
              </div>
            </div>

            {/* Right Details */}
            <div className="w-full max-w-md font-oswald lg:translate-y-20 text-white text-center translate-y-10 lg:text-left mt-10 lg:mt-20">

              <h1 className="text-3xl lg:text-4xl font-oswald lg:leading-10 font-bold uppercase">
                {coach.name}
              </h1>

              <p className="text-red-600 uppercase font-oswald lg:leading-10 font-semibold tracking-wider mt-4">
                {coach.role}
              </p>

              {/* Details */}
              <div className="mt-8 font-oswald lg:leading-10 space-y-4">

                <div className="flex justify-center lg:justify-start gap-3">
                  <span className="w-28 text-gray-400 uppercase">Age :</span>
                  <span>{coach.age}</span>
                </div>

                <div className="flex justify-center lg:justify-start gap-3">
                  <span className="w-28 text-gray-400 uppercase">
                    Experience :
                  </span>
                  <span>{coach.experience}</span>
                </div>

                <div className="flex justify-center lg:justify-start gap-3">
                  <span className="w-28 text-gray-400 uppercase">
                    Phone :
                  </span>
                  <span>{coach.phone}</span>
                </div>

                <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
                  <span className="w-28 text-gray-400 uppercase">
                    Email :
                  </span>

                  <span className="break-all">
                    {coach.email}
                  </span>
                </div>

              </div>

              {/* Social Icons */}
              <div className="flex justify-center lg:translate-y-10 lg:justify-start gap-4 mt-8">

                <div className="w-10 h-10 bg-white text-black rounded flex items-center justify-center hover:bg-red-600 hover:text-white duration-300 cursor-pointer">
                  <FaFacebookF size={14} />
                </div>

                <div className="w-10 h-10 bg-white text-black rounded flex items-center justify-center hover:bg-red-600 hover:text-white duration-300 cursor-pointer">
                  <FaTwitter size={14} />
                </div>

                <div className="w-10 h-10 bg-white text-black rounded flex items-center justify-center hover:bg-red-600 hover:text-white duration-300 cursor-pointer">
                  <FaInstagram size={14} />
                </div>

                <div className="w-10 h-10 bg-white text-black rounded flex items-center justify-center hover:bg-red-600 hover:text-white duration-300 cursor-pointer">
                  <FaLinkedinIn size={14} />
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachHero;
