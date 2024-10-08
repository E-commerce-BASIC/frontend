import React from 'react'

export default function Coming_soon_2() {
    return (

            <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="relative h-64 bg-cover bg-center rounded-lg shadow-lg"
                    style={{  backgroundImage: `url('https://moyenxpress.com/public/uploads/all/i38CdAU5YDTCxRZbTNn3t1JfFgExBQbZC2wIsfuq.jpg')`}}>
                    <div className="ml-5 absolute inset-0 bg-opacity-50 flex flex-col justify-center ">
                        <h2 className="text-white text-2xl font-bold">COMING SOON</h2>
                        <a href="#" className=" text-white  font-bold">Shop Now <i
                            className="fa-duotone fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>

                <div className="relative h-64 bg-cover bg-center rounded-lg shadow-lg"
                    style={{ backgroundImage: `url('https://moyenxpress.com/public/uploads/all/YmBLK63LS2Tj2M1BESAxS759b3Z0YZxIAUNzqfKs.jpg')`}}>
                    <div className="ml-5 absolute inset-0 bg-opacity-50 flex flex-col justify-center ">
                        <h2 className="text-white text-2xl font-bold">COMING SOON</h2>
                        <a href="#" className=" text-white  font-bold">Shop Now <i
                            className="fa-duotone fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>

                <div
                    className="relative h-64 bg-cover bg-center rounded-lg shadow-lg"
                    style={{ backgroundImage: `url('https://moyenxpress.com/public/uploads/all/qCxvFqJCEF7oRygK23GtD8cXXzYivdUWN1TMceDQ.jpg')` }}
                >
                    <div className="ml-5 absolute inset-0 bg-opacity-50 flex flex-col justify-center">
                        <h2 className="text-white text-2xl font-bold">COMING SOON</h2>
                        <a href="#" className="text-white font-bold">
                            Shop Now <i className="fa-duotone fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>

            </div>

            )
}
