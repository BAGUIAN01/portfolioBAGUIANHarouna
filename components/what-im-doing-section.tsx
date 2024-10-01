"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Database, Layout, Server, Smartphone,  LucideIcon } from "lucide-react";

interface Activity {
  title: string;
  description: string;
  icon: LucideIcon;
}

const WhatImDoingSection: React.FC = () => {
  const activities: Activity[] = [
    {
      title: "Artificial Intelligence",
      description: "Developing cutting-edge AI solutions for complex problem-solving and automation.",
      icon: Brain,
    },
    {
      title: "Data Science",
      description: "Analyzing and interpreting complex data sets to drive informed decision-making.",
      icon: Database,
    },
    {
      title: "Front-end Development",
      description: "Creating responsive and intuitive user interfaces with modern web technologies.",
      icon: Layout,
    },
    {
      title: "Backend Development",
      description: "Building robust and scalable server-side applications and APIs.",
      icon: Server,
    },
    {
      title: "Mobile Development",
      description: "Crafting native and cross-platform mobile applications for iOS and Android.",
      icon: Smartphone,
    },
    {
      title: "Virtual Reality",
      description: "Designing immersive VR experiences and applications for various industries.",
      icon: Server,
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">What I &lsquo;m Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="bg-eerie-black-2 shadow-md border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <activity.icon className="h-14 w-14 text-red-500" />
                  <div>
                    <CardTitle className="text-white">{activity.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {activity.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatImDoingSection;