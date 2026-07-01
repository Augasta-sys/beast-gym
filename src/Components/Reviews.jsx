/* import { useState } from "react";

import review1 from "../assets/Images/review1.png";
import review2 from "../assets/Images/review2.png";
import coach2 from "../assets/Images/coach2.png";
import coach4 from "../assets/Images/coach4.png";

function Review() {

const reviews = [

{
id:1,
image:review1,
name:"Neil Frasch",
text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad rerum dolore similique. Consequuntur quaerat, nulla recusandae aut, sapiente sit vitae, quae facere quod itaque neque repellendus animi officiis asperiores. Odit assumenda facere, deleniti quos, eaque officia voluptatum molestiae pariatur ipsam necessitatibus saepe iusto nemo quasi odio temporibus quisquam consequatur."
},

{
id:2,
image:coach2,
name:"John Carter",
text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad rerum dolore similique. Consequuntur quaerat, nulla recusandae aut, sapiente sit vitae, quae facere quod itaque neque repellendus animi officiis asperiores. Odit assumenda facere, deleniti quos, eaque officia voluptatum molestiae pariatur ipsam necessitatibus saepe iusto nemo quasi odio temporibus quisquam consequatur."
},

{
id:3,
image:coach4,
name:"David Smith",
text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad rerum dolore similique. Consequuntur quaerat, nulla recusandae aut, sapiente sit vitae, quae facere quod itaque neque repellendus animi officiis asperiores. Odit assumenda facere, deleniti quos, eaque officia voluptatum molestiae pariatur ipsam necessitatibus saepe iusto nemo quasi odio temporibus quisquam consequatur."
}

];

const [current,setCurrent]=useState(0);

const prevSlide=()=>{

setCurrent((prev) => 
prev === 0
? reviews.length-1
: prev - 1
);

};

const nextSlide=()=>{

setCurrent((prev) =>
prev === reviews.length-1
? 0
: prev + 1
);

};

return(

<section id="review" className="relative top-110 bottom-90 right-10 left-10 bg-gray-100 py-20">

<div className="max-w-7xl mx-auto px-5">


<div className="text-center mb-16">

<h2 className="text-red-600 font-bold leading-10 text-4xl uppercase">
Review
</h2>

<p className="uppercase text-gray-500 leading-20 text-sm tracking-[2px] mt-3">
Read What People Says 
</p>

</div>


<div className="grid md:grid-cols-2 gap-10 items-center">


<div className="relative flex justify-center">


  <div className="w-[350px] h-[450px] md:w-[420px] md:h-[500px] overflow-hidden">

    <img
      src={reviews[current].image}
      alt=""
      className="w-full h-full object-cover"
    />

  </div>


  <img
    src={review2}
    alt="quote"
    className="
    absolute
    right-0
    top-1/2
    -translate-y-1/2
    -translate-x-5
    w-25
    md:w-35
    lg:w-40
    z-10"
  />

</div>



  <div className="max-w-xl">

    <p className="text-gray-500 leading-8">
      {reviews[current].text}
    </p>

    <h2 className="mt-10 text-3xl font-bold">
      {reviews[current].name}
    </h2>

    <div className="flex gap-8 mt-8">

      <button
        onClick={prevSlide}
        className="text-3xl hover:text-red-600 transition"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="text-3xl hover:text-red-600 transition"
      >
        →
      </button>

    </div>

  </div>
 </div>
 </div>

</section>

);

}

export default Review; */


import { useState } from "react";

import review1 from "../assets/Images/review1.png";
import review2 from "../assets/Images/review2.png";
import coach2 from "../assets/Images/coach2.png";
import coach4 from "../assets/Images/coach4.png";

