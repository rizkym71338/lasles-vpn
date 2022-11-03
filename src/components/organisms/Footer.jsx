import React from "react";
import { LogoLaslesVpn } from "../../assets";
import FooterItem from "../../data/FooterItem";

const Footer = () => {
  return (
    <>
      <div className={`bg-[#F8F8F8] border-t border-gray-100 select-none`}>
        <section className={`max-w-6xl mx-auto w-full py-24 grid grid-cols-2`}>
          <div className={`space-y-7 flex flex-col`}>
            <img
              src={LogoLaslesVpn}
              alt={`logo-lasles-vpn`}
              className={`w-36 block cursor-pointer`}
            />
            <p
              className={`text-base font-normal text-[#4F5665] block max-w-xs`}
            >
              <span className={`font-medium`}>LaslesVPN</span> is a private
              virtual network that has unique features and has high security.
            </p>
            {/* <div>ICONS</div> */}
            <p className={`text-base font-normal text-[#AFB5C0] block`}>
              ©2022Lasles<span className={`font-medium`}>VPN</span>
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col space-y-2.5">
              <span
                className={`text-lg font-medium text-[#0B132A] mb-2.5 cursor-pointer`}
              >
                {FooterItem.product.title}
              </span>
              {FooterItem.product.item.map((item, i) => (
                <span
                  key={i}
                  className={`text-base font-normal text-[#4F5665] cursor-pointer`}
                >
                  {item.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col space-y-2.5">
              <span
                className={`text-lg font-medium text-[#0B132A] mb-2.5 cursor-pointer`}
              >
                {FooterItem.engage.title}
              </span>
              {FooterItem.engage.item.map((item, i) => (
                <span
                  key={i}
                  className={`text-base font-normal text-[#4F5665] cursor-pointer`}
                >
                  {item.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col space-y-2.5">
              <span
                className={`text-lg font-medium text-[#0B132A] mb-2.5 cursor-pointer`}
              >
                {FooterItem.earnMoney.title}
              </span>
              {FooterItem.earnMoney.item.map((item, i) => (
                <span
                  key={i}
                  className={`text-base font-normal text-[#4F5665] cursor-pointer`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
