"use client";
import { useState } from "react";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    full_name: "",
    address: "",
    city: "",
    country: "",
    email: "",
    phone_no: "",
    payment_methode: "",
    tax_info: "",
  });
  // console.log(formData)
  const nextStep = () => {
    if (currentStep == 1) setCurrentStep(currentStep + 1);
    else if (currentStep == 2) console.log(formData);
  };

  const previousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col justify-center items-center">
      {/* Step Indicator */}
      <div className="flex justify-between items-center w-full mb-8">
        {[1, 2, 3].map((step, index) => (
          <div
            key={step}
            className={`flex-1 flex flex-col items-center text-center `}
          >
            {/* Step Circle */}
            <div
              onClick={() => setCurrentStep(step)}
              className={`flex items-center justify-center w-12 h-12 rounded-full cursor-pointer ${
                step === 3 && "hidden"
              } ${
                currentStep >= step
                  ? "bg-[#2f4550] text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {step}
            </div>

            {/* Step Label */}
            <div
              onClick={() => setCurrentStep(step)}
              className={`mt-2 text-sm ${
                currentStep >= step ? "font-medium" : "text-gray-400"
              }`}
            >
              {(step === 1 && "Billing Info") ||
                (step === 2 && "Payment") ||
                (step === 3 && "congratulation")}
            </div>

            {/* Line Between Steps */}
            {index < 2 && (
              <div className="w-full h-1 bg-gray-200 mt-2">
                <div
                  className={`h-full ${
                    currentStep > step ? "bg-[#2f4550]" : "bg-gray-200"
                  }`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="w-full p-4 border rounded-lg mb-8">
        {currentStep === 1 && (
          <form className="grid grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="col-span-2">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* City and Country */}
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Email and Phone */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone No</label>
              <input
                type="text"
                name="phone_no"
                value={formData.phone_no}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </form>
        )}
        {currentStep === 2 && (
          <div>
            {/* Payment Method */}
            <div className="col-span-2">
              <label className="block text-sm font-medium">
                Payment Method
              </label>
              <select
                name="payment_methode"
                value={formData.payment_methode}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Payment Method</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Bank Wire">Bank Wire</option>
                <option value="Cash on delivery">Cash on delivery</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full">
        <button
          onClick={previousStep}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={
            (currentStep === 1 &&
              (!formData.full_name ||
                !formData.address ||
                !formData.city ||
                !formData.country ||
                !formData.email ||
                !formData.phone_no)) ||
            (currentStep === 2 && !formData.payment_methode)
          }
          className="px-4 py-2 bg-[#2f4550] text-white rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
