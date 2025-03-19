import EmailForm from "@/components/common/EmailForm";
import Footer from "@/components/common/Footer";
import DressStyle from "@/components/home/DressStyle";
import HappyCustomers from "@/components/home/HappyCustomers";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import ProductBrands from "@/components/home/ProductBrands";
import TopSelling from "@/components/home/TopSelling";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductBrands />
      <NewArrivals />
      <div className="max-w-[1240px] mx-auto w-full h-[1px] bg-[#0000001A]"></div>
      <TopSelling />
      <DressStyle />
      <HappyCustomers />
      <Footer />
    </>
  );
}
