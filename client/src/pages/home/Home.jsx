import React from "react";
import Banner from "../../components/Banner";
import Category from "./Category";
import SpecialProduct from "./SpecialProduct";
import Testimonials from "./Testimonials";
import OurService from "./OurService";
const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <SpecialProduct />
      <Testimonials />
      <OurService />
    </>
  );
};

export default Home;
