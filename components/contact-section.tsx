"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className="mb-8">
      <h2 className="inline-block text-3xl font-bold text-white">
        <span className="border-b-2 border-red-500 pb-1">Contact me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
        <Card className="bg-[hsl(240,2%,20%)] border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your Name" className="bg-[hsl(240,2%,30%)] text-white border-gray-600" />
              <Input type="email" placeholder="Your Email" className="bg-[hsl(240,2%,30%)] text-white border-gray-600" />
              <Textarea placeholder="Your Message" className="bg-[hsl(240,2%,30%)] text-white border-gray-600" rows={4} />
              <Button type="submit" className="bg-[#ff6b6b] hover:bg-[#ff8c8c] text-white">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        
        <Card className="bg-[hsl(240,2%,20%)] border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <Mail size={20} className="text-[#ff6b6b]" />
              <span>baguian.harouna7231@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Phone size={20} className="text-[#ff6b6b]" />
              <span>+33 7 45 37 12 82</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <MapPin size={20} className="text-[#ff6b6b]" />
              <span>Nantes, France</span>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/in/harouna-baguian-29812a20a/" target="_blank" rel="noopener noreferrer" className="text-[#ff6b6b] hover:text-[#ff8c8c]">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/BAGUIAN01" target="_blank" rel="noopener noreferrer" className="text-[#ff6b6b] hover:text-[#ff8c8c]">
                <Github size={24} />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;