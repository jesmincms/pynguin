import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-white bg-black py-10 lg:py-[100px] px-8 lg:px-[50px] text-left text-[18px]">
      <div className="flex flex-wrap justify-between gap-10">
        <div>
          <img src="/logo.png" alt="" className="mb-10" />
          <div className="flex flex-col gap-5">
            <p className="flex gap-2 w-fit">
              <img src="/icons/phone.svg" alt="" /> <a href="tel:407-656-8600">407.656.8600</a>
            </p>
            <p className="text-left w-fit">
            <a href="/">6735 Conroy Windemere Rd, Ste 311
              <br />
              Orlando, FL 32835</a>
            </p>
            <p className="w-fit"><a href="mailto:info@pynguin.com">info@pynguin.com</a></p>
            <div className="flex gap-2">
              <img src="/icons/facebook.svg" alt="" />
              <img src="/icons/instagram.svg" alt="" />
              <img src="/icons/linkedin.svg" alt="" />
              <img src="/icons/youtube.svg" alt="" />
            </div>
            <div className="flex gap-2">
              <img src="/icons/footer_icon_2.svg" alt="" />
              <img src="/icons/footer_icon_3.svg" alt="" />
              <img src="/icons/footer_icon_1.svg" alt="" />
            </div>
          </div>
        </div>

        <div>
          <h6 className="mb-3 uppercase lg:mb-6">Menu</h6>
          <ul className="flex flex-col gap-3 text-sm lg:gap-5 lg:text-base">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="mb-3 uppercase lg:mb-6">Office hours</h6>
          <ul className="flex flex-col gap-[10px] mb-5 text-sm lg:text-base">
            <li>Monday - Friday</li>
            <li className="text-[#888]">8 a.m - 4 p.m</li>
          </ul>
          <ul className="flex flex-col gap-[10px] max-w-[100%] md:max-w-[150px] text-sm lg:text-base">
            <li>Document & Check Drop Off</li>
            <li className="text-[#888]">24 Hours, No Cash</li>
          </ul>
        </div>

        <div>
          <h6 className="mb-3 uppercase lg:mb-6">Current Tenants</h6>
          <ul className="flex flex-col gap-3 text-sm lg:gap-5 lg:text-base">
            <li>Portal</li>
            <li>Pay rent</li>
            <li>Repair request</li>
            <li>Resources</li>
          </ul>
        </div>

        <div className="mb-6">
          <h6 className="mb-3 uppercase lg:mb-6">Prospective Tenants</h6>
          <ul className="flex flex-col gap-3 text-sm lg:gap-5 lg:text-base">
            <li>Available Rentals</li>
            <li>Apply Now</li>
            <li>FAQs</li>
            <li>Pet Policy</li>
          </ul>
        </div>
        <div className="mb-6">
          <h6 className="mb-3 uppercase lg:mb-6">Property Owners</h6>
          <ul className="flex flex-col gap-3 text-sm lg:gap-5 lg:text-base">
            <li>Portal</li>
            <li>Our Services</li>
            <li><Link to="/pricing">Our Pricing</Link> </li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap-reverse justify-between">
        <p className="max-w-[400px] text-[#888] mt-10 lg:mt-[90px] text-xs">
        Copyright © 2010-{currentYear} Pynguin Property Management, LLC All Rights Reserved. Pynguin Property Management, LLC is committed to ensuring that its website is accessible to people with disabilities. All the pages on our website will meet W3C WAI's Web Content Accessibility Guidelines 2.0, Level A conformance.
        </p>
      </div>
    </div>
  );
}
