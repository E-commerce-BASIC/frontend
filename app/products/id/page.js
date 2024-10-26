"use client";
import { CartContext } from "@/Context/CartProvider";
import { Context } from "@/Context/Context";
import Installment_Modal from "@/components/Modal/Installment_Modal";
import RelatedProducts from "@/components/RelatedProducts";
import Skeleton from "@/components/Skeleton";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import TouchGallery from "../Product_IMG/TouchGallery";
import Subcategory from "../Subcategory/Subcategory";

const Product = () => {
  const [product, setProduct] = useState({});
  const [sub_product, setSub_Product] = useState([]);
  const [open, setOpen] = useState(false);

  const { _id } = useParams();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  const { cartdetails, setCartDetails, addItemToCart } =
    useContext(CartContext);
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/getproduct/${searchQuery}`
        );
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchProduct();
  }, [searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API}/product/get_all_product/${searchQuery}`
      )
      .then((x) => setSub_Product(x?.data));
  }, []);

  if (!product?.image) return <Skeleton />;

  return (
    <div className="bg-white py-11 font-poppins">
      <section className=" px-5  py-4 ">
        <div className="flex flex-wrap -">
          <div className="w-full md:w-1/2">
            <div className="sticky top-0">
              <TouchGallery ProductID={product?.id} />
              <h3 className="text-primary text-lg  ">Variants</h3>
              <div className="flex">
                {sub_product?.map((x, i) => {
                  return <Subcategory productItem={x.product} key={i} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-8">
                <span className="text-sm font-medium text-rose-500">
                  {product?.category}
                </span>
                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold md:text-xl">
                  {product?.name}
                </h2>
                <div className="flex items-center mb-6">
                  <ul className="flex mr-2">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <li key={index}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-yellow-500"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </li>
                      ))}
                  </ul>
                  <p className="text-xs">(2 customer reviews)</p>
                </div>
                <p className="max-w-md mb-8 text-gray-700">
                  {product?.description}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  ${product?.price}
                </h3>

                <button
                  className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary  hover:text-white "
                  onClick={(e) => addItemToCart({ product, e })}
                >
                  Add to Cart
                </button>

                <button
                  className="px-8 py-3 ml-4 bg-primary text-white hover hover:bg-orange-900"
                  onClick={() => setOpen(true)}
                >
                  Buy in Installments
                </button>

                {open && (
                  <Installment_Modal
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    product={product}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <RelatedProducts id={product?.id} />
        </div>
      </section>
    </div>
  );
};

export default Product;
