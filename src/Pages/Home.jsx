import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Facilities from "../Components/Facilities";
import BMICalculator from "../Components/BMICalculator";
import Schedule from "../Components/Schedule";
import Reviews from "../Components/Reviews";
import JoinNow from "../Components/JoinNow";
import Coaches from "../Components/Coaches";
import Blog from "../Components/Blog";
import Gallery from "../Components/Gallery";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";    
   
function Home() {
  return (
    <>
      <Navbar />

      <main className="space-y-32">
        <Hero />
        <About />
        <Facilities />
        <BMICalculator />
        <Schedule />
        <Reviews />
        <JoinNow />
        <Coaches />
        <Blog />
        <Gallery/>
        <Contact /> 
        <Footer />   
      </main>

       
    </>
  );
}

export default Home; 