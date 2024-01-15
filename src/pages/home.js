import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBanner from "../components/home/HomeBanner";
import Benefits from "../components/home/Benefits";
import WhenItComes from "../components/home/WhenItComes";
import IconBox from "../components/home/IconBox";
import OurGuarantees from "../components/home/OurGuarantees";
import AsSeenIn from "../components/home/AsSeenIn";
import OurServices from "../components/home/OurServices";
import Month12 from "../components/home/12Month";
import WhyHomeowners from "../components/home/WhyHomeowners";
import WhyTenants from "../components/home/WhyTenants";
import RentalAnalysis from "../components/home/RentalAnalysis";
import AreasWeServeInFlorida from "../components/home/AreasWeServeInFlorida";
import Ebooks from "../components/home/Ebooks";
import HelpfulArticles from "../components/HelpfulArticles";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Benefits />
      <WhenItComes />
      <IconBox />
      <OurGuarantees />
      <AsSeenIn />
      <OurServices />
      <Month12 />
      <WhyHomeowners />
      <WhyTenants />
      <RentalAnalysis />
      <AreasWeServeInFlorida />
      <HelpfulArticles />
      <Ebooks />
      <Footer />
    </div>
  );
}
