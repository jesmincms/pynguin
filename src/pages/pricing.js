import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PricingBanner from "../components/pricing/PricingBanner";
import PricingTable from "../components/pricing/PricingTable";
import Service from "../components/pricing/Service";
import Progress from "../components/pricing/Progress";
import Faq from "../components/pricing/Faq";
import ServicesExplained from "../components/pricing/ServicesExplained";
import HelpfulArticles from "../components/HelpfulArticles";
export default function PricingPage() {
  return (
    <>
      <Header />
      <PricingBanner />
      <PricingTable />
      <Service />
      <Progress />
      <Faq />
      <ServicesExplained />
      <HelpfulArticles />
      <Footer />
    </>
  );
}
