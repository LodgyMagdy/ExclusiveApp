import CategoriesSection from "@/components/home/CategoriesSection";
import MainSlider from "@/components/home/MainSlider";
import ProductsSection from "@/components/home/ProductsSection";
import GridSkeleton from "@/components/shared/GridSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
     <MainSlider/>
     <Suspense fallback={<GridSkeleton/>}><CategoriesSection/></Suspense>
     <Suspense fallback={<GridSkeleton/>}><ProductsSection/></Suspense>
    </>
  );
}
