'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: "/a2.jpg",
      overlayText: "ACCURATE CONSTRUCTION ESTIMATES",
      date: "On Oct 6, 2025",
      title: "Complete Guide to Construction Cost Estimating",
      link: "/blogs/construction-estimating"
    },
    {
      id: 2,
      image: "/a4.jpg", 
      overlayText: "PLUMBING ESTIMATION MADE EASY",
      date: "On Sep 15, 2025",
      title: "How to Estimate Plumbing Projects Accurately",
      link: "/blogs/plumbing-estimation"
    },
    {
      id: 3,
      image: "/a6.jpg",
      overlayText: "MASTER THE ART OF ESTIMATING", 
      date: "On Sep 1, 2025",
      title: "Best Practices for Project Cost Estimation",
      link: "/blogs/estimating-best-practices"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}>Our Blogs</h1>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-3" style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}>{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}>
                  {post.title}
                </h3>
                
                {/* Read More Button */}
                <Link href={post.link}>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium" style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}>
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
