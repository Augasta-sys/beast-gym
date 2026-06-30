function Contact() {

return(

<section className="bg-[#f5f5f5] pt-32 pb-24 py-28">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16 items-center">

{/* Left */}

<div>

<p className="text-red-600 uppercase text-sm mb-6">
CONTACT US
</p>

<h2 className="text-4xl font-bold leading-relaxed">

GET IN TOUCH

<br/>

<span className="text-red-600">

REACH OUT TO US

</span>

</h2>

</div>


{/* Right */}

<div className="space-y-8">

<input
type="text"
placeholder="Name"
className="w-full bg-transparent border-b border-gray-400 py-4 outline-none"
/>

<input
type="email"
placeholder="EMAIL"
className="w-full bg-transparent border-b border-gray-400 py-4 outline-none"
/>

<textarea
placeholder="MESSAGE"
rows="3"
className="w-full bg-transparent border-b border-gray-400 py-4 outline-none resize-none"
/>

<button
className="bg-red-600 text-white w-full py-5 font-semibold mt-6"
>

SEND MESSAGE →

</button>

</div>

</div>

</div>

</section>

)

}

export default Contact;