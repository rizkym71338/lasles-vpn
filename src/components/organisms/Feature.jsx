import React from "react";
import { IllustrationFeature } from "../../assets";

const Feature = () => {
  return (
    <>
      <div className={`bg-white mb-28`}>
        <section className={`max-w-6xl mx-auto w-full`}>
          <div className={`grid grid-cols-2 gap-32`}>
            <div>
              <img
                src={IllustrationFeature}
                alt={`illustration-feature`}
                className={`w-full block`}
              />
            </div>
            <div
              className={`flex flex-col justify-center space-y-2.5 max-w-sm mx-auto`}
            >
              <h1 className={`text-4xl font-medium text-[#0B132A]`}>
                We Provide Many Features You Can Use
              </h1>
              <p className={`text-base font-normal text-[#4F5665]`}>
                You can explore the features that we provide with fun and have
                their own functions each feature.
              </p>
              <div className={`space-y-4 text-sm font-normal text-[#4F5665]`}>
                <p>✅ Powerfull online protection.</p>
                <p>✅ Internet without borders.</p>
                <p>✅ Supercharged VPN.</p>
                <p>✅ No specific time limits.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Feature;
