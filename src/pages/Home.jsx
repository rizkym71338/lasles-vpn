import React from "react";
import { Feature, Hero, Network, Plan, Testimonial } from "../components";
import { MainLayout } from "../layouts";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Feature />
        <Plan />
        <Network />
        <Testimonial />
      </MainLayout>
    </>
  );
};

export default Home;
