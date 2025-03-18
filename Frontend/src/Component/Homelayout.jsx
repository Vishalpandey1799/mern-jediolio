import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import Review from "../pages/Review/Review";

const Homelayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); 
    }
  }, [location]);

  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="reviews">
          <Review/>
      </div>
    </>
  );
};

export default Homelayout;
