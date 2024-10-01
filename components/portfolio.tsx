"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  period?: string;
}

const PortfolioSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Blurev",
      description:
        "Study and characterization of marine micro-organisms through image processing and AI.",
      technologies: ["Python", "PyPI", "Otsu", "Streamlit", "YOLO"],
      category: "AI/Data",
      imageUrl: "/images/blurev_dashboard.png",
      period: "09/2023 – present",
    },
    {
      title: "Data Laboratory",
      description:
        "Web application for no-code machine learning. An educational application for machine learning.",
      technologies: [
        "Machine Learning",
        "SVC",
        "KNN",
        "Tree",
        "Voting",
        "Bagging",
        "Seaborn",
        "Plotly",
      ],
      category: "AI/Data",
      imageUrl: "/images/data_laboratory.png",
      period: "2022 – 2023",
    },
    {
      title: "Fine-tuning BLOOM",
      description:
        "Fine-tuning the BLOOM LLM for specific tasks including humor classification, joke generation, English-French translation preserving wordplay, and text simplification.",
      technologies: ["NLP", "BLOOM", "Fine-tuning", "Hugging Face"],
      category: "AI/Data",
      imageUrl: "/images/bloom.PNG",
      period: "03/2024 – present",
    },
    // {
    //   title: "AI-Driven HVAC Control",
    //   description:
    //     "Developed an AI solution for optimizing heating and cooling in commercial buildings.",
    //   technologies: ["Python", "Machine Learning", "Azure", "Next.js"],
    //   category: "AI/Data",
    //   imageUrl: "/images/adas.jpg",
    //   projectUrl: "https://example.com/hvac-project",
    // },
    {
      title: "Vehicle Classification System",
      description:
        "Created a low-cost solution for classifying vehicles using radar, lidar, and AI.",
      technologies: ["Python", "YOLO", "C++", "Raspberry Pi"],
      category: "AI/Data",
      imageUrl: "/images/YOLO.jpg",
      githubUrl: "https://github.com/yourusername/vehicle-classification",
    },
    {
      title: "Radiographic Image Segmentation",
      description:
        "Developed an application for segmenting industrial radiographic images.",
      technologies: ["OpenCV", "Deep Learning", "Python", "Streamlit"],
      category: "AI/Data",
      imageUrl: "/images/image_segmentation.png",
    },
    {
      title: "Kderra website",
      description:
        "Designed and developed a responsive website.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      category: "Web Development",
      imageUrl: "/images/kderra_website.PNG",
      projectUrl: "https://www.kderrasoudure.fr/",
      githubUrl: "https://github.com/BAGUIAN01/Kderra-website.git",
    },
    {
        title: "ToemeXpertise website",
        description:
          "Designed and developed a responsive  website.",
        technologies: ["React", "Next.js", "Tailwind CSS", "Shadcnui"],
        category: "Web Development",
        imageUrl: "/images/toemexpertise_website.PNG",
        projectUrl: "https://www.kderrasoudure.fr/",
        githubUrl: "https://github.com/BAGUIAN01/Kderra-website.git",
      },
      {
        title: "Smartphone capteurs tester",
        description:
          "Designed and developed a mobile app to test smarphone capteurs.",
        technologies: ["Android studio", "Java"],
        category: "Mobile Development",
        imageUrl: "/images/capteurs_tester.jpg",
        githubUrl: "https://github.com/BAGUIAN01/Kderra-website.git",
      },
      {
        title: "My portfolio",
        description:
          "Designed and developed a responsive portfolio.",
        technologies: ["Android studio", "Java"],
        category: "Web Development",
        imageUrl: "/images/portfolio.PNG",
        githubUrl: "https://github.com/BAGUIAN01/Kderra-website.git",
      },
      {
        title: "Joker",
        description:
          "Jokes classification",
        technologies: ["Machine learning", "Pyton"],
        category: "AI/Data",
        imageUrl: "/images/stacking.png",
        githubUrl: "https://github.com/BAGUIAN01/Joker.git",
      },
      {
        title: "breast cancer",
        description:
          "Designed and developed a responsive website",
        technologies: ["HTML5", "CSS", "JavaScript"],
        category: "Web Development",
        imageUrl: "/images/cancer-de-sein.png",
        githubUrl: "https://github.com/BAGUIAN01/cancer-de-sein-website.git",
      },
      {
        title: "store management softwarer",
        description:
          "store management software, use to manage sales, orders and generate invoices",
        technologies: ["PyQT", "CSS", "Python", "SQL"],
        category: "Software",
        imageUrl: "/images/gestion-de-magasin.PNG",
        githubUrl: "",
      },
      {
        title: "Virtual Reality",
        description:
          "Virtual museum with babylon",
        technologies: ["Babylonjs", "Javascript"],
        category: "Virtual Reality",
        imageUrl: "/images/muse-rev.PNG",
        githubUrl: "",
      },
      {
        title: "Simulator",
        description:
          "Simulator",
        technologies: ["Tkinter", "Python"],
        category: "Software",
        imageUrl: "/images/simulateur-tkinter.PNG",
        githubUrl: "https://github.com/BAGUIAN01/simulator-tkinter.git",
      },
    // Add more projects as needed
  ];

  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  return (
    <section className="mb-8">
      <h2 className="inline-block text-3xl font-bold text-white">
        <span className="border-b-2 border-red-500 pb-1">Portfolio</span>
      </h2>
      <Tabs defaultValue={categories[0]} className="w-full py-6">
        <TabsList className="mb-4 flex flex-wrap justify-center md:justify-start gap-2">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="text-red-500 text-sm md:text-base"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <Card
                    key={project.title}
                    className="bg-[hsl(240,2%,20%)] border-gray-700 flex flex-col"
                  >
                    <CardHeader className="p-0">
                      <div className="relative w-full pt-[56.25%]">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col p-4">
                      <CardTitle className="text-white text-lg md:text-xl mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 text-sm md:text-base mb-4 flex-grow">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-[hsl(240,2%,30%)] text-[#ff6b6b] text-xs md:text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.projectUrl && (
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff6b6b] hover:text-[#ff8c8c] transition-colors"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff6b6b] hover:text-[#ff8c8c] transition-colors"
                          >
                            <Github size={18} />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default PortfolioSection;
