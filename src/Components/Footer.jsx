import logo from "../assets/Images/LogoBlack.png";

function Footer(){

return(

<footer className="bg-black pt-32 pb-24  text-white py-14">

<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-10 items-center">


<div>
<img src={logo} alt="" className="w-[120px]"/>
</div>


<div>
<p className="uppercase text-sm">Subscribe to our newsletter</p>
</div>

<div className="bg-gray-900 flex justify-between items-center px-5 py-4">
<input placeholder="YOUR EMAIL" className="bg-transparent outline-none"/>

<span>→</span>

</div>

</div>

<hr className="border-gray-800 my-10"/>

<div className="flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-400">
<p>© Beast 2019 All Rights Reserved.</p>

<div className="flex gap-6">
<p>TERMS & CONDITIONS</p>
<p>PRIVACY POLICY</p>
</div>

<div className="flex gap-4">
<span>f</span>
<span>x</span>
<span>◎</span>
<span>in</span>
</div>

</div>

</div>

</footer>

)

}

export default Footer;