import { useState } from "react";

import Review1 from "../assets/Images/Review1.png";
import Review2 from "../assets/Images/Review2.png";

const reviews = [

{
id:1,
image:Review1,
name:"Nell Francis",
role:"Fitness Member",
review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nesciunt quaerat! Perspiciatis nesciunt minima doloremque dolor error unde architecto deserunt dolorem possimus, hic, quae maiores modi commodi officiis facere reiciendis? Cupiditate excepturi sapiente libero consequuntur nam impedit facere veritatis corporis quasi temporibus, ratione deserunt quod quis consequatur assumenda? Vel animi vitae sit, iure ex quibusdam ut obcaecati incidunt amet voluptatibus ducimus corporis natus cumque inventore veritatis saepe, tempora labore harum suscipit quidem mollitia magni iusto sint. Commodi odio modi repellat!"
},

{
id:2,
image:Review1,
name:"Emma Watson",
role:"Gym Member",
review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nesciunt quaerat! Perspiciatis nesciunt minima doloremque dolor error unde architecto deserunt dolorem possimus, hic, quae maiores modi commodi officiis facere reiciendis? Cupiditate excepturi sapiente libero consequuntur nam impedit facere veritatis corporis quasi temporibus, ratione deserunt quod quis consequatur assumenda? Vel animi vitae sit, iure ex quibusdam ut obcaecati incidunt amet voluptatibus ducimus corporis natus cumque inventore veritatis saepe, tempora labore harum suscipit quidem mollitia magni iusto sint. Commodi odio modi repellat!"
},

{
id:3,
image:Review1,
name:"David Lee",
role:"Fitness Coach",
review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nesciunt quaerat! Perspiciatis nesciunt minima doloremque dolor error unde architecto deserunt dolorem possimus, hic, quae maiores modi commodi officiis facere reiciendis? Cupiditate excepturi sapiente libero consequuntur nam impedit facere veritatis corporis quasi temporibus, ratione deserunt quod quis consequatur assumenda? Vel animi vitae sit, iure ex quibusdam ut obcaecati incidunt amet voluptatibus ducimus corporis natus cumque inventore veritatis saepe, tempora labore harum suscipit quidem mollitia magni iusto sint. Commodi odio modi repellat!"
}

];

function Reviews(){

const [current,setCurrent]=useState(0);

const previousReview=()=>{
setCurrent((prev)=>
prev===0 ? reviews.length-1 : prev-1
);
};

const nextReview=()=>{
setCurrent((prev)=>
prev===reviews.length-1 ? 0 : prev+1
);
};

return(

<section className="py-24 pt-32 pb-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-red-600 text-3xl font-bold text-center uppercase">Reviews</h2>

<p className="text-gray-400 text-center uppercase tracking-[3px] mt-3">Read what people says</p>

<div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

<div className="relative">
<img src={reviews[current].image} alt=""
className="w-full h-[450px] rounded-lg object-cover"/>

<img src={review2} alt=""
className="absolute -right-10 top-[45%] w-24 md:w-32"/>
</div>

<div className="flex flex-col justify-center">
<p className="text-gray-500 text-center lg:text-left leading-9 text-lg">
"{reviews[current].review}"</p>

<div className="mt-8">
<h3 className="font-bold text-2xl text-center lg:text-left">
{reviews[current].name}</h3>

<p className="text-gray-400 text-center lg:text-left">
{reviews[current].role}</p>
</div>


<div className="flex gap-6 mt-10 justify-center lg:justify-start">
<button onClick={previousReview}
className="w-12 h-12 rounded-full border text-xl hover:bg-red-600 hover:text-white">
←</button>

<button onClick={nextReview}
className="w-12 h-12 rounded-full border text-xl hover:bg-red-600 hover:text-white">
→</button>

</div>

</div>

</div>

</div>

</section>

);

}

export default Reviews;
