import Description from "../components/Description";
import Header from "../components/Header";
import React from "react";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
    </div>
  );
};

export default Home;
