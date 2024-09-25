
import EducationTimeline from "@/components/education-timeline";
import ExperienceTimeline from "@/components/experience-timeline";
import SkillsSection from "@/components/my-skills";


export default function AboutPage() {
  return (
    <div className="w-full text-left">
      <h2 className="inline-block text-3xl font-bold text-white">
        <span className="border-b-2 border-red-500 pb-1">My Resume</span>
      </h2>
      <EducationTimeline/>
      <ExperienceTimeline/>
      <SkillsSection/>
      
    </div>
  );
}
