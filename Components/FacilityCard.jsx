function FacilityCard ({image, title}) {
    return (
        <div className="relative pt-32 pb-24 overflow-hidden rounded-lg">
            <img src={image} alt={title} className="w-full h-[350px] object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>

            <h2 className="absolute bottom-0 left-6 text-white text-2xl uppercase font-bold">{title}</h2>

        </div>
    )
}

export default FacilityCard;