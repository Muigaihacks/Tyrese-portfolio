'use client';

import { ArrowLeft, Home, Users, BookOpen, LayoutGrid, Shield, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AshgatePage() {
  const features = [
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: 'Advanced Listings with 3D Tours & Floor Plans',
      description: 'Properties support 3D virtual tours and floor plan integration, giving buyers and renters an immersive view without leaving the platform. A clear differentiator over typical listing sites.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community – Verified Experts On-Platform',
      description: 'Legal & Conveyancing, Cabro & Landscaping, Solar & Utilities, Moving & Staging. Buyers and renters get related services on Ashgate without outsourcing, every step of the property journey in one place.'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'News & Insights',
      description: 'Educative hub with expert articles and videos on land, property, and market topics, building trust and literacy so users make informed decisions.'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Search & Listings',
      description: 'Browse houses, apartments, land, and commercial properties with filters and featured listings. SEO-optimized property pages and expansion-ready architecture for East Africa.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Verified & Secure Ecosystem',
      description: 'All properties and experts are vetted. Multi-role access (Admin, Landlord, Agent, Tenant, General User). Upcoming: property management (M-Pesa, tenant management) and development advisory modules.'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Laravel', category: 'Backend Framework' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Caching' },
    { name: 'Cloudflare', category: 'Storage & CDN' },
    { name: 'TailwindCSS', category: 'Styling' },
    { name: 'TypeScript', category: 'Type Safety' },
    { name: 'REST API', category: 'Integration' },
    { name: 'Laravel Sanctum', category: 'API Auth' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/#projects" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
                Real Estate Tech
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Ashgate Real Estate Platform
              </h1>
              <h2 className="text-2xl text-gray-700 mb-8">
                East Africa’s premium real estate ecosystem
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A full-stack platform built for Ashgate Ltd, from finding a home to managing investments and accessing verified experts, all in one place. Advanced listings with 3D tours and floor plans, an on-platform expert community, News & Insights, and a roadmap for property management and development advisory.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.ashgate.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live System
                </a>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Image 
                  src="/ashgate-card.jpg" 
                  alt="Ashgate platform hero"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h3>
              <div className="space-y-4 text-gray-600">
                <p>Property seekers and investors in East Africa often face:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Listings without 3D tours or floor plans, hard to assess remotely
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Scattered search for legal, moving, solar, and landscaping services
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Lack of trusted, educative content on land and property
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Disconnected tools for buying, renting, and managing property
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h3>
              <div className="space-y-4 text-gray-600">
                <p>Ashgate delivers a single ecosystem:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Advanced listings with 3D tours and floor plans
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Verified expert community for legal, cabro, solar, moving & staging
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    News & Insights for education and trust
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Roadmap for property management and development advisory
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h3>
            <p className="text-xl text-gray-600">What the platform offers today and next</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h3>
            <p className="text-xl text-gray-600">Built for scale and performance</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Strengths */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Ashgate</h3>
            <p className="text-xl text-gray-600">Strengths that set the platform apart</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">3D & Floor Plans</div>
              <div className="text-gray-600">Immersive listings ahead of typical market offerings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">All On-Platform</div>
              <div className="text-gray-600">Listings, experts, and education in one ecosystem</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">East Africa Focus</div>
              <div className="text-gray-600">Verified, secure, and built for regional scale</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
