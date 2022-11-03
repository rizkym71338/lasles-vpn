import React from "react";
import { Feature, Hero } from "../components";
import { MainLayout } from "../layouts";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Feature />
      </MainLayout>
    </>
  );
};

export default Home;
