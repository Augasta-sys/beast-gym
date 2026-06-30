import blog1 from "../assets/Images/blog1.png";
import blog2 from "../assets/Images/blog2.png";
import blog3 from "../assets/Images/blog3.png";

import gallery1 from "../assets/Images/gallery1.png";
import gallery2 from "../assets/Images/gallery2.png";
import gallery3 from "../assets/Images/gallery3.png";
import gallery4 from "../assets/Images/gallery4.png";
import gallery5 from "../assets/Images/gallery5.png";

function Blog() {

const blogs=[

{
image:blog1,
title:"Build yourself in hours of exercise everyday for 6 months.",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
},

{
image:blog2,
title:"Fat burning cardio workout to keep yourself in shape",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
},

{
image:blog3,
title:"Crossfit Guide for beginners: 10 things you must know",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
}

];

const gallery=[
gallery1,
gallery2,
gallery3,
gallery4,
gallery5
]

return(

<section className="bg-white pt-32 pb-24 ">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-16">

<h2 className="text-red-600 text-3xl font-bold uppercase">
BLOG
</h2>

<p className="text-gray-400 uppercase text-sm tracking-[3px] mt-3">
READY TO STAY IN SHAPE
</p>

</div>


{/* Blog Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{blogs.map((item,index)=>(

<div key={index}>

<div className="relative">

<img
src={item.image}
alt=""
className="w-full h-[240px] object-cover"
/>

<div className="absolute top-0 right-0 bg-red-600 px-4 py-2">

<p className="text-white text-xs font-bold">
22 NOV
</p>

</div>

</div>

<h3 className="mt-5 text-sm font-semibold leading-7">

{item.title}

</h3>

<p className="text-gray-400 mt-4 text-sm leading-6">

{item.desc}

</p>

</div>

))}

</div>

</div>


{/* Bottom Gallery */}

<div
className="relative mt-24 h-[650px] bg-cover bg-center"
style={{
backgroundImage:`url(${gallery1})`
}}
>

<div className="absolute bottom-5 left-1/2 -translate-x-1/2">

<div className="flex flex-wrap justify-center gap-4 px-4">

{gallery.map((img,index)=>(

<img
key={index}
src={img}
alt=""
className="w-[120px] h-[80px] object-cover"
/>

))}

</div>

</div>

</div>

</section>

)

}

export default Blog;