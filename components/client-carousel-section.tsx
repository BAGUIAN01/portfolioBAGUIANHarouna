"use client"


import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Client {
  name: string;
  logo: string;
}

const ClientsCarouselSection: React.FC = () => {
  const clients: Client[] = [
    { name: "ToemeXpertise", logo: "/images/toemexpertise_logo.png" },
    { name: "Kderra soudure", logo: "/images/kderra_logo.png" },
    // { name: "Company C", logo: "/images/company-c.png" },
    // { name: "Company D", logo: "/images/company-d.png" },
    // { name: "Company E", logo: "/images/company-e.png" },
  ];

  return (
    <section className="">
      <div className="container mx-auto pt-6 ">
        <h2 className="text-3xl font-bold text-white mb-8 text-left">Clients</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full  mx-auto "
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="bg-eerie-black-2 border-gray-700">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={150}
                        height={150}
                        className="max-w-full max-h-full object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
         
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsCarouselSection;