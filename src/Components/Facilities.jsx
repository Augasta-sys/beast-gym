import FacilityCard from "./FacilityCard";
import facilityData from "../Data/facilityData";

export default function Facilities() {
  return (
    <section className="py-24 pt-32 pb-24 px-8">
    <div className="max-w-7xl mx-auto leading-8">
        <h3 className="text-red-500 uppercase text-center leading-10 font-bold text-3xl">Facilities</h3>
        <p className="text-center text-gray-500 font-bold uppercase mb-12">How it feels to be with us</p>
        <p className="text-center text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quos earum voluptas nihil adipisci officiis voluptatibus eius corporis exercitationem, cupiditate debitis velit amet, consequatur neque repellat maiores illo magnam eos.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {facilityData.map((item) => (
                    <FacilityCard 
                    key={item.id} 
                    image={item.image} 
                    title={item.title}/>
                ))}
            </div>
      
    </div>
    </section>
  )
}
