import Aboutus from "@/src/components/Aboutus";
import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero/Hero";
import Navbar from "@/src/components/Navbar";
import Testimonials from "@/src/components/Testimonials";
import Work from "@/src/components/WorkWith/Work";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Work/>
    <Aboutus/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
