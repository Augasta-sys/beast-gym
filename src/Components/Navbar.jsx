import LogoWhite from "../assets/Images/LogoWhite.png";

function Navbar(){

    return (
        <nav className="absolute top-5 left-0  w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-evenly items-center px-8 py-6">
                <img src={LogoWhite} alt="Beast Logo" className="w-44" />
                
                <ul className="hidden lg:flex gap-5 text-white text-sm uppercase font-medium">
                    <li className="hover:text-red-500 cursor-pointer">About Us</li>
                    <li className="hover:text-red-500 cursor-pointer">Facilities</li>
                    <li className="hover:text-red-500 cursor-pointer">BMI</li>
                    <li className="hover:text-red-500 cursor-pointer">Schedule</li>
                    <li className="hover:text-red-500 cursor-pointer">Reviews</li>
                    <li className="hover:text-red-500 cursor-pointer">Coaches</li>
                    <li className="hover:text-red-500 cursor-pointer">Blog</li>
                    <li className="hover:text-red-500 cursor-pointer">Gallery</li>
                </ul>
                <button className="bg-red-600 text-white p-10 w-1/12 h-10 font-semibold hover:bg-red-700">JOIN NOW</button>
            </div>
        </nav>
    );
}

export default Navbar;