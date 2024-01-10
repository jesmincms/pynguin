import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PricingBanner from "../components/pricing/PricingBanner";
import PricingTable from "../components/pricing/PricingTable";
import Service from "../components/pricing/Service";
import Progress from "../components/pricing/Progress";
export default function PricingPage() {
  return (
    <>
      <Header />
      <PricingBanner />
      <PricingTable />
      <Service />
      <Progress />
      <Footer />
    </>
  );
}
