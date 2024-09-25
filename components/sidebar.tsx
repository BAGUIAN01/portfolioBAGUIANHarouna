"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin

} from "lucide-react";
import { GithubIcon } from "./icons";
import Link from "next/link";

export const Sidebar: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="hidden md:block"> {/* Caché sur mobile, visible à partir de md */}
      <aside className="max-w-[250px] h-screen overflow-y-auto mt-10 ml-12 p-6 rounded-lg border-md bg-eerie-black-2">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-700 to-gray-600">
            <Image
              src="/images/BAGUIAN.jpg"
              alt="BAGUIAN Harouna"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          
          <div className="text-center">
            <h1 className="text-white text-xl font-bold mb-1">
              BAGUIAN Harouna
            </h1>
            <p className="text-sm">IA/Data project Manager</p>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col justify-center items-center">
          <hr className="border-gray-700 my-4" />
          
          <ul className="space-y-4">
            <ContactItem
              icon={<Mail />}
              title="EMAIL"
              content="baguian.harouna7231@g..."
            />
            <ContactItem
              icon={<Phone />}
              title="PHONE"
              content="+33745371282"
            />
            <ContactItem
              icon={<Calendar />}
              title="BIRTHDAY"
              content="May 11, 2000"
            />
            <ContactItem
              icon={<MapPin />}
              title="LOCATION"
              content="Nantes, France"
            />
          </ul>
          
          <hr className="border-gray-700 my-4" />
          
          <div className="flex justify-center space-x-4">
            <SocialIcon icon={<GithubIcon />} link="https://github.com/BAGUIAN01" />
            <SocialIcon icon={<Linkedin />} link="https://www.linkedin.com/in/harouna-baguian-29812a20a/" />
            <SocialIcon icon={<Facebook />} link="#"/>
            <SocialIcon icon={<Instagram />} link="#"/>
          </div>
        </div>
      </aside>
    </div>
  );
};

const ContactItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string;
}> = ({ icon, title, content }) => (
  <li className="flex items-center">
    <div className="bg-gray-800 p-2 rounded-full mr-3">{icon}</div>
    <div>
      <p className="text-xs text-gray-500">{title}</p>
      <p className="text-sm">{content}</p>
    </div>
  </li>
);

const SocialIcon: React.FC<{ icon: React.ReactNode, link:string }> = ({ icon, link }) => (
  <Link
    href={link}
    className="bg-gray-800 p-2 rounded-full text-red-500 hover:bg-gray-700 transition-colors"
  >
    {icon}
  </Link>
);