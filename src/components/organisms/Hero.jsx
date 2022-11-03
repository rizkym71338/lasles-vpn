import React from "react";
import {
  IconLocation,
  IconServer,
  IconUser,
  IllustrationHero,
} from "../../assets";
import ButtonFIll from "../atoms/ButtonFill";

const Hero = () => {
  return (
    <>
      <div className={`bg-white py-28`}>
        <section className={`max-w-6xl mx-auto w-full`}>
          <div className={`grid grid-cols-2 gap-20`}>
            <div className={`flex flex-col space-y-12`}>
              <div className={`flex flex-col space-y-5`}>
                <h1 className={`text-5xl font-medium text-[#0B132A]`}>
                  Want anything to be easy with{" "}
                  <span className={`font-bold`}>LaslesVPN.</span>
                </h1>
                <p className={`text-base font-normal text-[#4F5665]`}>
                  Provide a network for all your needs with ease and fun using{" "}
                  <span className={`font-medium`}>LaslesVPN</span> discover
                  interesting features from us.
                </p>
              </div>
              <ButtonFIll text={`Get Started`} />
            </div>
            <div>
              <img
                src={IllustrationHero}
                alt={`illustration-hero`}
                className={`w-full block`}
              />
            </div>
          </div>
        </section>
      </div>
      <div className={`bg-white mb-28`}>
        <section className={`max-w-6xl mx-auto w-full drop-shadow-lg`}>
          <div
            className={`w-full py-9 rounded-xl bg-white border border-gray-100 grid grid-cols-3 place-items-center`}
          >
            <div
              className={`w-full flex items-center justify-center space-x-9`}
            >
              <div className="w-12 h-12 rounded-full bg-[#FFECEC] flex items-center justify-center">
                <IconUser className={`w-6 h-6 fill-[#F53838]`} />
              </div>
              <div className="flex flex-col space-y-1">
                <span className={`text-2xl font-bold text-[#0B132A]`}>90+</span>
                <span className={`text-xl font-normal text-[#4F5665]`}>
                  Users
                </span>
              </div>
            </div>
            <div
              className={`border-x-2 border-[#EEEFF2] w-full flex items-center justify-center space-x-9`}
            >
              <div className="w-12 h-12 rounded-full bg-[#FFECEC] flex items-center justify-center">
                <IconLocation className={`w-6 h-6 fill-[#F53838]`} />
              </div>
              <div className="flex flex-col space-y-1">
                <span className={`text-2xl font-bold text-[#0B132A]`}>30+</span>
                <span className={`text-xl font-normal text-[#4F5665]`}>
                  Locations
                </span>
              </div>
            </div>
            <div
              className={`w-full flex items-center justify-center space-x-9`}
            >
              <div className="w-12 h-12 rounded-full bg-[#FFECEC] flex items-center justify-center">
                <IconServer className={`w-6 h-6 fill-[#F53838]`} />
              </div>
              <div className="flex flex-col space-y-1">
                <span className={`text-2xl font-bold text-[#0B132A]`}>50+</span>
                <span className={`text-xl font-normal text-[#4F5665]`}>
                  Servers
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
