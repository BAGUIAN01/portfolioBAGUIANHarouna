"use client"

import React from 'react';
import { Book } from 'lucide-react';

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

const EducationTimeline: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      title: "General Engineering, Artificial Intelligence and Virtual Reality specialization",
      institution: "National School of Engineers of Brest (ENIB)",
      period: "2022 – present",
      location: "Brest, France",
      description: "Specialization in AI and virtual reality. Projects focused on applying AI in immersive virtual environments."
    },
    {
      title: "University Diploma in Entrepreneurship",
      institution: "Institute of Business Administration",
      period: "2022 – 2023",
      location: "Brest, France",
      description: "Training in business management, strategy, and innovation. Development of leadership and project management skills."
    },
    {
      title: "Industrial Engineering with AI and Data Science specialization",
      institution: "National Higher School of Arts and Crafts",
      period: "2018 – 2023",
      location: "Meknes, Morocco",
      description: "In-depth training in industrial engineering with a specialization in AI and data science. Practical projects in industrial data analysis and process optimization."
    }
  ];

  return (
    <section className="mb-8 py-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#333] p-3 mt-4 rounded-full">
          <Book className="text-[#ff6b6b]" size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white">Education</h3>
      </div>

      <ol className="text-sm ml-[30px]">
        {educationItems.map((item, index) => (
          <li key={index} className="relative mb-8 last:mb-0 pl-6 before:content-[''] before:absolute before:top-0 before:left-[-1px] before:w-[1px] before:h-[calc(100%+32px)] before:bg-[#333] after:content-[''] after:absolute after:top-[5px] after:left-[-5px] after:h-[8px] after:w-[8px] after:bg-gradient-to-r after:from-[#ff6b6b] after:to-[#ff4757] after:rounded-full after:shadow-[0_0_0_4px_#333]">
            <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
            <span className="text-[#ff6b6b] font-normal block mb-1">{item.institution}</span>
            <span className="text-gray-400 font-light block mb-2">{item.period} | {item.location}</span>
            {item.description && (
              <p className="text-gray-400 font-light">{item.description}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default EducationTimeline;