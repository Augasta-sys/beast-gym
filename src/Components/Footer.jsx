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
            <p className="uppercase font-raleway mb-2 text-center ">Subscribe to our newsletter</p>
            <div className="bg-gray-900 font-oswald items-start flex px-4 py-3 w-full max-w-sm">
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
          <div className="flex space-x-4 -translate-y-3 mb-2 md:mb-0">
            <a href="#" className="hover:underline px-2">Terms & Conditions</a>
            <span className="px-2">|</span>
            <a href="#" className="hover:underline px-2">Privacy Policy</a>
          </div>

          
              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start gap-5 mt-2 -translate-y-3 lg:mt-10 lg:translate-y-12">

                <div className="w-9 h-9 bg-white text-black flex justify-center items-center hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
                  <FaFacebookF size={13} />
                </div>

                <div className="w-9 h-9 bg-white text-black flex justify-center items-center hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
                  <FaTwitter size={13} />
                </div>

                <div className="w-9 h-9 bg-white text-black flex justify-center items-center hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
                  <FaInstagram size={13} />
                </div>

                <div className="w-9 h-9 bg-white text-black flex justify-center items-center hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
                  <FaLinkedinIn size={13} />
                </div>

              </div>


        </div>
      </div>
    </footer>
  );
}

export default Footer;