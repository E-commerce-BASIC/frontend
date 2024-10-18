"use client";
import { useParams, useSearchParams } from "next/navigation";
import Category from "./Category";

  

const Cate = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");
  const params = useParams();
  return (
    <div>
      <Category category={searchQuery} />
    </div>
  );
};

export default Cate;
