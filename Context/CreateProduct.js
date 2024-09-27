"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [uploading, setUploading] = useState(false);
  const route = useRouter();

  const [products, setProducts] = useState([]);


  // create Product
  const fetchProduct = async (e) => {
    e.preventDefault();
    let formData = new FormData()
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('image', file); // Append the file
    formData.append('uploading', uploading);

    try {

      if (uploading) {
        toast.error("Please wait while image is uploading");
        return;
      }
      const res = await axios.post("/api/product", formData,
        {
          headers: {
            'Content-Type': 'multipart/formdata'
          }
        }
      );

    } catch (error) {
      toast.error(error.message);
      console.log(error);

      return;
    }
  };
  //  get all products
  useEffect(() => {
    axios.get("/api/product").then((res) => {
      // console.log(res,"<======")
      setProducts(res.data);
    });
  }, []);
  return (
    <ProductContext.Provider
      value={{
        uploading,
        setMedia,
        fetchProduct,
        name,
        setName,
        price,
        setPrice,
        description,
        setDescription,
        category,
        setCategory,
        file,
        setFile,
        media,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
