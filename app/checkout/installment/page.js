"use client"; // Add this line to mark the component as a Client Component

import React, { useState } from 'react';

const Installment = () => {
    // State to handle profile data
    const [profile, setProfile] = useState({
        name: '',
        phone: '',
        address: '',
        idCard: '',  // ID card number
        passport: '', // Passport number
        visa: '',     // Visa number
        profileImage: null, // Profile image
        sellerImage: null,  // Seller image
        salary: '',        // Seller's monthly salary
    });

    // State to handle the payment plan selection and calculations
    const [paymentPlan, setPaymentPlan] = useState('');
    const [calculatedPayment, setCalculatedPayment] = useState({ advance: 0, installment: 0 });

    // Handle input changes for profile
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    // Handle file upload
    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setProfile({ ...profile, [name]: file });
    };




// Handle payment plan selection
const handlePaymentPlan = (e) => {
    const plan = e.target.value;
    setPaymentPlan(plan);
    const baseAmount = 200; // Fixed price of $200
    let advance, installment, totalInstallments;
    
    // Calculate advance and installments based on the selected plan
    if (plan === '3 months') {
        advance = baseAmount * 0.7; // 70% advance for 3 months
        installment = (baseAmount * 0.3) / 3; // Remaining 30% paid as $20 per month
        totalInstallments = 3;
    } else if (plan === '6 months') {
        advance = baseAmount * 0.7; // 70% advance for 6 months
        installment = (baseAmount * 0.3) / 6; // Remaining 30% paid as $10 per month
        totalInstallments = 6;
    } else if (plan === '1 year') {
        advance = baseAmount * 0.7; // 70% advance for 1 year
        installment = (baseAmount * 0.3) / 12; // Remaining 30% paid as $5 per month
        totalInstallments = 12;
    }

    // Log the calculated values
    console.log(`Advance: $${advance}, Installment: $${installment.toFixed(2)}, Total Installments: ${totalInstallments}`);
    
    // Set the calculated values in state
    setCalculatedPayment({ advance, installment, totalInstallments });
};











    // Save profile data
    const saveProfile = () => {
        // Here you can implement the logic to save the profile data
        console.log('Profile Data:', profile);
        console.log('Payment Plan:', paymentPlan);
        console.log('Calculated Payment:', calculatedPayment);
    };

    return (
        <div className="container mx-auto my-10">
            <div className="flex">
                {/* Left Section: User Details and Form */}
                <div className="w-2/3 bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Performa</h1>

                    {/* User Information Form */}
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Your Information</h2>
                    <form>
                        {/* User Details */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-semibold">Phone:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-700 font-semibold">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={profile.address}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                            />
                        </div>

                        {/* Document Inputs */}
                        <div className="mb-4">
                            <label htmlFor="idCard" className="block text-gray-700 font-semibold">ID Card Number:</label>
                            <input
                                type="text"
                                id="idCard"
                                name="idCard"
                                value={profile.idCard}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="passport" className="block text-gray-700 font-semibold">Passport Number:</label>
                            <input
                                type="text"
                                id="passport"
                                name="passport"
                                value={profile.passport}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="visa" className="block text-gray-700 font-semibold">Visa Number:</label>
                            <input
                                type="text"
                                id="visa"
                                name="visa"
                                value={profile.visa}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                            />
                        </div>

                        {/* Images Upload */}
                        <div className="mb-4">
                            <label htmlFor="profileImage" className="block text-gray-700 font-semibold">Upload Passport, Visa, ID Card</label>
                            <input
                                type="file"
                                id="profileImage"
                                name="profileImage"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="sellerImage" className="block text-gray-700 font-semibold">Upload Seller's Image:</label>
                            <input
                                type="file"
                                id="sellerImage"
                                name="sellerImage"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                            />
                        </div>

                        {/* Monthly Salary Input */}
                        <div className="mb-4">
                            <label htmlFor="salary" className="block text-gray-700 font-semibold">Seller's Monthly Salary:</label>
                            <input
                                type="text"
                                id="salary"
                                name="salary"
                                value={profile.salary}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                            />
                        </div>

                        {/* Save Changes Button */}
                        <div className="flex justify-center mt-4">
                            <button type="button" onClick={saveProfile} className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-200">
                                Submit Performa
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section: Payment Plan Card */}
                <div className="w-1/3 bg-indigo-100 p-8 ml-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Plan</h2>

                    {/* Plan Selection */}
                    <label htmlFor="plan" className="block text-gray-700 font-semibold mb-2">Choose a Plan:</label>
                    <select
                        id="plan"
                        name="plan"
                        value={paymentPlan}
                        onChange={handlePaymentPlan}
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                    >
                        <option value="">Select Plan</option>
                        <option value="3 months">3 Months</option>
                        <option value="6 months">6 Months</option>
                        <option value="1 year">1 Year</option>
                    </select>

                    {/* Display Calculations */}
                    {paymentPlan && (
                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-gray-800">Payment Details:</h3>
                            <p>Advance Payment: ${calculatedPayment.advance.toFixed(2)}</p>
                            <p>Installments per Period: ${calculatedPayment.installment.toFixed(2)}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Installment;