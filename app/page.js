import Aboutus from "@/src/components/Aboutus";
import Hero from "@/src/components/Hero/Hero";
import Products from "@/src/components/Products";
import Services from "@/src/components/Services";
import Testimonials from "@/src/components/Testimonials";
import Work from "@/src/components/WorkWith/Work";

export default function Home() {
  return (
    <>
    <Hero/>
    <Work/>
    <Aboutus/>
    <Services/>
    <Products/>
    <Testimonials/>
    </>
  );
}
