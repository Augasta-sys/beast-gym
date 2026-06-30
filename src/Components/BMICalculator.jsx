import { useState } from "react";
import BmiBg from "../assets/Images/BmiBg.png";

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = height / 100;
    const bmi = (weight / (h * h)).toFixed(1);

    setResult(bmi);
  };

  return (
    <section
      className="relative pt-32 pb-24 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BmiBg})`,
      }}
    >
   
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="flex justify-center md:justify-end items-center min-h-screen">

          <div className="bg-white w-[40%] max-w-[600px] min-h-[250px] leading-8">

            <h2 className="text-red-600 text-xl leading-10 font-bold uppercase text-center">
              Calculate Your
            </h2>

            <p className="text-gray-400 text-center leading-8 mt-2 mb-12 text-sm">
              Body Mass Index
            </p>

            <div className="border-b border-gray-300 py-6">

              <div className="flex justify-between items-center">

                <span className="text-gray-500 leading-10 text-lg">
                  Height
                </span>

                <div className="flex items-center gap-3">

                  <input
                    type="number"
                    placeholder="0"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-24 text-right outline-none text-black text-lg"
                  />

                  <span className="font-semibold">
                    cm
                  </span>

                </div>

              </div>

            </div>

            <div className="border-b border-gray-300 py-6">

              <div className="flex justify-between items-center">

                <span className="text-gray-500 leading-10 text-lg">
                  Weight
                </span>

                <div className="flex items-center gap-3">

                  <input
                    type="number"
                    placeholder="0"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-24 text-right outline-none text-black text-lg"
                  />

                  <span className="font-semibold">
                    kg
                  </span>

                </div>

              </div>

            </div>

            <div className="border-b border-gray-300 py-6">

              <div className="flex justify-between items-center">

                <span className="text-gray-500 leading-10 text-lg">
                  Age
                </span>

                <div className="flex items-center gap-3">

                  <input
                    type="number"
                    placeholder="0"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-24 text-right outline-none text-black text-lg"
                  />

                  <span className="font-semibold">
                    years
                  </span>

                </div>

              </div>

            </div>

            <div className="border-b border-gray-300 py-6">

              <div className="flex justify-between items-center">

                <span className="text-gray-500 leading-10 text-lg">
                  Gender
                </span>

                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="outline-none text-black"
                >
                  <option value="">
                    Select
                  </option>

                  <option value="male">
                    Male
                  </option>

                  <option value="female">
                    Female
                  </option>

                </select>

              </div>

            </div>

            <button
              onClick={calculateBMI}
              className="w-full bg-red-600 py-10 text-white font-bold mt-12"
            >
              CALCULATE BMI →
            </button> 

            {result && (
              <div className="mt-8 text-center text-2xl font-bold text-black">
                Your BMI: {result}
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default BMICalculator;