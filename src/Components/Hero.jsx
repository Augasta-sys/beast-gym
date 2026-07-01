import { useState } from "react";
import Navbar from "./Navbar";

import hero from "../assets/Images/hero.png";
import blog1 from "../assets/Images/blog1.png";
import blog2 from "../assets/Images/blog2.png";
import blog3 from "../assets/Images/blog3.png";

const images = [hero, blog1, blog2, blog3];

function Hero() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        prev === 0
          ? images.length - 1
          : prev - 1
    );
  };

  return (

<section
id="home"
className="relative min-h-screen overflow-hidden bg-cover bg-center"
style={{
backgroundImage:`url(${images[current]})`
}}
>

<div className="absolute inset-0 bg-black/60"></div>

{/* Play Button */}

<div
className="
hidden
lg:flex
absolute
left-[17%]
top-[58%]
-translate-y-45
translate-x-20
z-20
flex-col
items-center
"
>

<div
className="
w-24
h-24
rounded-full
bg-white/20
backdrop-blur-sm
flex
justify-center
items-center
"
>

<span className="text-white text-3xl">
▶
</span>

</div>

<p
className="
text-white
text-sm
font-bold
tracking-[4px]
rotate-[270deg]
whitespace-nowrap
relative
top-25
"
>
PLAY VIDEO
</p>

</div>

{/* Hero Content */}

<div
className="
relative
z-10
min-h-screen
max-w-7xl
mx-auto
px-6
flex
items-center
justify-center
lg:justify-center
lg:translate-x-20
lg:-translate-y-10
"
>

<div
className="
text-center
lg:text-left
max-w-2xl
lg:ml-32
"
>

<p className="text-red-500 text-xl font-bold uppercase mb-3">

Cardio

</p>

<h1
className="
text-white
text-4xl
sm:text-5xl
lg:text-7xl
font-bold
leading-tight
"
>
LIVE IT
</h1>

<h1
className="
text-white
text-4xl
sm:text-5xl
lg:text-7xl
font-bold
leading-tight
"
>
LIKE A ROCK!
</h1>

</div>

</div>

{/* Bottom Slider */}

<div className="absolute bottom-0 left-0 z-50 bg-white h-16 md:h-20 w-[95%] sm:w-[80%] lg:w-[50%] px-4 md:px-8 flex items-center justify-between">

<div className="flex items-center gap-3">

<span className="text-lg md:text-2xl font-bold">

{current + 1}

</span>

<span className="text-gray-400">

/{images.length}

</span>

<div className="w-10 md:w-32 lg:w-52 h-[2px] bg-gray-300"></div>

</div>

<div className="flex items-center gap-10">

<button
onClick={prevSlide}
className="text-black text-xl md:text-3xl"
>
&#10094;
</button>

<button
onClick={nextSlide}
className="text-black text-xl md:text-3xl"
>
&#10095;
</button>

</div>

</div>

</section>

  );
}

export default Hero;