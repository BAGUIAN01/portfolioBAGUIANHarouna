
import EducationTimeline from "@/components/education-timeline";
import ExperienceTimeline from "@/components/experience-timeline";
import SkillsSection from "@/components/my-skills";


export default function AboutPage() {
  return (
    <div className="w-full text-left">
      <h1 className="text-3xl font-bold">My resume</h1>
      <EducationTimeline/>
      <ExperienceTimeline/>
      <SkillsSection/>
      
    </div>
  );
}
