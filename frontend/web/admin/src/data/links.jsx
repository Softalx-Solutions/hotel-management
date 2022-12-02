import React from "react";
import { CpuChipIcon, Cog6ToothIcon, UserIcon } from "@heroicons/react/24/solid";

const links = [
  {
    id: "0",
    icon: <CpuChipIcon className="h-6 w-9 text-gray-800" />,
    title: "Dashboard",
  },
  {
    id: "1",
    title: "Profile",
    icon: <UserIcon className="h-6 w-9 text-gray-800" />
  },
  {
    id: "2",
    title: "Settings",
    icon: <Cog6ToothIcon className="h-6 w-9 text-gray-800" />
  },
];

export default links;
