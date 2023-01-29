import React from "react";
import { CpuChipIcon, Cog6ToothIcon, UserIcon } from "@heroicons/react/24/solid";
import {RiDashboardFill, RiUser3Fill, RiSettings4Fill} from 'react-icons/ri'

const links = [
  {
    id: "0",
    icon: <RiDashboardFill size={20} color="#9FA2B4"/>,
    title: "Dashboard",
  },
  {
    id: "1",
    title: "Profile",
    icon: <RiUser3Fill size={20} color="#9FA2B4" />
  },
  {
    id: "2",
    title: "Settings",
    icon: <RiSettings4Fill size={20} color="#9FA2B4" />
  },
];

export default links;
