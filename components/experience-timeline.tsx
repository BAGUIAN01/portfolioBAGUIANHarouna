"use client"

import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const ExperienceTimeline: React.FC = () => {
  const experienceItems: ExperienceItem[] = [
    {
      title: "AI/Data Project Manager full time",
      company: "nodewise/Vinci-energie",
      period: "2024 – present",
      location: "Nantes, France",
      description: [
        "Improving an AI-driven solution for controlling heating and air conditioning equipment in commercial buildings.",
        "Data processing",
        "Deep learning "
      ]
    },
    {
      title: "AI/Data Project Manager (Apprenticeship)",
      company: "nodewise/Vinci-energie",
      period: "2023 – present",
      location: "Nantes, France",
      description: [
        "Improving an AI-driven solution for controlling heating and air conditioning equipment in commercial buildings.",
        "Data processing",
        "Development of a web platform for solution supervision (Nextjs, FastAPI, Azure)"
      ]
    },
    {
      title: "Assistant Engineer Intern",
      company: "Not specified",
      period: "03/2023 – 07/2023",
      location: "Lannion, France",
      description: [
        "Developing a low-cost product for vehicle classification using radar, lidar, and artificial intelligence methods.",
        "Sensor fusion, Computer vision (YOLO), Agile project management",
        "Deep learning, Python, C++, Raspberry Pi"
      ]
    },
    {
      title: "Assistant Engineer Intern",
      company: "CNESTEN (Morocco)",
      period: "07/2022 – 09/2022",
      location: "Kenitra, Morocco",
      description: [
        "Creation of an application for the segmentation of industrial radiographic images.",
        "OpenCV, Deep learning, Machine learning",
        "Otsu's algorithm, U-Net, Scikit-image, Streamlit, QT, Python for experimentation"
      ]
    }
  ];

  return (
    <section className="timeline mb-8">
      <div className="title-wrapper flex items-center gap-4 mb-6">
        <div className="icon-box bg-[hsl(240,2%,20%)] p-3 rounded-full">
          <Briefcase className="text-[#ff6b6b]" size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white">Experience</h3>
      </div>

      <ol className="timeline-list text-sm ml-[30px]">
        {experienceItems.map((item, index) => (
          <li key={index} className="timeline-item relative mb-8 last:mb-0 pl-6">
            <h4 className="timeline-item-title text-base font-semibold text-white mb-2">{item.title}</h4>
            <span className="text-[#ff6b6b] font-normal block mb-1">{item.company}</span>
            <span className="text-gray-400 font-light block mb-2">{item.period} | {item.location}</span>
            <ul className="timeline-text text-gray-400 font-light list-disc pl-4">
              {item.description.map((desc, idx) => (
                <li key={idx} className="mb-1">{desc}</li>
              ))}
            </ul>
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

export default ExperienceTimeline;