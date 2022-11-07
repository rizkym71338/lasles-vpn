import React from "react";
import { Feature, Hero, Network, Plan } from "../components";
import { MainLayout } from "../layouts";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Feature />
        <Plan />
        <Network />
      </MainLayout>
    </>
  );
};

export default Home;
