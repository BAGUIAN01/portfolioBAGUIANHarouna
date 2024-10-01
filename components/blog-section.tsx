"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Introduction to AI in Project Management',
    excerpt: 'Discover how AI is revolutionizing the field of project management and improving efficiency.',
    date: '2024-03-15',
    imageUrl: '/images/ai-project-management.jpg',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'The Future of Data Science',
    excerpt: 'Exploring emerging trends and technologies shaping the future of data science.',
    date: '2024-03-10',
    imageUrl: '/images/data-science-future.jpg',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'Machine Learning Best Practices',
    excerpt: 'Learn about the best practices for implementing machine learning in your projects.',
    date: '2024-03-05',
    imageUrl: '/images/ml-best-practices.jpg',
    readTime: '6 min read',
  },

];

const BlogSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="inline-block text-3xl font-bold text-white">
        <span className="border-b-2 border-red-500 pb-1">Blog</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
          <Card key={post.id} className="bg-[hsl(240,2%,20%)] border-gray-700 overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative w-full pt-[56.25%]">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl text-white mb-2">{post.title}</CardTitle>
              <CardDescription className="text-gray-400 mb-4">{post.excerpt}</CardDescription>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button asChild className="w-full bg-red-500 hover:bg-red-600 text-white">
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;