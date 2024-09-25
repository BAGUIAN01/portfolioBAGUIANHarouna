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
    <section className="timeline mb-8">
      <div className="title-wrapper flex items-center gap-4 mb-6">
        <div className="icon-box bg-[hsl(240,2%,20%)] p-3 mt-4 rounded-full">
          <Book className="text-[#ff6b6b]" size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white">Education</h3>
      </div>

      <ol className="timeline-list text-sm ml-[30px]">
        {educationItems.map((item, index) => (
          <li key={index} className="timeline-item relative mb-8 last:mb-0 pl-6">
            <h4 className="timeline-item-title text-base font-semibold text-white mb-2">{item.title}</h4>
            <span className="text-[#ff6b6b] font-normal block mb-1">{item.institution}</span>
            <span className="text-gray-400 font-light block mb-2">{item.period} | {item.location}</span>
            {item.description && (
              <p className="timeline-text text-gray-400 font-light">{item.description}</p>
            )}
          </li>
        ))}
      </ol>

      <style jsx>{`
        .timeline-item:not(:last-child)::before {
          content: "";
          position: absolute;
          top: 0;
          left: -1px;
          width: 1px;
          height: calc(100% + 32px);
          background: hsl(240, 2%, 20%);
        }

        .timeline-item::after {
          content: "";
          position: absolute;
          top: 5px;
          left: -5px;
          height: 8px;
          width: 8px;
          background: linear-gradient(to right, #ff6b6b, #ff4757);
          border-radius: 50%;
          box-shadow: 0 0 0 4px hsl(240, 2%, 20%);
        }
      `}</style>
    </section>
  );
};

export default EducationTimeline;