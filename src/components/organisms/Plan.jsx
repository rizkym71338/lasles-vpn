import React from "react";
import { IconCheck, IllustrationPlan } from "../../assets";
import { PlanItem } from "../../data";
import { ButtonOutline } from "../atoms";

const Plan = () => {
  return (
    <>
      <div className={`bg-gray-50/30`}>
        <section className={`max-w-6xl mx-auto w-full`}>
          <div className={`py-20 space-y-14`}>
            <div className={`space-y-5`}>
              <h2 className={`text-4xl font-medium text-[#0B132A] text-center`}>
                Choose Your Plan
              </h2>
              <p
                className={`text-base font-normal text-[#4F5665] text-center max-w-lg mx-auto`}
              >
                Let's choose the package that is best for you and explore it
                happily and cheerfully.
              </p>
            </div>
            <div className={`grid grid-cols-3 gap-12`}>
              {PlanItem.map((plan, i) => (
                <div
                  key={i}
                  className={`bg-white border-2 border-[#DDDDDD] hover:border-[#F53838] transition-all duration-300 ease-in-out rounded-xl p-12 min-h-[760px]`}
                >
                  <div className={`flex flex-col justify-between h-full`}>
                    <div className={`flex flex-col items-center space-y-8`}>
                      <img
                        src={IllustrationPlan}
                        alt={`illustration-plan`}
                        className={`block w-36`}
                      />
                      <span className={`text-lg font-medium text-[#0B132A]`}>
                        {plan.name}
                      </span>
                      <div className={`space-y-4`}>
                        {plan.item.map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-center space-x-5`}
                          >
                            <IconCheck className={`w-6 h-6 stroke-[#2FAB73]`} />
                            <span
                              className={`text-sm font-normal text-[#4F5665]`}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`space-y-5`}>
                      {plan.price == "Free" ? (
                        <span
                          className={`text-2xl font-medium block text-center text-[#0B132A]`}
                        >
                          {plan.price}
                        </span>
                      ) : (
                        <p
                          className={`text-2xl font-normal text-center text-[#0B132A]`}
                        >
                          <span className={`font-medium`}>{plan.price}</span> /
                          mo
                        </p>
                      )}
                      <div className={`flex justify-center`}>
                        <ButtonOutline text={`Select`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Plan;
