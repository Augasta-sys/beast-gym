/* 

import { useRef } from "react";
import schedule1 from "../assets/Images/schedule1.png";
import schedule2 from "../assets/Images/schedule2.png";
import schedule3 from "../assets/Images/schedule3.png";
import schedule4 from "../assets/Images/schedule4.png";
import schedule5 from "../assets/Images/schedule5.png";
import schedule6 from "../assets/Images/schedule6.png";
import schedule7 from "../assets/Images/schedule7.png";

function Schedule() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const scheduleData = [
    {
      id: 1,
      image: schedule1,
      day: "SUNDAY",
      date: "25",
      month: "NOV",
      title: "CARDIO",
      subtitle: "WEIGHT TRAINING",
    },
    {
      id: 2,
      image: schedule2,
      day: "MONDAY",
      date: "25",
      month: "NOV",
      title: "CARDIO",
      subtitle: "WEIGHT TRAINING",
    },
    {
      id: 3,
      image: schedule3,
      day: "TUESDAY",
      date: "25",
      month: "NOV",
      title: "CARDIO",
      subtitle: "PLYO",
    },
    {
      id: 4,
      image: schedule4,
      day: "WEDNESDAY",
      date: "27",
      month: "NOV",
      title: "CARDIO",
      subtitle: "CROSSFIT",
    },
    {
      id: 5,
      image: schedule5,
      day: "THURSDAY",
      date: "28",
      month: "NOV",
      title: "BODY BUILDING",
      subtitle: "PLYO",
    },
    {
      id: 6,
      image: schedule6,
      day: "FRIDAY",
      date: "29",
      month: "NOV",
      title: "PLYO",
      subtitle: "BODY BUILDING",
    },
    {
      id: 7,
      image: schedule7,
      day: "SATURDAY",
      date: "30",
      month: "NOV",
      title: "WEIGHT TRAINING",
      subtitle: "CROSSFIT",
    },
  ];

  return (
    <section
      id="schedule"
      className="relative top-90 bottom-60 left-10 py-20 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-red-600 text-3xl font-bold leading-15 uppercase">
          Schedule
        </h2>

        <p className="text-gray-500 text-center uppercase tracking-[3px] mt-3 text-sm">
          Keep Up With The Schedule To Stay Fit
        </p>

        <p className="text-gray-500 max-w-3xl mx-auto mt-5 leading-7 px-4 sm:px-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam accusamus modi perspiciatis? Aspernatur debitis hic enim tenetur, quod eaque! Ut dolores at eligendi dolorum corporis laborum eius nihil omnis!
        </p>
        </div>

        <div
          ref={sliderRef}
          className="
          mt-14
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6"
        >


          <div className="relative bg-red-600 min-h-[300px] p-8 flex flex-col justify-between">

            <div className="absolute top-5 right-15 text-white text-end">
              <p className="text-md font-bold">
                24<sup>TH</sup> - 30<sup>TH</sup>
              </p>

              <p className="mt-4 text-md font-semibold">
                NOVEMBER 2019
              </p>
            </div>

            <div className="flex justify-center gap-8">
              <button
                onClick={scrollLeft}
                className="absolute bottom-10 right-25 text-white text-3xl"
              >
                &#10094;
              </button>

              <button
                onClick={scrollRight}
                className="absolute bottom-10 right-15 text-white text-3xl"
              >
                &#10095;
              </button>
            </div>
          </div>


          {scheduleData.map((item) => (
            <div
              key={item.id}
              className="relative h-[300px] overflow-hidden rounded-lg group"
            >
              <img
                src={item.image}
                alt=""
                className="
                w-full
                h-full
                object-cover
                transition
                duration-500
                group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute top-5 right-15">
                <p className="text-white text-sm font-bold">
                  {item.day}, {item.date}
                  <sup>TH</sup> {item.month}
                </p>
              </div>

              <div className="absolute bottom-5 left-5">
                <h2 className="text-white text-lg font-bold uppercase">
                  {item.title}
                </h2>

                <p className="text-white text-sm uppercase">
                  {item.subtitle}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Schedule; */

