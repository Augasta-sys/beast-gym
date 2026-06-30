import Blog1 from "../assets/Images/Blog1.png";
import Blog2 from "../assets/Images/Blog2.png";
import Blog3 from "../assets/Images/Blog3.png";

import Gallery1 from "../assets/Images/Gallery1.png";
import Gallery2 from "../assets/Images/Gallery2.png";
import Gallery3 from "../assets/Images/Gallery3.png";
import Gallery4 from "../assets/Images/Gallery4.png";
import Gallery5 from "../assets/Images/Gallery5.png";

function Blog() {

const blogs=[

{
image:Blog1,
title:"Build yourself in hours of exercise everyday for 6 months.",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
},

{
image:Blog2,
title:"Fat burning cardio workout to keep yourself in shape",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
},

{
image:Blog3,
title:"Crossfit Guide for beginners: 10 things you must know",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
}

];

const gallery=[
Gallery1,
Gallery2,
Gallery3,
Gallery4,
Gallery5
]

return(

<section className="bg-white pt-32 pb-24 ">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<h2 className="text-red-600 text-3xl font-bold uppercase">
BLOG
</h2>

<p className="text-gray-400 uppercase text-sm tracking-[3px] mt-3">
READY TO STAY IN SHAPE
</p>

</div>


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

<div
className="relative mt-24 h-[650px] bg-cover bg-center"
style={{
backgroundImage:`url(${Gallery1})`,
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