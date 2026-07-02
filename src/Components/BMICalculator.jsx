import { useState } from "react";
import bmiBg from "../assets/Images/bmiBg.png";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter height and weight");
      return;
    }

    const heightMeter = height / 100;

    const bmiValue = (
      weight /
      (heightMeter * heightMeter)
    ).toFixed(1);

    setBmi(bmiValue);
  };

  return (
    <section
      id="bmi"
      className="
      relative
      w-full
      min-h-screen
      py-16
      px-5
      translate-y-30
      lg:translate-y-60
      md:px-10
      bg-[#f2f2f2]
      "
    >

      {/* Background image only for large screen */}

      <div
        className="
        hidden
        lg:block
        absolute
        inset-0
        bg-cover
        bg-center
        "
        style={{
          backgroundImage: `url(${bmiBg})`,
        }}
      ></div>

      {/* Main content */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        min-h-screen
        flex
        justify-center
        lg:justify-end
        items-center
        "
      >

        {/* Calculator Box */}

        <div
          className="
          bg-[#f5f5f5]
          w-full
          max-w-[550px]
          h-[580px]
          shadow-2xl
          flex
          flex-col
          justify-between
          "
        >

          <div className="px-12 pt-14">

            {/* Heading */}

            <h2
              className="
              text-[#ff2b2b]
              text-3xl
              font-extrabold
              font-oswald
              uppercase
              text-center
              translate-y-12
              "
            >
              CALCULATE YOUR
            </h2>

            <p
              className="
              text-center
              text-gray-500
              uppercase
              font-raleway
              text-xl
              mt-3
              mb-12
              translate-y-18
              "
            >
              BODY MASS INDEX
            </p>

            {/* Inputs */}

            <div className="space-y-8 font-oswald">

              {/* Height */}

              <div className="flex items-center translate-x-15 translate-y-32 w-[75%] border-b border-gray-300 py-4">

                <input
                  type="number"
                  placeholder="HEIGHT"
                  value={height}
                  onChange={(e) =>
                    setHeight(e.target.value)
                  }
                  className="
                  w-full
                  bg-transparent
                  outline-none
                  placeholder:text-gray-400
                  uppercase
                  "
                />

                <span className="font-bold">
                  Cm
                </span>

              </div>

              {/* Weight */}

              <div className="flex items-center translate-x-15 translate-y-42 w-[75%] border-b border-gray-300 py-4">

                <input
                  type="number"
                  placeholder="WEIGHT"
                  value={weight}
                  onChange={(e) =>
                    setWeight(e.target.value)
                  }
                  className="
                  w-full
                  bg-transparent
                  outline-none
                  placeholder:text-gray-400
                  uppercase
                  "
                />

                <span className="font-bold">
                  Kg
                </span>

              </div>

              {/* Age */}

              <div className="flex items-center translate-x-15 translate-y-52 w-[75%] border-b border-gray-300 py-4">

                <input
                  type="number"
                  placeholder="AGE"
                  value={age}
                  onChange={(e) =>
                    setAge(e.target.value)
                  }
                  className="
                  w-full
                  bg-transparent
                  outline-none
                  placeholder:text-gray-400
                  uppercase
                  "
                />

                <span className="font-bold">
                  Year
                </span>

              </div>

              {/* Gender */}

              <div className="flex items-center translate-x-15 translate-y-62 w-[75%] border-b border-gray-300 py-4">

                <select
                  value={gender}
                  onChange={(e) =>
                    setGender(e.target.value)
                  }
                  className="
                  w-full
                  bg-transparent
                  outline-none
                  text-gray-500
                  "
                >
                  <option value="">
                    GENDER
                  </option>

                  <option>
                    Male
                  </option>

                  <option>
                    Female
                  </option>

                </select>

              </div>

            </div>

          </div>

          {/* BMI Result Fixed Space */}

<div className="h-[50px] flex items-center justify-center">

  {bmi && (
    <h3 className="text-xl translate-y-30 font-bold">
      BMI : {bmi}
    </h3>
  )}

</div>

{/* Button */}

<button
  onClick={calculateBMI}
  className="
  bg-[#ff2b2b]
  text-white
  font-bold
  uppercase
  h-[65px]
  w-full
  hover:bg-red-700
  transition
  font-oswald
  "
>
  CALCULATE BMI →
</button>

        </div>

      </div>

    </section>
  );
};

export default BMICalculator;