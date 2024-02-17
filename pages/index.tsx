import Image from "next/image";

import { GoDotFill } from "react-icons/go";
import React from "react";
import { IoIosNotifications, IoMdHome, IoMdMail } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import FeedCard from "@/components/FeedCard";


interface BlipSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: BlipSidebarButtons[] =[
  {
    title: "home",
    icon :<IoMdHome/>,
  },
  {
    title: "explore",
    icon :<MdExplore/>
  },
  {
    title: "notifications",
    icon :<IoIosNotifications/>
  },
  {
    title: "messages",
    icon :<IoMdMail/>
  },
  {
    title: "profile",
    icon :<FaUser/>
  },
  {
    title: "bookmarks",
    icon :<PiBookmarkSimpleFill/>
  },
];

export default function Home() {
  return (
    <div>
        <div className="grid grid-cols-12 h-screen w-screen px-20">
          <div className="pt-4 ml-32 px-4 col-span-3">
          <div className="text-5xl h-fit w-fit rounded-full hover:bg-grey cursor-pointer transition-all">
            <GoDotFill />
          </div>
          <div className="mt-4 text-lg">
            <ul>
            {sidebarMenuItems.map(item=> <li className="flex justify-start items-center rounded-full gap-4 hover:bg-grey px-3 py-3 w-fit" key={item.title}><span className="text-xl">{item.icon}</span><span>{item.title}</span></li>)}
            </ul>
            <button className="flext items-center w-full bg-white py-2 px-4 text-black rounded-full text-center mt-5 hover:bg-wht">new blip</button>  
          </div>
          </div>
          <div className="col-span-6 border-r border-l h-screen overflow-y-scroll no-scrollbar border-gray-400">
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
          </div>
          <div className="col-span-3"></div>
        </div>
    </div>
  );
}
