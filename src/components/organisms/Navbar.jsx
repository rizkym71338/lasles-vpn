import React from "react";
import { LogoLaslesVpn } from "../../assets";
import { NavbarItem } from "../../data";
import { ButtonOutline } from "../atoms";

const Navbar = () => {
  return (
    <>
      <div
        className={`bg-white border-b border-gray-100 select-none sticky top-0 z-40`}
      >
        <section
          className={`max-w-6xl w-full mx-auto py-6 flex items-center justify-between`}
        >
          <img
            src={LogoLaslesVpn}
            alt={`logo-lasles-vpn`}
            className={`w-36 block cursor-pointer`}
          />
          <div className={`flex items-center justify-center space-x-10`}>
            {NavbarItem.map((item, i) => (
              <span
                key={i}
                className={`block text-base font-normal text-[#4F5665] cursor-pointer hover:text-[#F53855] transition-all duration-300 ease-in-out`}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className={`flex items-center justify-center space-x-7`}>
            <span
              className={`text-base block font-medium text-[#0B132A] cursor-pointer`}
            >
              Sign In
            </span>
            <ButtonOutline text={`Sign Up`} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
