import logo1 from "../assets/Images/logo1.png";
import logo2 from "../assets/Images/logo2.png";
import logo3 from "../assets/Images/logo3.png";

const CoachLogos = () => {
  return (
    <section className="bg-white py-10 flex justify-center items-center translate-y-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <img
            src={logo1}
            alt="Logo 1"
            className="h-14 sm:h-16 lg:h-20 object-contain"
          />

          <img
            src={logo2}
            alt="Logo 2"
            className="h-14 sm:h-16 lg:h-20 translate-x-20 lg:translate-x-30 object-contain"
          />

          <img
            src={logo3}
            alt="Logo 3"
            className="h-14 sm:h-16 lg:h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CoachLogos;