import Image from 'next/image'
import React from 'react'

export default function Country_card() {
    return (
        <div>
            <div id="" className="pt-4 pb-4">
                <section className="mb-4">
                    <div className="container mx-auto">
                        <div className="p-4 shadow-sm rounded">
                            <div className="flex items-center justify-between border-b mb-3">
                                <h3 className="text-lg font-bold">
                                    <span className="border-b-2 border-red-500">Choose Your Suppliers By Regions</span>
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                                <div className="text-center">
                                    <a href=""
                                        className="flex items-center bg-white border border-gray-200 hover:shadow-md p-3 rounded transition-all">
                                        <Image height={100} src="https://moyenxpress.com/public/uploads/flags/af.webp" alt="Afghanistan" width="40"
                                            className="mr-2"/>
                                            <span className="font-semibold">Afghanistan</span>
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a href=""
                                        className="flex items-center bg-white border border-gray-200 hover:shadow-md p-3 rounded transition-all">
                                        <Image height={100} src="https://moyenxpress.com/public/uploads/flags/al.webp" alt="Albania" width="40" className="mr-2"/>
                                            <span className="font-semibold">Albania</span>
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a href=""
                                        className="flex items-center bg-white border border-gray-200 hover:shadow-md p-3 rounded transition-all">
                                        <Image height={100} src="https://moyenxpress.com/public/uploads/flags/dz.webp" alt="Algeria" width="40"
                                            className="mr-2"/>
                                            <span className="font-semibold">Algeria</span>
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a href=""
                                        className="flex items-center bg-white border border-gray-200 hover:shadow-md p-3 rounded transition-all">
                                        <Image height={100} src="https://moyenxpress.com/public/uploads/flags/as.webp" alt="American Samoa" width="40"
                                            className="mr-2"/>
                                            <span className="font-semibold">American Samoa</span>
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a href=""
                                        className="flex items-center bg-white border border-gray-200 hover:shadow-md p-3 rounded transition-all">
                                        <Image height={100} src="https://moyenxpress.com/public/uploads/flags/ad.webp" alt="Andorra" width="40"
                                            className="mr-2"/>
                                            <span className="font-semibold">Andorra</span>
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a href=""
                                        className="flex items-center bg-white border border-gray-200 hover:shadow-md p-3 rounded transition-all">
                                        <Image height={100} src="https://moyenxpress.com/public/uploads/flags/ao.webp" alt="Angola" width="40"
                                            className="mr-2"/>
                                            <span className="font-semibold">Angola</span>
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a href=""
                                        className="flex items-center bg-white border border-gray-200 hover:shadow-md p-3 rounded transition-all">
                                        <Image height={100} src="https://moyenxpress.com/public/uploads/flags/ar.webp" alt="Argentina" width="40"
                                            className="mr-2"/>
                                            <span className="font-semibold">Argentina</span>
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a href=""
                                        className="flex items-center bg-white border border-gray-200 hover:shadow-md p-3 rounded transition-all">
                                        <Image height={100} src="https://moyenxpress.com/public/uploads/flags/am.webp" alt="Armenia" width="40"
                                            className="mr-2"/>
                                            <span className="font-semibold">Armenia</span>
                                    </a>
                                </div>
                                  <div className="text-center">
                                    <a href=""
                                        className="flex items-center bg-white border border-gray-200 hover:shadow-md p-3 rounded transition-all">
                                        <Image height={100} src="https://moyenxpress.com/public/uploads/flags/au.webp" alt="Australia" width="40"
                                            className="mr-2"/>
                                            <span className="font-semibold">Australia</span>
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a href=""
                                        className="flex items-center bg-white border border-gray-200 hover:shadow-md p-3 rounded transition-all">
                                        <Image height={100}ight={100} src="https://moyenxpress.com/public/uploads/flags/at.webp" alt="Austria" width="40"
                                            className="mr-2"/>
                                            <span className="font-semibold">Austria</span>
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a href=""
                                        className="flex items-center bg-white border border-gray-200 hover:shadow-md p-3 rounded transition-all">
                                        <Image height={100} src="https://moyenxpress.com/public/uploads/flags/az.webp" alt="Azerbaijan" width="40"
                                            className="mr-2"/>
                                            <span className="font-semibold">Azerbaijan</span>
                                    </a>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <a href="" className="px-4 py-2 rounded transition-all duration-300 bg-red-500 text-white hover:bg-red-600">
                                    View All
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
