"use client";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import Mobile from "./Mobile";
import { useContext, useEffect, useState } from "react";
import SideCart from "./SideCart";
import { Context } from "@/Context/Context";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Cookies from "js-cookie";

const Header = () => {
  const {
    tracking,
    setTracking,
    TrackingData,
    setTrackingData,
    categories,
    setCategories,
  } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { user, handleLogout } = useContext(Context);

  const [isHovered, setIsHovered] = useState(false);
  const [Search, setSearch] = useState(0);

  const name = user?.Info?.username.replace(/ .*/, "");
  // console.log(user?.Info?.user_id);

  useEffect(() => {
    const fetchCategories = async () => {
      // const res = await axios.get("/api/category/header_menu_categories");
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/category/find_all_categories`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setCategories(data?.data);
    };
    fetchCategories();
  }, []);

  const SearchTracking = async (e) => {
    e.preventDefault();
    const search = await axios.post("/api/order/tracking", { Search });
    console.log(search);
    if (search?.data?.message === "Tracking Found")
      return setTracking(true), setTrackingData(search);
  };
  console.log(user?.Info?.profile?.user_id);
  return (
    <div className="w-full relative">
      <header className="bg-primary ">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>

            <div className="">
              <Image src={"/SOUQBAY LOGO.png"} width={50} height={40} />
            </div>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block w-full">
              <ul className="flex items-center gap-6 text-sm w-full">
                <li>
                  <Link
                    className="text-textColour transition hover:text-footer "
                    href="/about"
                  >
                    About
                  </Link>
                </li>

                <li
                  className="relative"
                  onMouseEnter={() => setIsHovered(true)}
                >
                  <Link
                    href={"/category"}
                    className="text-textColour transition hover:text-footer cursor-pointer "
                  >
                    Categories
                  </Link>

                  {isHovered && (
                    <ul
                      onMouseLeave={() => setIsHovered(false)}
                      className="absolute top-8 left-0 w-48 bg-secondary shadow-lg rounded-lg py-3 z-50"
                    >
                      {categories?.map((category) => (
                        <li key={category.id}>
                          <Link
                            href={`/category/category?search=${category.category}`}
                            className="block px-5 py-2.5 text-sm text-textColour transition hover:bg-primary"
                          >
                            {category.category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <Link
                    className="text-textColour transition hover:text-footer "
                    href="/products"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-textColour transition hover:text-footer "
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-textColour transition hover:text-footer"
                    href="/order_history"
                  >
                    Orders
                  </Link>
                </li>
                {user?.Info?.profile?.user_id == 1 && (
                  <li>
                    <Link
                      className="text-textColour transition hover:footer "
                      href="/admin"
                    >
                      Admin
                    </Link>
                  </li>
                )}
                <li className="w-full px-4">
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg w-full">
                    <FaSearch className="text-textColour text-lg mr-3" />
                    <form onSubmit={SearchTracking}>
                      <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-transparent outline-none w-full text-black placeholder-gray-500"
                        placeholder="Search for tracking ID"
                      />
                    </form>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <span
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="text-textColour transition hover:text-footer cursor-pointer"
              >
                <BsBag fontSize={19} />
              </span>
              {user?.Info ? (
                <div className="sm:flex sm:gap-4">
                  <span className="hidden rounded-md bg-gray-100 px-4 py-2.5 text-sm font-medium text-textColour transition hover:text-footer sm:block">
                    {name}
                  </span>
                  <span
                    onClick={handleLogout}
                    className="hidden cursor-pointer md:block rounded-md bg-boderColour px-5 py-2.5 text-sm font-medium text-textColour transition hover:bg-"
                  >
                    Logout
                  </span>
                </div>
              ) : (
                <div className="sm:flex sm:gap-4">
                  <Link
                    href="/loginpage"
                    className="block rounded-md  boder border-boderColour bg-white px-5 py-2.5 text-sm font-medium text-boderColour transition hover:text-boderHover "
                  >
                    Login
                  </Link>

                  <Link
                    className="hidden rounded-md boder border-boderColour bg-white px-5 py-2.5 text-sm font-medium text-boderColour transition hover:text-boderHover sm:block"
                    href="/signupPage"
                  >
                    Register
                  </Link>
                </div>
              )}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block rounded bg-boderColour p-2.5 text-text-colour transition hover:text-footer  md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          className={`absolute left-0 top-0 w-52 md:hidden bg-white shadow-lg rounded-lg z-50`}
        >
          <Mobile setIsOpen={setIsOpen} categories={categories} />
        </div>
      )}
      {isCartOpen && (
        <SideCart setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
      )}
    </div>
  );
};

export default Header;
