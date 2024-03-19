import { Button, Drawer, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
  },
  {
    label: <Link to="/services">Services</Link>,
    key: "Services",
  },
  {
    label: <Link to="/pricing">Pricing</Link>,
    key: "Pricing",
  },
  {
    label: <Link to="/contact">Contact Us</Link>,
    key: "Contact Us",
  },
];

export default function Header() {
  const [state, setState] = useState(false);

  const showDrawer = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };

  return (
    <div className="header">
      <div className="bg-[#EDEDED] min-h-[60px] flex items-center px-2 py-2 lg:px-[50px] justify-center md:justify-end ">
        <div className="flex flex-col w-fit md:gap-10 md:flex-row right">
          <span>
            <Link to="https://pynguinpm.rentvine.com/portals/owner">
              Owner Portal
            </Link>
          </span>
          <span>
            <Link to="https://pynguinpm.rentvine.com/portals/resident/">
              Tenant Portal
            </Link>
          </span>
          <span>
            <img
              src="/icons/phone.svg"
              alt=""
              className="inline-block mr-2 rotate-90 invert"
            />
            <a href="tel:407-656-8600">407.656.8600</a>
          </span>
        </div>
      </div>
      <div className="bg-[#fff] py-6 flex items-center px-2 lg:px-[50px] justify-between text-left gap-2">
        <Link to="/">
          <img
            src="/logo.png"
            alt=""
            className="invert md:w-[180px] object-contain"
          />
        </Link>
        <div className="hidden lg:flex">
          <Menu mode="horizontal" items={items} className="text-lg min-w-[400px] justify-end" />
        </div>
        <Button
          className="block lg:hidden"
          type="primary"
          shape="circle"
          icon={<img src="/icons/menu.svg" alt="" />}
          onClick={showDrawer}
        />
        <Drawer
          title={
            <img
              src="/logo.png"
              alt=""
              className="invert md:w-[218px] object-contain"
            />
          }
          placement="right"
          onClose={onClose}
          open={state}
        >
          <ul className="flex gap-2 text-[18px] flex-wrap sm:flex-nowrap pb-3 w-fit flex-col">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </div>
  );
}
