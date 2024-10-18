"use client";

import { ProductContext } from "@/Context/CreateProduct";
import axios from "axios";
import Image from "next/image";
import React, { useContext, useEffect } from "react";

const Form = () => {
  const {
    fetchProduct,
    name,
    setName,
    price,
    setPrice,
    description,
    setDescription,
    category,
    setCategory,
    setFile,
    media,
    file,
    uploading,
    quantity,
    brand,
    rating,
    discount,
    setquantity,
    setbrand,
    setrating,
    setdiscount,
    setvariants,
    selectedTags,
    setSelectedTags
  } = useContext(ProductContext);


  const [Tags, setTags] = React.useState([])


  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "quantity":
        setquantity(e.target.value);
        break;
      case "brand":
        setbrand(e.target.value);
        break;
      case "rating":
        setrating(e.target.value);
        break;
      case "discount":
        setdiscount(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetchProduct(e);
  };
  

  const Categories = [
    {
      id: 1,
      category: 'Smartphones'
    },
    {
      id: 2,
      category: 'Tablets'
    },
    {
      id: 3,
      category: 'Laptops'
    },
    {
      id: 4,
      category: 'Smartwatches'
    },
    {
      id: 5,
      category: 'Cameras'
    },
    {
      id: 6,
      category: 'Drones'
    },
    {
      id: 7,
      category: 'Audio'
    },
    {
      id: 8,
      category: 'TVs'
    },
    {
      id: 9,
      category: 'Smart Home'
    },
    {
      id: 10,
      category: 'Gaming'
    },
  ]


  // console.log(selectedTags, "<----")
  const handleChangeTag = (e) => {
    setCategory(e.target.value);
    setSelectedTags([]); // Clear selected tags when changing category
  };

  // useEffect(() => {
  //   const res = async () => {
  //     const response = await axios.get("/api/tags");
  //     setTags(response.data.data)
  //   }

  //   res()
  // }, [])
  // const Tags = [
  //   { id: 1, category: 'clothes', tag_name: 'T-Shirts' },
  //   { id: 2, category: 'clothes', tag_name: 'Jeans' },
  //   { id: 3, category: 'clothes', tag_name: 'Jackets' },
  //   { id: 4, category: 'clothes', tag_name: 'Dresses' },
  //   { id: 5, category: 'clothes', tag_name: 'Shorts' },
  //   { id: 6, category: 'phones', tag_name: 'Smartphones' },
  //   { id: 7, category: 'phones', tag_name: 'Feature Phones' },
  //   { id: 8, category: 'phones', tag_name: 'Gaming Phones' },
  //   { id: 9, category: 'phones', tag_name: 'Foldable Phones' },
  //   { id: 10, category: 'phones', tag_name: '5G Phones' },
  //   { id: 11, category: 'mobile accessories', tag_name: 'Chargers' },
  //   { id: 12, category: 'mobile accessories', tag_name: 'Phone Cases' },
  //   { id: 13, category: 'mobile accessories', tag_name: 'Screen Protectors' },
  //   { id: 14, category: 'mobile accessories', tag_name: 'Power Banks' },
  //   { id: 15, category: 'mobile accessories', tag_name: 'Car Mounts' },
  //   { id: 16, category: 'headphones', tag_name: 'Earbuds' },
  //   { id: 17, category: 'headphones', tag_name: 'Over-Ear' },
  //   { id: 18, category: 'headphones', tag_name: 'Wireless' },
  //   { id: 19, category: 'headphones', tag_name: 'Noise Cancelling' },
  //   { id: 20, category: 'headphones', tag_name: 'Gaming Headsets' }
  // ]
  console.log(Tags)

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) => {
      const isSelected = prevTags.some((t) => t.id === tag.id);
      return isSelected ? prevTags.filter((t) => t.id !== tag.id) : [...prevTags, tag];
    });
  };
  // console.log(category)
  return (
    <div className="w-full h-full flex items-center justify-center flex-col bg-gray-100 relative">
      <h1 className="w-full text-center my-5">
        <span className="text-2xl md:text-4xl font-bold text-gray-900">
          Create a new product
        </span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-11/12 mx-auto md:grid grid-cols-2 grid-rows-1 gap-3 mt-5  p-4"
      >
        <div className="flex flex-col items-center justify-center mt-3">
          <label
            htmlFor="name"
            className=" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium"
          >
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full  border border-gray-300 p-2 rounded-md mt-2"
            required
            placeholder="Enter product name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-3">
          <label
            htmlFor="brand"
            className=" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium"
          >
            Product brand:
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="w-full  border border-gray-300 p-2 rounded-md mt-2"
            required
            placeholder="Enter product brand"
            value={brand}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center  mt-3">
          <label
            htmlFor="price"
            className=" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium"
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full border  border-gray-300 p-2 rounded-md mt-2"
            required
            placeholder="Enter product price in $"
            value={price}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center  mt-3">
          <label
            htmlFor="price"
            className=" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium"
          >
            quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="w-full border  border-gray-300 p-2 rounded-md mt-2"
            required
            placeholder="Enter product quantity"
            value={quantity}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center  mt-3">
          <label
            htmlFor="description"
            className=" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium"
          >
            Description:
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            className="w-full border border-gray-300 p-2 rounded-md mt-2"
            required
            placeholder="Enter product description"
            rows="4"
            cols="50"
            value={description}
            onChange={handleChange}
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <div>
          {/* Category Dropdown */}
          <div className="flex flex-col items-center justify-center mt-3">
            <label
              htmlFor="description"
              className="w-full flex items-start justify-start text-gray-700 text-sm md:text-base font-medium"
            >
              Category:
            </label>
            <select
              name="category"
              id="category"
              className="w-full border border-gray-300 p-2 rounded-md mt-2"
              placeholder="Select category"
              required
              value={category}
              onChange={handleChangeTag}
            >
              <option value="" disabled>
                Select category
              </option>
              {Categories.map((x, i) => (
                <option key={i} value={x.category}>
                  {x.category}
                </option>
              ))}
            </select>
          </div>

          {/* Tags Display */}
          <div className="mt-4">
            <div className="font-medium">Tags:</div>
            {category && (
              <ul className="flex flex-wrap mt-2">
                {Tags.filter(tag => tag.category === category).map((tag) => (
                  <li
                    key={tag.id}
                    className={`m-1 p-2 border rounded-lg cursor-pointer ${selectedTags.some((t) => t.id === tag.id) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                      }`}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag.tag_name} {/* Display the tag name */}
                  </li>
                ))}
              </ul>
            )}
          </div>


          {/* Selected Tags */}
          <div className="mt-4">
            <label className="font-medium">Selected Tags:</label>
            <div className="w-full border border-gray-300 p-2 rounded-md mt-2 bg-white">
              {selectedTags.length > 0 ? selectedTags.map(t => t.tag_name).join(', ') : 'No tags selected'}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  mt-3">
          <label
            htmlFor="description"
            className=" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium"
          >
            Image:
          </label>
          {!media ? (
            uploading ? (
              <div className="w-full">
                <span className="w-full h-32 flex items-center justify-center text-gray-600 font-semibold">
                  please wait while image is uploading....
                </span>
              </div>
            ) : (
              <div
                className="w-full"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600">
                      Drop image to Attach, or
                      <span className="text-green-600 mx-1 underline">
                        browse
                      </span>
                    </span>
                  </span>
                  <input
                    type="file"
                    name="image"
                    className="hidden"
                    required
                    accept="image/*"
                    onChange={(e) => (setFile(e.target.files[0]))}
                  />
                </label>
              </div>
            )
          ) : (
            <Image src={media} width="500" height="500" alt="product image" />
          )}
        </div>

        <div className=" flex flex-col items-center justify-center  mt-3">
          {uploading ||
            !name ||
            !category ||
            !file ||
            !description ||
            !price ? (
            <button
              type="submit"
              disabled
              className="opacity-50 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
            >
              <span className="relative ">Create Product</span>
            </button>
          ) : (
            <button
              type="submit"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative ">Create Product</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