import { useRef } from "react";
import schedule1 from "../assets/Images/schedule1.png";
import schedule2 from "../assets/Images/schedule2.png";
import schedule3 from "../assets/Images/schedule3.png";
import schedule4 from "../assets/Images/schedule4.png";
import schedule5 from "../assets/Images/schedule5.png";
import schedule6 from "../assets/Images/schedule6.png";
import schedule7 from "../assets/Images/schedule7.png";

function Schedule() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  const scheduleData = [
    {
      id: 1,
      image: schedule1,
      day: "SUNDAY",
      date: "25",
      month: "NOV",
      title: "CARDIO",
      subtitle: "WEIGHT TRAINING",
    },
    {
      id: 2,
      image: schedule2,
      day: "MONDAY",
      date: "25",
      month: "NOV",
      title: "CARDIO",
      subtitle: "WEIGHT TRAINING",
    },
    {
      id: 3,
      image: schedule3,
      day: "TUESDAY",
      date: "25",
      month: "NOV",
      title: "CARDIO",
      subtitle: "PLYO",
    },
    {
      id: 4,
      image: schedule4,
      day: "WEDNESDAY",
      date: "27",
      month: "NOV",
      title: "CARDIO",
      subtitle: "CROSSFIT",
    },
    {
      id: 5,
      image: schedule5,
      day: "THURSDAY",
      date: "28",
      month: "NOV",
      title: "BODY BUILDING",
      subtitle: "PLYO",
    },
    {
      id: 6,
      image: schedule6,
      day: "FRIDAY",
      date: "29",
      month: "NOV",
      title: "PLYO",
      subtitle: "BODY BUILDING",
    },
    {
      id: 7,
      image: schedule7,
      day: "SATURDAY",
      date: "30",
      month: "NOV",
      title: "WEIGHT TRAINING",
      subtitle: "CROSSFIT",
    },
  ];

 return (
<section
id="schedule"
className="
py-16
md:py-20
px-5
translate-y-40
lg:translate-y-80
lg:translate-x-10
md:px-10
bg-gray-100
"
>

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div className="text-center mb-14">

<h2
className="
text-red-600
text-3xl
md:text-4xl
font-bold
leading-12
font-oswald
uppercase
"
>
SCHEDULE
</h2>

<p
className="
text-gray-500
uppercase
tracking-[3px]
mt-4
font-raleway
leading-10
text-sm
"
>
KEEP UP WITH THE SCHEDULE TO STAY FIT
</p>

<p
className="
text-gray-500
max-w-[800px]
mx-auto
mt-6
px-4
leading-8
font-raleway
text-center
lg:text-center
lg:translate-x-60
"
>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Ullam veniam accusamus modi perspiciatis aspernatur
debitis hic enim tenetur quod eaque.
</p>

</div>

{/* Grid */}

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
>

{/* Red Card */}

<div
className="
h-[320px]
bg-red-600
rounded-lg
p-8
font-oswald
flex
flex-col
justify-between
"
>

<div className="text-white text-right">

<p className="text-xl font-bold">

24<sup>TH</sup> - 30<sup>TH</sup>

</p>

<p className="mt-4 uppercase text-xl font-bold">

NOVEMBER 2019

</p>

</div>

<div className="flex justify-center gap-10">

<button
onClick={scrollLeft}
className="text-white text-3xl"
>
&#10094;
</button>

<button
onClick={scrollRight}
className="text-white text-3xl"
>
&#10095;
</button>

</div>

</div>

{/* 7 Image Cards */}

{scheduleData.map((item)=>(

<div
key={item.id}
className="
relative
h-[320px]
overflow-hidden
rounded-lg
group
"
>

<img
src={item.image}
alt={item.title}
className="
w-full
h-full
object-cover
transition
duration-500
group-hover:scale-110
"
/>

<div className="absolute inset-0 bg-black/40"></div>

<div className="absolute top-10 right-10">

<p className="text-white text-xl font-bold">

{item.day}, {item.date}
<sup>TH</sup> {item.month}

</p>

</div>

<div className="absolute bottom-10 left-10">

<h2 className="text-white font-oswald text-2xl font-bold uppercase">
{item.title}
</h2>

<p className="text-white text-sm font-oswald text-xl uppercase">
{item.subtitle}
</p>

</div>

</div>

))}

</div>

</div>

</section>
);
}

export default Schedule;