function Review() {

const reviews=[

{
id:1,
image:review1,
name:"Neil Frasch",
text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores numquam necessitatibus distinctio facilis commodi doloribus nisi magni facere labore minima obcaecati sed eius dolores odit odio alias, dolor quaerat debitis modi? Maxime doloremque facilis omnis ipsam totam numquam tenetur impedit dolorum ex adipisci quidem culpa corrupti, velit tempore inventore officiis aut repudiandae iusto consequuntur molestias? Molestias similique, libero dolores tenetur veniam voluptas hic non minima quae dolorum impedit atque doloremque dignissimos reprehenderit facilis sit? Commodi necessitatibus dolorem ea ducimus veritatis fugit at. Placeat ex officiis praesentium sed facere? Perferendis tempore qui blanditiis expedita, neque aperiam deserunt officiis repellat eius."
},

{
id:2,
image:coach2,
name:"John Carter",
text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores numquam necessitatibus distinctio facilis commodi doloribus nisi magni facere labore minima obcaecati sed eius dolores odit odio alias, dolor quaerat debitis modi? Maxime doloremque facilis omnis ipsam totam numquam tenetur impedit dolorum ex adipisci quidem culpa corrupti, velit tempore inventore officiis aut repudiandae iusto consequuntur molestias? Molestias similique, libero dolores tenetur veniam voluptas hic non minima quae dolorum impedit atque doloremque dignissimos reprehenderit facilis sit? Commodi necessitatibus dolorem ea ducimus veritatis fugit at. Placeat ex officiis praesentium sed facere? Perferendis tempore qui blanditiis expedita, neque aperiam deserunt officiis repellat eius."
},

{
id:3,
image:coach4,
name:"David Smith",
text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores numquam necessitatibus distinctio facilis commodi doloribus nisi magni facere labore minima obcaecati sed eius dolores odit odio alias, dolor quaerat debitis modi? Maxime doloremque facilis omnis ipsam totam numquam tenetur impedit dolorum ex adipisci quidem culpa corrupti, velit tempore inventore officiis aut repudiandae iusto consequuntur molestias? Molestias similique, libero dolores tenetur veniam voluptas hic non minima quae dolorum impedit atque doloremque dignissimos reprehenderit facilis sit? Commodi necessitatibus dolorem ea ducimus veritatis fugit at. Placeat ex officiis praesentium sed facere? Perferendis tempore qui blanditiis expedita, neque aperiam deserunt officiis repellat eius."
}

];

const [current,setCurrent]=useState(0);

const prevSlide=()=>{

setCurrent(
(prev)=>
prev===0
? reviews.length-1
: prev-1
);

};

const nextSlide=()=>{

setCurrent(
(prev)=>
prev===reviews.length-1
?0
:prev+1
);

};

return(

<section
id="review"
className="
bg-gray-100
py-16
md:py-24
px-5
md:px-10
translate-y-50
lg:translate-y-90
"
>

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div className="text-center mb-16">

<h2
className="
text-red-600
font-bold
text-3xl
md:text-4xl
uppercase
leading-10
"
>
REVIEW
</h2>

<p
className="
uppercase
text-gray-500
tracking-[2px]
mt-4
text-sm
leading-15
"
>
READ WHAT PEOPLE SAYS
</p>

</div>


{/* Content */}

<div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-12
items-center
"
>

{/* Image */}

<div className="relative flex justify-center">

<div
className="
w-[280px]
h-[350px]
sm:w-[350px]
sm:h-[450px]
md:w-[420px]
md:h-[500px]
overflow-hidden
"
>

<img
src={reviews[current].image}
alt=""
className="
w-full
h-full
object-cover
"
 />

</div>


{/* Quote */}

<img
src={review2}
alt=""
className="
absolute
right-[5%]
top-1/2
-translate-y-1/2
w-16
sm:w-20
md:w-28
lg:w-32
z-10
"
/>

</div>


{/* Text */}

<div
className="
text-center
lg:text-left
max-w-xl
mx-auto
"
>

<p
className="
text-gray-500
leading-8
px-2
"
>
{reviews[current].text}
</p>

<h2
className="
mt-8
text-2xl
md:text-3xl
font-bold
"
>
{reviews[current].name}
</h2>

<div
className="
flex
justify-center
lg:justify-start
gap-10
mt-8
"
>

<button
onClick={prevSlide}
className="
text-3xl
hover:text-red-600
transition
"
>
←
</button>

<button
onClick={nextSlide}
className="
text-3xl
hover:text-red-600
transition
"
>
→
</button>

</div>

</div>

</div>

</div>

</section>

);

}

export default Review;