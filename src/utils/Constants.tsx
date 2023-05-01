/* eslint-disable unicorn/filename-case */
import { AiFillDashboard } from "react-icons/ai";
import { MdTableRestaurant, MdSettings } from "react-icons/Md";
import { BsCardList, BsGridFill } from "react-icons/Bs";
import { FaUser } from "react-icons/Fa";
import { BiDish } from "react-icons/Bi";

export const sideMenuButtons = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <AiFillDashboard size={20} />,
  },
  {
    name: "Tables",
    path: "/dashboard/Tables",
    icon: <MdTableRestaurant size={20} />,
  },

  {
    name: "Reservation",
    path: "/dashboard/Reservation",
    icon: <BsCardList size={20} />,
  },
  {
    name: "Order",
    path: "/dashboard/Order",
    icon: <BsGridFill size={20} />,
  },
  {
    name: "Products",
    path: "/dashboard/Product",
    icon: <BiDish size={20} />
  },
  {
    name: "Users",
    path: "/dashboard/User",
    icon: <FaUser size={20} />,
  },
  {
    name: "Settings",
    path: "/dashboard/Settings",
    icon: <MdSettings size={20} />,
  },
];


export interface ICategory {
  name: string;
  id: string;
}
