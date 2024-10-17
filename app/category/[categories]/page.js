"use client";
import { useParams } from "next/navigation";
import Category from "./Category";

export const dynamic = 'force-dynamic';

const Cate = () => {
  const params = useParams();
  return (
    <div>
      <Category params={params.categories} />
    </div>
  );
};

export default Cate;
