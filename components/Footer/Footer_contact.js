import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Importing icons from react-icons

export default function Footer_contact() {
    return (
        <div>
            <div className='h-42 w-full  bg-primary text-white'>
                <div className='flex justify-between px-10 '>
                    <div className='left'>
                        <h1 className='text-xl font-bold'>We're Always Here To Help</h1>
                        <p>Reach out to us through any of these support channels</p>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <a href='' className='hover:text-orange-100'>
                            <div className='flex items-center px-20'>
                                <FaEnvelope className='text-xl mr-2' /> {/* Email icon */}
                                <div>
                                    <p>Customer Happiness</p>
                                    <h1>Help.Souqbay.com</h1>
                                </div>
                            </div>
                                </a>
                        </div>
                            <a href='' className='hover:hover:text-orange-100' >
                        <div className='flex items-center'>
                            <FaPhone className='text-xl mr-2' /> {/* Phone icon */}
                            <div>
                                <p>Customer Happiness</p>
                                <h1>Help.Souqbay.com</h1>
                            </div>
                        </div>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
