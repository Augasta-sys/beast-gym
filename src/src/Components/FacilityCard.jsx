function FacilityCard({image,title}) {

return (

<div
className="
relative
overflow-hidden
rounded-lg
group
"
>

<img
src={image}
alt={title}
className="
w-full
h-[250px]
md:h-[280px]
object-cover
transition-transform
duration-500
group-hover:scale-110
"
/>

<div className="absolute inset-0 bg-black/40"></div>

<h2
className="
absolute
bottom-5
left-5
text-white
text-lg
md:text-xl
lg:text-2xl
uppercase
font-bold
"
>
{title}
</h2>

</div>

);

}

export default FacilityCard;