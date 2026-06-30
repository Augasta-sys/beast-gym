import Coach1 from "../assets/Images/Coach1.png";
import Coach2 from "../assets/Images/Coach2.png";
import Coach3 from "../assets/Images/Coach3.png";
import Coach4 from "../assets/Images/Coach4.png";

function Coaches(){

const coaches=[
Coach1,
Coach2,
Coach3,
Coach4
]

return(

<section className="bg-gray-700 py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<h2 className="text-red-600 text-3xl font-bold uppercase">
COACHES
</h2>

<p className="text-gray-300 uppercase mt-4">
OUR TRAINING COACHES
</p>

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

{coaches.map((coach,index)=>(

<div key={index}>

<img
src={coach}
alt=""
className="w-full h-[400px] object-cover"
/>

</div>

))}

</div>

</div>

</section>

)

}

export default Coaches;