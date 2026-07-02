const CoachIntroduction = ({ coach }) => {
  return (
    <section className="bg-white py-14 text-center translate-y-30 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center lg:translate-x-20  mb-12">
          <h2 className="text-red-600 font-oswald leading-10 text-2xl sm:text-3xl lg:text-4xl font-bold uppercase">
            Introduction
          </h2>

          <p className="mt-3 text-gray-500 font-raleway uppercase leading-10 tracking-[3px] text-sm">
            Read Biography Of A Coach
          </p>
        </div>

        {/* Introduction Content */}
        <div className="max-w-5xl lg:translate-x-40 mx-auto">
          <p className="text-center text-gray-600 font-raleway leading-10 lg:leading-9 text-sm sm:text-base lg:text-lg">
            {coach.introduction}
          </p>
        </div>

      </div>
    </section>
  );
};

export default CoachIntroduction;