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
    {
      title: "AI-Driven HVAC Control",
      description:
        "Developed an AI solution for optimizing heating and cooling in commercial buildings.",
      technologies: ["Python", "Machine Learning", "Azure", "Next.js"],
      category: "AI/Data",
      imageUrl: "/images/adas.jpg",
      projectUrl: "https://example.com/hvac-project",
    },
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
        imageUrl: "/images/ccapteurs_tester.jpg",
        githubUrl: "https://github.com/BAGUIAN01/Kderra-website.git",
      },
    // Add more projects as needed
  ];

  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-white mb-6">Portfolio</h2>
      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="mb-4">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="text-red-500"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <Card
                    key={project.title}
                    className="bg-[hsl(240,2%,20%)] border-gray-700"
                  >
                    <CardHeader>
                      
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          width={1918}
                          height={916}
                        //   layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                          className="rounded-t-lg"
                        />
                      
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-white mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 mb-4">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-[hsl(240,2%,30%)] text-[#ff6b6b]"
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
                            <ExternalLink size={20} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff6b6b] hover:text-[#ff8c8c] transition-colors"
                          >
                            <Github size={20} />
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
