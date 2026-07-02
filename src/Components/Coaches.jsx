import { Link } from "react-router-dom";

import coach1 from "../assets/Images/coach1.png";
import coach2 from "../assets/Images/coach2.png";
import coach3 from "../assets/Images/coach3.png";
import coach4 from "../assets/Images/coach4.png";

function Coaches() {
  const coaches = [
    { id: 1, image: coach1 },
    { id: 2, image: coach2 },
    { id: 3, image: coach3 },
    { id: 4, image: coach4 },
  ];

  return (
    <section id="coaches" className="translate-y-80 lg:translate-x-5 lg:translate-y-120 bg-gray-700 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-oswald text-3xl font-bold uppercase">
            COACHES
          </h2>

          <p className="text-gray-300 font-raleway text-xl leading-15 uppercase mt-4">
            OUR TRAINING COACHES
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach) => (
            <Link key={coach.id} to={`/coach/${coach.id}`}>
              <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                <img
                  src={coach.image}
                  alt=""
                  className="w-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Coaches;