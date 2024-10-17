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
  const [selectedTags, setSelectedTags] = useState([]);
  const [quantity, setquantity] = useState(0);
  const [brand, setbrand] = useState("");
  const [rating, setrating] = useState("");
  const [discount, setdiscount] = useState("");
  const [variants, setvariants] = useState("");

  const route = useRouter();

  const [products, setProducts] = useState([]);

  // create Product
  const fetchProduct = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category_name", category);
    formData.append("image", file); // Append the file
    formData.append("uploading", uploading);
    formData.append("quantity", quantity);
    formData.append("brand", brand);
    formData.append("rating", rating);
    formData.append("discount", discount);
    formData.append("tags", JSON.stringify(selectedTags));

    try {
      if (uploading) {
        toast.error("Please wait while image is uploading");
        return;
      }
      await axios
        .post(process.env.NEXT_PUBLIC_API + "/product", formData)
        .then((x) => {
          setName(""),
            setPrice(""),
            setDescription(""),
            setCategory(""),
            setFile(null),
            setMedia(""),
            setUploading(false),
            setSelectedTags([]),
            setquantity(""),
            setbrand(""),
            setrating(""),
            setdiscount(""),
            setvariants("");
        });
    } catch (error) {
      toast.error(error.message);
      console.log(error);

      return;
    }
  };
  //  get all products
  const getproducts = async () =>{
    await axios.get(process.env.NEXT_PUBLIC_API + "/product/getallproduct")
    .then(x=>{
      console.log(x,",_----")
      setProducts(x.data)
    })
}
  useEffect(() => {
    getproducts();
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
        setSelectedTags,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
