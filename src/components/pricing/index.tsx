import React from "react";
import { PlusOutlined, TickIcon } from "../common/icons";
import FAQ from "./FAQ";

const Pricing = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <div className="text-center my-10">
        <h1 className="text-[28px] font-medium text-[#6F42C1E5]">
          Growth Plans
        </h1>
        <span className="text-[#000000] text-[36px] inter-text">
          Pricing Based On Your Success
        </span>
        <p className="text-[#00000080]  text-[24px] font-semibold text-base inter-text">
          Choose the plan that best suits your needs <br />
          and get started today
        </p>
      </div>

      {/* Pricing Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-around items-center p-4 sm:p-6">
        {/* Free Plan */}
        <div className="w-full h-[650px] border border-gray-200 shadow-md p-6 bg-white flex flex-col justify-between rounded-[26.94px] ">
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold">Free</h3>
            </div>
            <p className="text-3xl font-bold">$0</p>
            <span className="text-[#6F7988] text-[12px]">Per user/ month</span>
            <button className="w-full text-black bg-transparent mt-4 border border-[##CAD0D9] hover:bg-[#6F42C1E5] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Start for free
            </button>

            <ul className="my-6 space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center ">
                  <TickIcon />
                </span>
                <span> Access to basic AI chatbot functionalities</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                General guidance on college application process
              </li>
              <li className="flex items-center gap-2 ">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                Limited support resources Community access for peer interaction
              </li>
              <li className="flex items-center gap-2 ">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                Community access for peer interaction
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="w-full h-[650px] border border-gray-200 shadow-md p-6 bg-white flex flex-col justify-between rounded-[26.94px] ">
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold">Pro</h3>
            </div>
            <p className="text-3xl font-bold">$29</p>
            <span className="text-[#6F7988] text-[12px]">
              Per user/month, billed annually
            </span>
            <button className="w-full text-whitebg-transparent border border-[#CAD0D9]  mt-4 hover:bg-[#6F42C1E5] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Get Started
            </button>
            <ul className="my-6 space-y-2">
              <li className="flex items-center gap-2 ">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>
                <span>Enhanced AI chatbot capabilities</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>
                Essay review and feedback assistance
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                Priority email support
              </li>
              <li className="flex items-center gap-2 opacity-50">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                Access to exclusive webinars and workshops
              </li>
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div
          className="w-full h-[650px] border border-gray-200 shadow-md p-6 bg-white flex flex-col justify-between rounded-[26.94px]
         "
          style={{
            borderRadius: "26.94px",
            borderWidth: "1.35px",
            boxShadow: "0 0 15px rgba(111, 66, 193, 0.5)",
          }}
        >
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold">Enterprise</h3>
            </div>
            <p className="text-3xl font-bold">$99</p>
            <span className="text-[#6F7988] text-[12px]">
              Per user/month, billed annually
            </span>
            <button className="w-full text-white mt-4 bg-[#6F42C1E5] hover:bg-[#6F42C1E5] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Continue with pro
            </button>
            <ul className="my-6 space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                <p className="inter-text text-[#505967]">
                  {" "}
                  Full access to AI chatbot with advanced features
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                <p className="inter-text text-[#505967] lg:text-[14px]">
                  Personalized mentorship from college application experts
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                <p className="inter-text text-[#505967]">
                  Unlimited essay review and feedback assistance
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                <p className="inter-text text-[#505967] ">
                  Priority email and chat support
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                <p className="inter-text text-[#505967] ">
                  {" "}
                  Exclusive access to live Q&A sessions with industry
                  professionals
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                <p className="inter-text text-[#505967] ">
                  Scholarship and financial aid guidance
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="w-full h-[650px] border border-gray-200 shadow-md p-6 bg-white flex flex-col justify-between rounded-[26.94px]
         "
        >
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold">Enterprise</h3>
            </div>
            <p className="text-3xl font-bold">$99</p>
            <span className="text-[#6F7988] text-[12px]">
              Per user/month, billed annually
            </span>
            <button className="w-full  mt-4 text-whitebg-transparent border border-[#CAD0D9] hover:bg-[#6F42C1E5] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Get Started
            </button>
            <ul className="my-6 space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center ">
                  <TickIcon />
                </span>{" "}
                <span className="inter-text"> Unlimited Links</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                Custom Analytics Platform
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                24/7 Priority Support
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300  rounded-md  p-1 flex items-center justify-center">
                  <TickIcon />
                </span>{" "}
                Team & Collaboration Tools
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Pricing;
