function Contact() {
    return (
        <section className="bg-[#f5f5f5] translate-y-100 lg:translate-y-150 lg:translate-x-10 pt-32 pb-24 px-4 lg:py-28">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Heading: Centered on mobile, left on desktop */}
                    <div className="text-center lg:text-left">
                        <p className="text-red-600 font-oswald uppercase text-xl mb-4 font-semibold tracking-wider">
                            CONTACT US
                        </p>
                        <h2 className="text-3xl font-oswald font-bold leading-relaxed mb-4">
                            GET IN TOUCH <br/>
                            <span className="text-red-600 font-oswald leading-relaxed">REACH OUT TO US</span>
                        </h2>
                    </div>

                    {/* Form Fields: Centered container with inputs aligned left */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-md font-oswald space-y-8">
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="w-full bg-transparent border-b border-gray-400 leading-20 py-4 outline-none text-left placeholder:text-left"
                            />
                            <input 
                                type="email" 
                                placeholder="EMAIL" 
                                className="w-full bg-transparent border-b border-gray-400 leading-20 py-4 outline-none text-left placeholder:text-left"
                            />
                            <textarea 
                                placeholder="MESSAGE" 
                                rows="2" 
                                className="w-full bg-transparent border-b border-gray-400 leading-20 py-4 outline-none resize-none text-left placeholder:text-left"
                            />
                            <button className="bg-red-600 text-white font-oswald text-2xl w-full py-5 font-semibold mt-6 transition-colors hover:bg-red-700">
                                SEND MESSAGE →
                            </button>
                        </div>
                    </div> 

                </div> 
            </div> 
        </section>
    );
} 

export default Contact;