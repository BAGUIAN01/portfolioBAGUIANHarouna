"use client"

import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: "Python", level: 90, category: "Programming" },
    { name: "JavaScript/TypeScript", level: 85, category: "Programming" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "Next.js", level: 75, category: "Frontend" },
    { name: "FastAPI", level: 70, category: "Backend" },
    { name: "Machine Learning", level: 85, category: "AI/Data Science" },
    { name: "Deep Learning", level: 80, category: "AI/Data Science" },
    { name: "Computer Vision", level: 75, category: "AI/Data Science" },
    { name: "Azure", level: 65, category: "Cloud" },
    { name: "Docker", level: 70, category: "DevOps" },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map(category => (
          <div key={category} className="bg-[hsl(240,2%,20%)] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#ff6b6b] mb-4">{category}</h3>
            <div className="space-y-4">
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white">{skill.name}</span>
                      <Badge variant="outline" className="bg-[hsl(240,2%,30%)] text-[#ff6b6b]">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Slider
                      defaultValue={[skill.level]}
                      max={100}
                      step={1}
                      className="cursor-default"
                      disabled
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;