const CoachSkills = ({ coach }) => {
  return (
    <section className="bg-gray-50 py-14 translate-y-50 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-red-600 font-oswald leading-10 text-3xl md:text-4xl font-bold uppercase">
            Skills
          </h2>

          <p className="mt-3 text-gray-500 font-raleway leading-10 uppercase tracking-[3px] text-sm">
            Our Coach Expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side */}
          <div className="text-center">
            <h3 className="text-xl lg:text-3xl leading-10 font-oswald font-bold text-gray-900 mb-6">
              Professional Fitness Trainer
            </h3>

            <p className="text-gray-600 font-raleway font-bold leading-10 mb-6">
              {coach.introduction}
            </p>

            <p className="text-gray-600 leading-10 text-center">
              Our Beast Gym coaches help members improve strength,
              endurance and flexibility with customized workout plans,
              nutritional guidance and motivation.
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-6 lg:space-y-8">
            {coach.skills.map((skill, index) => (
              <div key={index}>

                <div className="flex justify-between leading-15 mb-2">
                  <span className="font-semibold uppercase text-gray-800">
                    {skill.title}
                  </span>

                  <span className="font-bold text-red-600">
                    {skill.value}%
                  </span>
                </div>

                <div className="w-full h-2 lg:h-3 bg-gray-200 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-red-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.value}%` }}
                  ></div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CoachSkills;