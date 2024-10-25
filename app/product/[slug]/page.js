"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "@/components/Loading";
import axiosInstance from "@/helpers/axiosInstance";
import ProductExplore from "@/components/ProductExplore";
import { stripHtmlTags } from "@/helpers/truncate";

// === icons ===
import { TiWorld } from "react-icons/ti";
import { IoIosContact } from "react-icons/io";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CategorySection from "@/components/Category";

const page = ({ params }) => {
  const slug = params.slug;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [product, setProduct] = useState([]); // set product data
  console.log("product", product);

  const [loading, setLoading] = useState(true); // set loading
  const [error, setError] = useState(false); // set error

  const [activeSection, setActiveSection] = useState("details"); // Default to 'details'

  const showDetails = () => {
    setActiveSection("details"); // Set to 'details' on button click
  };

  const showContactForm = () => {
    setActiveSection("contact"); // Set to 'contact' on button click
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Keep the rest of the form data
      [name]: value, // Update the specific field value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Handle form submission, e.g., send data to an API
    try {
      const response = await axiosInstance.post("/contacts/create", formData); // Replace with your API endpoint

      toast.success("Your query has been submitted", {
        position: "bottom-left", // Position toast in the bottom-left corner
      });
      onClose();
      //console.log('Response:', response.data);
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      toast.error(error.response?.data || error.message);
      // console.error('Error:', error.response?.data || error.message);
      // Handle error, e.g., show an error message
    }
  };

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await axiosInstance.get(`/post?slug=${slug}`); // Use axiosInstance
        setProduct(res.data.data);
      } catch (error) {
        setError("Error", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleProduct();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const images =
    Array.isArray(product.extra_fields[0]?.meta_value) &&
    product.extra_fields[0]?.meta_value.length > 0
      ? product.extra_fields[0].meta_value
      : [product.featured_image]; // If no extra fields, fallback to featured_image

  const shortDesciption = stripHtmlTags(product.description);

  return (
    <>
      <section>
        <div className=" productImageCover py-12 md:py-28 md:mb-16">
          <div className=" container mx-auto px-3 md:px-0">
            <h1 className="text-white font-semibold md:text-4xl text-3xl">
              {product?.name}
            </h1>
            <div className="text-white  mt-3">
              <Link href={"/"}>Home /</Link>
              <span> {product.name} </span>
            </div>
          </div>
        </div>
        {/* product review  */}
        <div className="container mx-auto py-10 px-3 md:px-0 ">
          <div>
            <div className="md:flex md:gap-10">
              <CategorySection />

              <div className="md:w-[75%]">
                <div className="md:flex md:justify-between gap-5">
                  <div className=" w-4/5 mx-auto md:w-[35%]">
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      {images.map((img, index) => (
                        <div key={index} className="border border-gray-200">
                          <SwiperSlide>
                            <Image
                              src={img}
                              width={300}
                              height={300}
                              className="w-96 h-72 object-cover"
                              quality={90}
                              priority
                              alt={`Slide ${index + 1}`}
                            ></Image>
                          </SwiperSlide>
                        </div>
                      ))}
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      {Array.isArray(product.extra_fields[0]?.meta_value) &&
                        product.extra_fields[0]?.meta_value.map(
                          (img, index) => (
                            <div key={index} className="border border-gray-200">
                              <SwiperSlide>
                                <Image
                                  width={200}
                                  height={200}
                                  src={img}
                                  alt={`Slide ${index + 1}`}
                                  priority
                                ></Image>
                              </SwiperSlide>
                            </div>
                          )
                        )}
                    </Swiper>
                  </div>

                  <div className="md:w-1/2">
                    <h1 className="text-2xl font-semibold mt-5 md:mt-0 mb-5">
                      {product.name}
                    </h1>
                    <p className="leading-7 md:leading-7 text-sm md:text-base text-paraColor">
                      {shortDesciption}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="product-page mt-10">
                    {/* Buttons to switch between sections */}
                    <div className="button-group flex gap-5">
                      <button
                        className={`px-4 flex items-center gap-1 py-2 rounded-md ${
                          activeSection === "details"
                            ? "bg-navBg text-white"
                            : "bg-productBg border border-hoverborder"
                        }`}
                        onClick={showDetails}
                      >
                        <TiWorld /> Product Details
                      </button>
                      <button
                        className={`px-4 py-2 flex items-center gap-1 rounded-md  ${
                          activeSection === "contact"
                            ? "bg-navBg text-white"
                            : "bg-gray-300 border border-hoverborder"
                        }`}
                        onClick={showContactForm}
                      >
                        <IoIosContact /> Get A Quote
                      </button>
                    </div>

                    {/* Conditionally render content based on active section */}
                    <div className="content mt-4">
                      {activeSection === "details" ? (
                        <div className="details-section">
                          <div className="md:w-2/3 flex flex-col mt-10">
                            <div className="flex gap-5 border-b border-t py-3 border-hoverborder border-opacity-20">
                              <h1 className="font-semibold w-80">Parts Name</h1>
                              <p className="w-full font-medium">
                                {product?.name}
                              </p>
                            </div>
                            <div className="flex gap-5 border-b py-3 border-hoverborder border-opacity-20">
                              <h1 className="font-semibold w-80">
                                Usages Model
                              </h1>
                              <p className="w-full font-medium">8FD20 </p>
                            </div>
                            <div className="flex gap-5 border-b py-3 border-hoverborder border-opacity-20">
                              <h1 className="font-semibold w-80">
                                Usages Application
                              </h1>
                              <p className="w-full font-medium">Forklift </p>
                            </div>
                            <div className="flex gap-5 border-b py-3 border-hoverborder border-opacity-20">
                              <h1 className="font-semibold w-80">Brand</h1>
                              <p className="w-full font-medium">Toyota </p>
                            </div>
                            <div className="flex gap-5 border-b py-3 border-hoverborder border-opacity-20">
                              <h1 className="font-semibold w-80">
                                Package Name
                              </h1>
                              <p className="w-full font-medium">Unit </p>
                            </div>
                            <div className="flex gap-5 border-b py-3 border-hoverborder border-opacity-20">
                              <h1 className="font-semibold w-80">Quality</h1>
                              <p className="w-full font-medium">
                                Good Condition
                              </p>
                            </div>
                            <div className="flex gap-5 border-b py-3 border-hoverborder border-opacity-20">
                              <h1 className="font-semibold w-80">Warrenty</h1>
                              <p className="w-full font-medium">Rent Time</p>
                            </div>
                            <div className="flex gap-5 border-b py-3 border-hoverborder border-opacity-20">
                              <h1 className="font-semibold w-80">
                                Place of Origin
                              </h1>
                              <p className="w-full font-medium">
                                Made in Japan
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="contact-form-section bg-navBg p-5 md:w-1/2 rounded-md mt-10">
                          <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5"
                          >
                            <div>
                              <label
                                htmlFor="name"
                                className="text-white font-semibold"
                              >
                                Name:
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name} // Bind input value to state
                                onChange={handleChange} // Update state when input changes
                                className="border px-2 py-3 block mb-2 w-full outline-none font-semibold rounded-md text-sm"
                                placeholder="Name"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="text-white font-semibold"
                              >
                                Email:
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="border px-2 py-3 block mb-2 w-full rounded-md font-semibold text-sm outline-none"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="phone"
                                className="text-white font-semibold"
                              >
                                Phone:
                              </label>
                              <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="border px-2 py-3 block mb-2 w-full rounded-md font-semibold text-sm outline-none"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="message"
                                className="text-white font-semibold"
                              >
                                Message:
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows={4}
                                className="border px-2 py-2 block mb-2 w-full rounded-md font-semibold outline-none text-sm"
                              ></textarea>
                            </div>

                            <button
                              type="submit"
                              className="px-4 py-2 bg-white text-black border border-hoverborder mt-2 rounded-md"
                            >
                              Send
                            </button>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       {/* explore product  */}
        <div className="container mx-auto py-20 px-3 md:px-0">
          <h1 className="text-2xl font-semibold">Explore More Product</h1>

          <div className="mt-3 opacity-100">
            <ProductExplore />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
