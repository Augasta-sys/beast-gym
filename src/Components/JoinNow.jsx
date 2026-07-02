import { useState } from "react";

import icon1 from "../assets/Images/icon1.png";
import icon2 from "../assets/Images/icon2.png";
import icon3 from "../assets/Images/icon3.png";

function JoinNow() {

const [active,setActive]=useState(0);

const plans=[

{
title:"BASIC",
icon:icon1,
price:"$ 9.99 / MONTH",
features:[
"PERSONAL TRAINER",
"SERVICE LOCKER ROOMS",
"FITNESS ASSESSMENT",
"MORNING SLOT"
]
},

{
title:"PREMIUM",
icon:icon2,
price:"$ 24.99 / MONTH",
features:[
"PERSONAL TRAINER",
"SERVICE LOCKER ROOMS",
"FITNESS ASSESSMENT / CONSULTATION",
"MORNING & EVENING SLOT"
]
},

{
title:"ADVANCED",
icon:icon3,
price:"$ 14.99 / MONTH",
features:[
"PERSONAL TRAINER",
"SERVICE LOCKER ROOMS",
"FITNESS ASSESSMENT",
"MORNING SLOT"
]
}

];

return(

<section
id="joinnow"
className="
translate-y-60
lg:translate-x-40
lg:translate-y-100
py-20
px-5
bg-[#f7f7f7]
"
>

<div className="max-w-5xl mx-auto flex flex-col items-center">

{/* Heading */}

<div className="text-center mb-14">

<h2
className="
text-red-600
text-2xl
leading-10
font-oswald
md:text-4xl
font-bold
uppercase
"
>
JOIN NOW
</h2>

<p
className="
uppercase
text-gray-400
leading-10
font-raleway
text-md
font-bold
mt-3
tracking-[2px]
"
>
JOIN & BE ONE OF US
</p>

</div>


{/* Pricing Cards */}

<div
className="
flex
flex-col
lg:flex-row
justify-center
items-center
w-full
max-w-4xl
mx-auto
"
>

{plans.map((plan,index)=>(

<div
key={index}
onMouseEnter={()=>setActive(index)}
onClick={()=>setActive(index)}

className={`
relative
w-[260px]
sm:w-[260px]
md:w-[240px]
lg:w-[250px]
border
bg-white
cursor-pointer
transition-all
duration-500
hover:bg-gray-300
hover:z-10
gap-10
${index !== 0 ? "-ml-[1px]" : ""}
${active===index ? "shadow-xl scale-105 z-20" : ""}
`}
>

<div
className="
flex
flex-col
justify-center
items-center
text-center
px-6
py-8
min-h-[380px]
"
>

<h3
className="
text-red-600
font-bold
font-oswald
text-lg
mb-6
"
>
{plan.title}
</h3>

<img
src={plan.icon}
alt=""
className="
w-12
mb-8
"
/>

<div
className="
flex
flex-col
justify-center
items-center
gap-4
w-full
"
>

{plan.features.map((item,i)=>(

<p
key={i}
className="
text-sm
text-gray-500
font-raleway
text-center
"
>
{item}
</p>

))}

</div>

<h2
className="
mt-8
text-red-600
font-bold
font-oswald
text-2xl
"
>
{plan.price}
</h2>

</div>


{active===index && (

<button
className="
absolute
bottom-[-25px]
left-0
w-full
bg-red-600
text-white
text-2xl
font-oswald
py-4
font-semibold
hover:bg-black
transition-all
duration-5000
"
>

ENROL NOW →

</button>

)}

</div>

))}

</div>

</div>

</section>

)

}

export default JoinNow;