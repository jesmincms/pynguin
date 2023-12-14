import { Button, Drawer, Menu } from "antd";
import { useState } from "react";

const items = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Services",
    key: "Services",
  },
  {
    label: "Areas we Serve",
    key: "Areas we Serve",
  },
  {
    label: "Pricing",
    key: "Pricing",
  },
  {
    label: "Team",
    key: "Team",
  },
  {
    label: "Referrals",
    key: "Referrals",
  },
  {
    label: "Resources",
    key: "Resources",
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
    <div>
      <div className="bg-[#EDEDED] min-h-[60px] flex items-center px-2 lg:px-[50px] justify-between ">
        <div className="flex gap-2 w-fit">
          <img src="/icons/facebook.svg" alt="" className="invert" />
          <img src="/icons/instagram.svg" alt="" className="invert" />
          <img src="/icons/linkedin.svg" alt="" className="invert" />
          <img src="/icons/youtube.svg" alt="" className="invert" />
        </div>
        <div className="flex w-fit md:gap-10 flex-col md:flex-row">
          <span>Owner Portal</span>
          <span>Tenant Portal</span>
          <span>
            <img
              src="/icons/phone.svg"
              alt=""
              className="inline-block mr-2 invert rotate-90"
            />
            407.656.0000.
          </span>
        </div>
      </div>
      <div className="bg-[#fff] md:h-[75px] flex items-baseline lg:items-end px-2 lg:px-[50px] justify-between text-left gap-2">
        <img
          src="/logo.png"
          alt=""
          className="invert md:w-[218px] object-contain"
        />
        <div className="hidden md:flex">
          <Menu mode="horizontal" items={items} className="text-lg" />
        </div>
        <Button
          className="block md:hidden"
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
            <li>Home</li>
            <li>Services</li>
            <li>Areas we Serve</li>
            <li>Pricing</li>
            <li>Team</li>
            <li>Referrals</li>
            <li>Resources</li>
          </ul>
        </Drawer>
      </div>
    </div>
  );
}
