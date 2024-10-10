"use client";
import { Context } from "@/Context/Context";
import React, { useState } from "react";
import { useContext } from "react";

export default function TrackingID() {
  const { tracking, setTracking, TrackingData, setTrackingData } =
    useContext(Context);
  const [steps, setSteps] = useState(4);

 
  return (
    <div>
      {tracking ? (
        <div className="container mx-auto p-4 sm:p-10 fixed inset-0 z-20 flex items-center justify-center">
          {/* Blur Background */}
          <div
            onClick={() => setTracking(false)}
            className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-sm z-10 w-full"
          ></div>

          {/* Main Modal Content */}
          <div className="relative z-30 bg-white shadow-lg rounded-lg p-4 sm:p-8 w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
              Track Your Order
            </h1>
            <h2 className="text-center text-lg sm:text-xl mb-4 sm:mb-6">
              #{TrackingData?.data?.data?.tracking_no}
            </h2>

            <div className="flex flex-wrap justify-center sm:pl-10 lg:pl-16">
              {/* Stepper */}
              {["Placed", "Processing", "Dispatched", "Completed"].map(
                (step, index) => (
                  <div
                    onClick={() => console.log(TrackingData?.data?.data)}
                    key={index}
                    className="w-1/4 flex flex-col items-center mb-4 sm:mb-0"
                  >
                    <div
                      className={`w-8 h-8 rounded-full ${
                        TrackingData?.data?.data?.order?.order_status === step
                          ? "bg-red-500 text-white"
                          : "bg-gray-300 text-black"
                      } flex items-center justify-center mb-2`}
                    >
                      {index + 1}
                    </div>
                    <div className="w-full flex flex-col items-center">
                      <div
                        className={`w-full border-t-2 ${
                          TrackingData?.data?.data?.order?.order_status === step
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      ></div>
                      <span className="text-sm font-medium mt-2">{step}</span>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Order Details */}
            <div
              className={`flex flex-col sm:flex-row justify-between mt-6 sm:mt-10`}
            >
              <div className="flex-1 p-4 ">
                {[
                  {
                    label: "Tracking ID:",
                    value: `# ${TrackingData?.data?.data?.tracking_no}`,
                  },
                  {
                    label: "Ordered Items:",
                    value: TrackingData?.data?.data?.order?.ordered_items,
                  },
                  {
                    label: "Delivery Status:",
                    value: TrackingData?.data?.data?.order?.order_status,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex justify-center mt-4 ">
                    <h1 className="w-32 sm:w-48 text-base sm:text-lg text-center">
                      {item.label}
                    </h1>
                    <h1 className="text-base sm:text-lg font-semibold">
                      {item.value}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
