import heroImage from "../assets/Images/Hero.png";

function Hero() {

    return (
    <section className="relative h-screen pt-32 pb-24 bg-cover bg-center overflow-hidden"
     style={{
        backgroundImage: `url(${heroImage})`,}}>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute left-70 top-[30%] z-20 hidden lg:flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex justify-center items-center">
        <div className="text-white text-4xl ml-1"> ▶</div>
        </div>
        
        <p className="text-white font-bold tracking-widest rotate-270 translate-y-20">PLAY VIDEO</p>
        </div>
    

        <div className="relative z-10 h-full flex items-center">
            <div className="ml-[36%] -mt-24">
                <p className="text-red-500 text-2xl indent-110 mb-3 uppercase">Cardio</p>
                <h1 className="text-white text-4xl indent-110 lg:text-4xl font-bold leading-tight">LIVE IT</h1>
                    <h1 className="text-white text-4xl indent-110 lg:text-4xl font-bold leading-tight">LIKE A ROCK!</h1>
            </div>
        </div>

        <div className="absolute bottom-0 bg-white h-15 w-[50%] flex items-start justify-start gap-10">
            <span className="text-3xl font-bold">1</span>
            <span className="text-gray-400 text-3xl">/4</span>
            <div className="w-72 h-[2px] bg-gray-300"></div>
            <button className="text-4xl">←</button>
            <button className="text-4xl">→</button>
        </div>
    </section>
    );
}

export default Hero;