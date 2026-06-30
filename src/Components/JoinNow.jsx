import icon1 from "../assets/Images/icon1.png";
import icon2 from "../assets/Images/icon2.png";
import icon3 from "../assets/Images/icon3.png";

function JoinNow() {

const plans = [

{
title:"BASIC",
icon:icon1,
price:"$9.99/month",
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
price:"$24.99/month",
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
price:"$14.99/month",
features:[
"PERSONAL TRAINER",
"SERVICE LOCKER ROOMS",
"FITNESS ASSESSMENT",
"MORNING SLOT"
]
}

];

return(

   <section className="pt-32 pb-24 bg-white">
   <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
     <h2 className="text-red-600 text-3xl md:text-4xl font-bold uppercase">JOIN NOW</h2>
     <p className="text-gray-400 uppercase tracking-[4px] mt-3">JOIN & BE ONE OF US</p>
     </div>


   <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:items-start">
       {plans.map((plan,index)=>(

     <div key={index}
     className="flex flex-col items-center mb-8 lg:mb-0">

    <div className={`bg-white border shadow-lg w-[260px]
      min-h-[420px] p-6 text-center

     /* ${index===0 ? "lg:rounded-l-lg" : ""}
     ${index===plans.length-1 ? "lg:rounded-r-lg" : ""}
     ${index!==plans.length-1 ? "lg:border-r-0" : ""} */`}>

      <h3 className="text-red-600 leading-20 text-xl font-bold uppercase">{plan.title}</h3>
      <div className="flex justify-center mt-6">

     <div className="w-16 h-16 bg-gray-100 flex justify-center items-center">
     <img src={plan.icon} alt="" className="w-8 h-8 object-contain"/>

</div>

</div>

     <div className="mt-6 space-y-4">
   {plan.features.map((feature,i)=>(
    <p key={i}
     className="text-gray-500 leading-10 uppercase text-xs">{feature}</p>

))}

</div>

     <h2 className="text-red-600 text-2xl font-bold mt-8">{plan.price}</h2>

</div>

    {index===0 && (
    <div className="w-[260px] mt-4">
    <button className="w-full h-15 bg-red-600 text-white py-4 font-semibold">
     ENROL NOW →</button>

</div>

)}

</div>

))}

</div>

</div>

</section>

)

}

export default JoinNow;