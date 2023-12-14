import React from "react";

export default function Footer() {
  return (
    <div className="text-white bg-black py-10 lg:py-[100px] px-8 lg:px-[50px] text-left text-[18px]">
      <div className="flex justify-between flex-wrap gap-10">
        <div>
          <img src="/logo.png" alt="" className="mb-10" />
          <div className="flex flex-col gap-5">
            <p className="w-fit flex gap-2">
              <img src="/icons/phone.svg" alt="" /> 407.656.0000.
            </p>
            <p className="w-fit text-left">
              219 E Irving Park Rd.
              <br />
              Roselle, IL 60172
            </p>
            <p className="w-fit">contactus@gcrealtyinc.com</p>
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
          <h6 className="uppercase mb-3 lg:mb-6">Menu</h6>
          <ul className="flex flex-col gap-3 lg:gap-5 text-sm lg:text-base">
            <li>Home</li>
            <li>Services</li>
            <li>Areas we Serve</li>
            <li>Pricing</li>
            <li>Team</li>
            <li>Referrals</li>
            <li>Resources</li>
          </ul>
        </div>

        <div>
          <h6 className="uppercase mb-3 lg:mb-6">Office hours</h6>
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
          <h6 className="uppercase mb-3 lg:mb-6">Current Tenants</h6>
          <ul className="flex flex-col gap-3 lg:gap-5 text-sm lg:text-base">
            <li>Portal</li>
            <li>Pay rent</li>
            <li>Repair request</li>
            <li>Resources</li>
          </ul>
        </div>

        <div className="mb-6">
          <h6 className="uppercase mb-3 lg:mb-6">Prospective Tenants</h6>
          <ul className="flex flex-col gap-3 lg:gap-5 text-sm lg:text-base">
            <li>Available Rentals</li>
            <li>Apply Now</li>
            <li>FAQs</li>
            <li>Pet Policy</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between flex-wrap-reverse">
        <p className="max-w-[400px] text-[#888] mt-10 lg:mt-[90px] text-xs">
          Copyright © 2023 GC Realty & Development, LLC All Rights Reserved. 
          <br />
GC Realty & Development, LLC is committed to ensuring that its website is accessible to people with disabilities. All the pages on our website will meet W3C WAI's Web Content Accessibility Guidelines 2.0, Level A conformance. 
        </p>
        <div className="ml-px lg:ml-auto flex flex-wrap lg:justify-end max-w-[518px]">
          <img src="/logos/image 14.png" alt="" className="inline-block mr-3" />
          <img src="/logos/image 20.png" alt="" className="inline-block mr-3" />
          <img src="/logos/image 23.png" alt="" className="inline-block mr-3" />
          <img src="/logos/image 17.png" alt="" className="inline-block" />
          <img src="/logos/image 16.png" alt="" className="inline-block mr-3" />
          <img src="/logos/image 22.png" alt="" className="inline-block mr-3" />
          <img src="/logos/image 21.png" alt="" className="inline-block mr-3" />
          <img src="/logos/image 19.png" alt="" className="inline-block mr-3" />
          <img src="/logos/image 18.png" alt="" className="inline-block" />
        </div>
      </div>
    </div>
  );
}
