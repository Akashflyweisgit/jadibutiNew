/** @format */

import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  // {
  //   title: "Dashboard",
  //   path: "/",
  //   icon: <AiIcons.AiFillHome />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  // },
  {
    title: "Profile",
    path: "/profile",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Product",
        path: "/products/add",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "View Product",
        path: "/products/view",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Category",
    path: "/category",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Coupons",
    path: "/coupons",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Discount Coupons",
        path: "/coupons/discountcoupons",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Banner",
    path: "/banner",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "View Inventory",
        path: "/inventory/view",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Customer Support",
    path: "/customersupport",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Admins",
    path: "/admins",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Admins",
        path: "/admins/add",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Admins",
        path: "/admins/manage",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  // {
  //   title: "Power Assignmnent",
  //   path: "/power",
  //   icon: <AiIcons.AiFillHome />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  // },

  {
    title: "Blogs",
    path: "/blogs",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Blogs",
        path: "/blogs/add",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Blogs",
        path: "/blogs/manage",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Dictionary",
    path: "/dictionary",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Vendors",
    path: "/vendors",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Vendors",
        path: "/vendors/add",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Vendors",
        path: "/vendors/manage",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "History",
    path: "/history",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
