import { useState } from "react";
import logoWhite from "../assets/Images/logoWhite.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-8 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-8 lg:px-14 py-6 flex justify-around items-center w-full">

        {/* Logo */}
        <img
  src={logoWhite}
  alt="Logo"
  className="w-28 -translate-x-20 md:w-36 lg:-translate-x-5 ml-8"
/>

        {/* Desktop Menu */}
      <ul
className="
hidden
lg:flex
gap-5
text-white
font-medium
uppercase
text-sm
translate-x-60
ml-auto
mr-12
"
>

          <li><a href="#about" className="hover:text-red-500">About</a></li>
          <li><a href="#facilities" className="hover:text-red-500">Facilities</a></li>
          <li><a href="#bmi" className="hover:text-red-500">BMI</a></li>
          <li><a href="#schedule" className="hover:text-red-500">Schedule</a></li>
          <li><a href="#review" className="hover:text-red-500">Review</a></li>
          <li><a href="#coaches" className="hover:text-red-500">Coaches</a></li>
          <li><a href="#blog" className="hover:text-red-500">Blog</a></li>
          <li><a href="#gallery" className="hover:text-red-500">Gallery</a></li>

        </ul>

        {/* Join Button Desktop */}
        <a
href="#joinnow"
className="
hidden
lg:block
bg-red-500
px-14
py-4
pt-8
ml-8
text-white
font-bold
translate-x-25
min-w-[100px]
min-h-[40px]
text-center
content-center
"
>
JOIN NOW
</a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl translate-x-20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 text-white">

          <ul className="flex flex-col items-center py-6 gap-5 uppercase">

            <li><a href="#about">About</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#bmi">BMI</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#review">Review</a></li>
            <li><a href="#coaches">Coaches</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#gallery">Gallery</a></li>

            <a
              href="#joinnow"
              className="bg-red-600 px-6 py-3"
            >
              JOIN NOW
            </a>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar; 
