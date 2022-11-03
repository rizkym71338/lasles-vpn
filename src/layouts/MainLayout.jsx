import React from "react";
import { Footer, Navbar } from "../components";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
