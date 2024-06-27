import Aboutus from "@/src/components/Aboutus";
import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero/Hero";
import Navbar from "@/src/components/Navbar";
import Products from "@/src/components/Products";
import Services from "@/src/components/Services";
import Testimonials from "@/src/components/Testimonials";
import Work from "@/src/components/WorkWith/Work";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Work/>
    <Aboutus/>
    <Services/>
    <Products/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
