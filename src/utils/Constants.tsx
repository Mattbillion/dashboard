/* eslint-disable unicorn/filename-case */
import { RxCrosshair2 } from "react-icons/rx";
import { MdTableRestaurant, MdSettings } from "react-icons/Md";
import { BsCardList, BsGridFill } from "react-icons/Bs";
import { FaUser } from "react-icons/Fa";

export const sideMenuButtons = [
  {
    name: "Dashboard",
    path: "/",
    icon: <RxCrosshair2 />,
  },
  {
    name: "tables",
    path: "/Tables",
    icon: <MdTableRestaurant />,
  },

  {
    name: "reservations",
    path: "/reservations",
    icon: <BsCardList />,
  },
  {
    name: "Tables",
    path: "/Tables",
    icon: <BsGridFill />,
  },
  {
    name: "Users",
    path: "/Users",
    icon: <FaUser />,
  },
  {
    name: "Settings",
    path: "/Settings",
    icon: <MdSettings />,
  },
];
