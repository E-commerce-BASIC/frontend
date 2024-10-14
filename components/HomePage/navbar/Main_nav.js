"use client"; // Add this line to mark the component as a Client Component

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faFilter,
  faSignInAlt,
  faBookmark,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Main_nav() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <header className="sticky bg-slate-200 top-0 z-[1020] border-b shadow-sm">
      <div className="relative z-1">
        <div className=" mx-auto">
          <div className="flex items-center py-2">
            {/* Logo */}
            <div className="flex items-center pl-3 pr-0">
              <a href="/" className="py-1">
                <Image
                  height={100}
                  width={100}
                  src="https://moyenxpress.com/public/uploads/all/klkZuTK6TuY6MeSswnCCeOBS6VF5Ap8WhMinmHv6.png"
                  alt="moyenxpress"
                  className="max-w-full h-12 md:h-15 lg:h-12"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Categories Dropdown */}
            <div className="hidden xl:flex items-center pl-0 pr-0 ml-auto relative group">
              <div className="dropdown-toggle py-3 px-3 border-l border-r cursor-pointer hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
                <FontAwesomeIcon icon="list" />
                <span className="ml-1">All Categories</span>
              </div>

              {/* Categories Sidebar Menu (Hidden until hovered) */}
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg hidden group-hover:block">
                <div className="p-3 bg-gray-50 rounded-t text-left">
                  <span className="font-bold text-lg">Categories</span>
                  <a
                    href="https://moyenxpress.com/categories"
                    className="text-red-500"
                  >
                    See All &gt;
                  </a>
                </div>
                <ul className="py-2">
                  <li className="py-2 px-3 hover:bg-gray-100 flex items-center">
                    <Image
                      height={100}
                      width={100}
                      src="https://moyenxpress.com/public/uploads/all/wZyFdGmEDtz5zGLFtBBmGkBKCWZgi5ofKBqhlpZA.png"
                      className="w-4 h-4 mr-2"
                      alt="Sports & Outdoors"
                    />
                    <span>Sports & Outdoors</span>
                    <FontAwesomeIcon
                      icon="angle-double-right"
                      className="ml-auto"
                    />
                  </li>
                  <li className="py-2 px-3 hover:bg-gray-100 flex items-center">
                    <Image
                      height={100}
                      width={100}
                      src="https://moyenxpress.com/public/uploads/all/xljj2umUYUeqw9NhOIAj4v96G74Kpr3o1Q96EbP9.png"
                      className="w-4 h-4 mr-2"
                      alt="Home, Garden & Tools"
                    />
                    <span>Home, Garden & Tools</span>
                    <FontAwesomeIcon
                      icon="angle-double-right"
                      className="ml-auto"
                    />
                  </li>
                </ul>
              </div>
            </div>

            {/* Search bar */}
            <div className="flex-grow flex items-center bg-white px-4 lg:px-0">
              <div className="relative w-full">
                <form
                  action="https://moyenxpress.com/search"
                  method="GET"
                  className="mb-0"
                >
                  <div className="flex items-center relative">
                    <div className="lg:hidden">
                      <button className="btn p-2 text-gray-500" type="button">
                        <FontAwesomeIcon icon={faArrowLeft} className="fa-2x" />
                      </button>
                    </div>
                    <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden">
                      <input
                        type="text"
                        className="form-control w-full border-0 px-4 py-2 focus:outline-none focus:ring focus:border-red-500"
                        id="search"
                        name="keyword"
                        placeholder="I am shopping for..."
                        autoComplete="off"
                      />
                      <button
                        className="hidden lg:inline-block bg-red-500 text-white px-4 py-2"
                        type="submit"
                      >
                        <FontAwesomeIcon icon={faSearch} className="fa-lg" />
                      </button>
                    </div>
                    <button
                      className="btn ml-2 text-gray-500 hover:text-red-500 m-2"
                      type="button"
                      onClick={toggleFilter}
                    >
                      <FontAwesomeIcon icon={faFilter} className="fa-lg" />
                    </button>
                  </div>
                </form>

                {/* Filter Section */}
                {isFilterVisible && (
                  <div
                    id="filter-wapper"
                    className="absolute top-full left-0 w-full mt-4 p-4 bg-white shadow-lg"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                      {/* Country Dropdowns */}
                      {[...Array(5)].map((_, index) => (
                        <div className="col-span-4" key={index}>
                          <div className="flex items-center">
                            <Image
                              height={100}
                              width={100}
                              src="/public/images/icons/country.png"
                              loading="lazy"
                              className="w-5 h-5 mr-2"
                              alt="Country"
                            />
                            <label
                              htmlFor={`nav-country-${index}`}
                              className="text-gray-700"
                            >
                              Country
                            </label>
                          </div>
                          <select
                            id={`nav-country-${index}`}
                            name="country"
                            className="form-control mt-1 w-full border border-gray-300 rounded-lg p-2"
                          >
                            <option disabled value="">
                              Select
                            </option>
                          </select>
                        </div>
                      ))}
                      {/* Search Button */}
                      <div className="col-span-2">
                        <button
                          type="submit"
                          className="btn bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Icons & Links (Sign In, Wishlist, Cart) */}
            <div className="flex items-center space-x-3 ml-auto">
              <a
                href="#"
                className="flex items-center text-primary hover:text-red-500 transition duration-300 ease-in-out"
              >
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  className="fa-2x text-red-500"
                />
              </a>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-red-500 transition duration-300 ease-in-out"
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="fa-2x text-red-500"
                />
              </a>
              <a
                href="javascript:void(0)"
                className="flex items-center relative text-gray-600 hover:text-red-500 transition duration-300 ease-in-out"
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="fa-2x text-red-500"
                />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2 text-gray-500 hover:text-red-500">
              <FontAwesomeIcon icon={faBars} className="fa-3x me-2" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
