import ClientsCarouselSection from "@/components/client-carousel-section";
import WhatImDoingSection from "@/components/what-im-doing-section";

export default function AboutPage() {
  return (
    <div className="w-full text-left">
      <h2 className="inline-block text-3xl font-bold text-white">
        <span className="border-b-2 border-red-500 pb-1">About me</span>
      </h2>
      <div className="py-6">
        Passionate about solving complex challenges by harnessing the power of
        data-driven insights and cutting-edge AI technologies. With a strong
        foundation in project management, full stack development, and data
        science.
      </div>
     
      <WhatImDoingSection/>
      <ClientsCarouselSection/>
    </div>
  );
}
