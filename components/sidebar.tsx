"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import { GithubIcon } from "./icons";
import Link from "next/link";

export const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:block"> {/* Hidden on mobile, visible from md breakpoint */}
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
            <p className="text-sm">AI/Data Project Manager</p>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col justify-center items-center">
          <hr className="border-gray-700 my-4 w-full" />
          
          <ul className="space-y-4 w-full">
            <ContactItem
              icon={<Mail />}
              title="EMAIL"
              content="baguian.harouna7231@g..."
              link="mailto:baguian.harouna7231@gmail.com"
            />
            <ContactItem
              icon={<Phone />}
              title="PHONE"
              content="+33 * ** ** ** **"
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
          
          <hr className="border-gray-700 my-4 w-full" />
          
          <div className="flex justify-center space-x-4">
            <SocialIcon icon={<GithubIcon />} link="https://github.com/BAGUIAN01" />
            <SocialIcon icon={<Linkedin />} link="https://www.linkedin.com/in/harouna-baguian-29812a20a/" />
            <SocialIcon icon={<Facebook />} link="#" />
            <SocialIcon icon={<Instagram />} link="#" />
          </div>
        </div>
      </aside>
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content, link }) => (
  <li className="flex items-center">
    <div className="bg-gray-800 p-2 rounded-full mr-3">{icon}</div>
    <div>
      <p className="text-xs text-gray-500">{title}</p>
      {link ? (
        <a href={link} className="text-sm hover:text-red-500 transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-sm">{content}</p>
      )}
    </div>
  </li>
);

interface SocialIconProps {
  icon: React.ReactNode;
  link: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, link }) => (
  <Link
    href={link}
    className="bg-gray-800 p-2 rounded-full text-red-500 hover:bg-gray-700 transition-colors"
  >
    {icon}
  </Link>
);