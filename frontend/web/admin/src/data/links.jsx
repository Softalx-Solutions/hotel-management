import React from "react";
import { CpuChipIcon, Cog6ToothIcon, UserIcon } from "@heroicons/react/24/solid";

const links = [
  {
    id: "0",
    icon: <CpuChipIcon className="w-9 text-[#9FA2B4]" />,
    title: "Dashboard",
  },
  {
    id: "1",
    title: "Profile",
    icon: <UserIcon className="w-9 text-[#9FA2B4]" />
  },
  {
    id: "2",
    title: "Settings",
    icon: <Cog6ToothIcon className="w-9 text-[#9FA2B4]" />
  },
];

export default links;
