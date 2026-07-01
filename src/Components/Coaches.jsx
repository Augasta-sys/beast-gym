import coach1 from "../assets/Images/coach1.png";
import coach2 from "../assets/Images/coach2.png";
import coach3 from "../assets/Images/coach3.png";
import coach4 from "../assets/Images/coach4.png";

function Coaches(){

const coaches=[
coach1,
coach2,
coach3,
coach4
]

return(

<section id="coaches" className="translate-y-80 lg:translate-x-5 lg:translate-y-120 bg-gray-700 py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<h2 className="text-red-600 text-3xl leading-10 font-bold uppercase">
COACHES
</h2>

<p className="text-gray-300 leading-10 uppercase mt-4">
OUR TRAINING COACHES
</p>

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

{coaches.map((coach,index)=>(

<div key={index} className="group relative overflow-hidden rounded-xl cursor-pointer">

<img
src={coach}
alt=""
className="w-full h-[auto] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
/>

</div>

))}

</div>

</div>

</section>

)

}

export default Coaches; 
