import logo from "../assets/Images/logoBlack.png";
// Import social media icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black translate-y-120 lg:translate-y-180 text-white py-20">
      <div className="max-w-7xl leading-10 mx-auto px-6">

        {/* Main section: Logo, Subscribe, Email */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">

          {/* Logo */}
          <div className="flex justify-center md:justify-start mb-4 md:mb-0 w-full md:w-auto">
            <img src={logo} alt="Beast Logo" className="w-28" />
          </div>
{/* 
          {/* Subscribe to newsletter */}
          <div className="flex flex-col items-center md:items-center md:flex-1 lg:flex lg:flex-row lg:justify-end px-4 mb-4 md:mb-0">
            <p className="uppercase mb-2 text-center ">Subscribe to our newsletter</p>
            <div className="bg-gray-900  flex px-4 py-3 w-full max-w-sm">
              <input
                placeholder="Your Email"
                className="bg-transparent outline-none flex-1 text-center"
              />
              {/* Arrow button */}
              <button className="ml-2 cursor-pointer" onClick={() => alert('Subscribed!')}>
                → {/* You can replace this with an icon or custom button */}
              </button>
            </div>
          </div> 

        </div>

        {/* Break line */}
        <hr className="my-10 border-gray-800" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-400 mb-2 md:mb-0">© Beast 2019 All Rights Reserved</p>
          <div className="flex space-x-4 mb-2 md:mb-0">
            <a href="#" className="hover:underline px-2">Terms & Conditions</a>
            <span className="px-2">|</span>
            <a href="#" className="hover:underline px-2">Privacy Policy</a>
          </div>

          {/* Social Media Icons */}
        <div className="flex flex-row md:flex-row md:justify-end md:items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <a href="#" className="hover:text-red-600">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaLinkedinIn size={20} />
          </a>
        </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;