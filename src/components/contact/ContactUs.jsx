import React, { useEffect, useState } from "react";
import { useForm } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xgeglzrz");
  const [success, setSuccess] = useState("Send Email");
  useEffect(() => {
    if (state.succeeded) {
      setSuccess("Email sent successfully!");
      setTimeout(() => {
        setSuccess("Send Email");
      }, 3000);
    }
  }, [state.succeeded]);

  return (
    <div className="py-10 lg:py-16 xl:py-24 contact_us">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-9">
          <div className="col-span-12 pr-4 text-center md:col-span-6 lg:col-span-8 lg:text-start">
            <h3 className="text-[36px] leading-[43px] mb-4">
              <span className="font-bold">Contact Us </span> <br />
              Get started on your new rental journey today, with Pynguin as your
              trusted guide.
            </h3>
            <p className="font-bold">Pynguin Property Management</p>
            <p>
              6735 Conroy Windermere Rd <br /> STE 315 <br /> Orlando, FL 32835{" "}
              <br /> <br /> PH 407.656.8600
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h2 className="text-[28px] leading-[34px] text-center pt-7 pb-[26px] bg-[#F7C74F]">
              Get in touch
            </h2>
            <div className="p-5 bg-[#F5F5F5]">
              <h2 className="text-xl !leading-[24px] mb-4">I am a...*</h2>
              <form onSubmit={handleSubmit} className="w-full">
                <label className="flex items-center gap-2 mb-3 contact_us_checkbox" htmlFor="renter">
                  <input id="renter" type="checkbox" name="renter" />
                  RENTER
                </label>
                <label className="flex items-center gap-2 mb-3 contact_us_checkbox" htmlFor="landlord">
                  <input id="landlord" type="checkbox" name="landlord" />
                  LANDLORD / OWNER
                </label>
                <input
                  className="w-full p-2 mb-3 border border-black focus:outline-none"
                  id="name"
                  type="text"
                  required
                  name="name"
                  placeholder="NAME*"
                />
                <input
                  className="w-full p-2 mb-3 border border-black focus:outline-none"
                  id="email"
                  type="email"
                  required
                  name="email"
                  placeholder="EMAIL ADDRESS*"
                />
                <input
                  className="w-full p-2 mb-3 border border-black focus:outline-none"
                  id="phone"
                  type="phone"
                  name="phone"
                  placeholder="PHONE"
                />
                <textarea
                  className="w-full p-2 mb-3 border border-black focus:outline-none"
                  id="message"
                  name="message"
                  placeholder="COMMENTS OR PROPERTY ADDRESS"
                />
                <button
                  className="bg-black text-[#F7C74F] px-5 py-2 rounded-lg"
                  type="submit"
                  disabled={state.submitting}
                >
                  {success}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
