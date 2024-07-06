import Aboutus from "@/components/Aboutus";
import Gallary from "@/components/Gallary";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
    <Hero/>
    <Work/>
    <Aboutus/>
    <Services/>
    <Products/>
    <Testimonials/>
    {/* <Gallary/> */}
    </>
  );
}
