import { useRef } from "react";

import Schedule1 from "../assets/Images/Schedule1.png";
import Schedule2 from "../assets/Images/Schedule2.png";
import Schedule3 from "../assets/Images/Schedule3.png";
import Schedule4 from "../assets/Images/Schedule4.png";
import Schedule5 from "../assets/Images/Schedule5.png";
import Schedule6 from "../assets/Images/Schedule6.png";
import Schedule7 from "../assets/Images/Schedule7.png";

function Schedule() {

const sliderRef = useRef(null);

const scrollLeft = () => {
sliderRef.current.scrollBy({left: -300, behavior: "smooth"
});
};

const scrollRight = () => {
sliderRef.current.scrollBy({left: 300, behavior: "smooth"
});
};

const scheduleData = [

{
id:1,
image:Schedule1,
day:"SUNDAY",
date: "25",
month: "NOV",
title:"CARDIO",
subtitle:"WEIGHT TRAINING"
},

{
id:2,
image:Schedule2,
day:"MONDAY", 
date:"25",
month: "NOV",
title:"CARDIO",
subtitle:"WEIGHT TRAINING"
},

{
id:3,
image:Schedule3,
day:"TUESDAY", 
date: "25",
month: "NOV",
title:"CARDIO",
subtitle:"PLYO"
},

{
id:4,
image:Schedule4,
day:"WEDNESDAY", 
date: "27",
month: "NOV",
title:"CARDIO",
subtitle:"CROSSFIT"
},

{
id:5,
image:Schedule5,
day:"THURSDAY", 
date: "28",
month: "NOV",
title:"BODY BUILDING",
subtitle:"PLYO"
},

{
id:6,
image:Schedule6,
day:"FRIDAY", 
date: "29",
month: "NOV",
title:"PLYO",
subtitle:"BODY BUILDING"
},

{
id:7,
image:Schedule7,
day:"SATURDAY", 
date: "30",
month: "NOVEMBER",
title:"WEIGHT TRAINING",
subtitle:"CROSSFIT"
}

];

return(

<section className="py-20 pt-32 pb-24 bg-white">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-red-600 text-3xl font-bold text-center uppercase">Schedule</h2>

<p className="text-gray-500 text-center uppercase tracking-[3px] mt-3">
Keep Up With The Schedule To Stay Fit</p>

<p className="text-gray-500 text-center max-w-2xl mx-auto mt-5 leading-7">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quibusdam aspernatur doloremque beatae.</p>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
     <div className="h-[360px] bg-red-600 p-8 flex flex-col justify-between">
     <div className="text-right">
      <h2 className="text-white text-2xl mt-50 font-bold">
        24<sup>TH</sup> - 30<sup>TH</sup></h2>
      <h2 className="text-white mt-50 font-bold text-2xl text-lg">NOVEMBER 2019</h2>
    </div>

    <div className="flex justify-end gap-5">
      <button onClick={scrollLeft} className="text-white text-3xl">&lt;</button>

      <button onClick={scrollRight} className="text-white text-3xl">&gt;</button>
    </div>

  </div>

  {scheduleData.map((item) => (

    <div
      key={item.id}
      className="relative h-[360px]">

      <img src={item.image} alt="" className="w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-black/30 rounded-lg"></div>


      <div className="absolute top-10 right-8 font-bold">
        <p className="text-white text-2xl">
          {item.day}, {item.date}<sup>TH</sup> {item.month}</p>
      </div>

      <div className="absolute bottom-10 left-10">
       <h2 className="text-white text-2xl font-bold">{item.title}</h2>

        <p className="text-white text-1xl">{item.subtitle}</p>

      </div>

    </div>

  ))}

</div>

</div>

</section>

);

}

export default Schedule;
