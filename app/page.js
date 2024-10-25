import Aboutus from "@/components/Aboutus";
import Slider from "@/components/Slider";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Slider />
      <Work />
      <Services />
      <Products />
      <Aboutus />
      <Testimonials />
    </>
  );
}
