import { useState } from "react";
import gallery1 from "../assets/Images/gallery1.png";
import gallery2 from "../assets/Images/gallery2.png";
import gallery3 from "../assets/Images/gallery3.png";
import gallery4 from "../assets/Images/gallery4.png";
import gallery5 from "../assets/Images/gallery5.png";

function Gallery() {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section id="gallery"className="hidden md:block translate-x-2 lg:translate-y-140 w-full">
      {/* BACKGROUND SECTION */}
      <div className="relative h-[400px] sm:h-[500px] bg-cover bg-center transition-all duration-500"
           style={{ backgroundImage: `url(${activeImage})` }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* THUMBNAILS - Positioned Over the Background */}
        <div className="absolute bottom-[30px] left-30 right-0 py-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className={`cursor-pointer border-2 transition-all duration-300 rounded-md overflow-hidden ${
                    activeImage === img 
                      ? "border-none scale-105" 
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt="gallery" className="w-[120px] h-[80px] hover:transition-all duration-500 hover:scale-160 translate-y-5
             object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;