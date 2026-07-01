import FacilityCard from "./FacilityCard";
import facilityData from "../Data/facilityData";

export default function Facilities() {

return (

<section
id="facilities"
className="
py-16
md:py-20
lg:py-24
px-5
leading-15
md:px-10
translate-y-20
lg:px-16
lg:translate-y-40
"
>

<div className="max-w-7xl mx-auto">

<h3
className="
text-red-500
uppercase
text-center
font-bold
text-3xl
md:text-4xl
mb-4
"
>
Facilities
</h3>

<p
className="
text-center
text-gray-500
font-bold
uppercase
mb-6
"
>
How it feels to be with us
</p>

<p
className="
w-full
max-w-[800px]
mx-auto
px-4
md:px-8
text-center
text-gray-500
leading-7
md:leading-8
mb-12
lg:translate-x-60
"
>
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Odit quos earum voluptas nihil adipisci officiis
voluptatibus eius corporis exercitationem.
</p>

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
lg:gap-8
lg:translate-x-10
lg:translate-y-5
"
>

{facilityData.map((item)=>(

<FacilityCard
key={item.id}
image={item.image}
title={item.title}
/>

))}

</div>

</div>

</section>

);

}