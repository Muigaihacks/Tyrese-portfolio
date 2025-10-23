'use client';

import { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, MapPin, Users, Database, Shield, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SokoFreshEAPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const screenshots = [
    { src: '/inventorytracking.png', alt: 'User Interface - Inventory Management', title: 'Inventory Tracking Module' },
    { src: '/gpsmappedfacilities.png', alt: 'User Interface - GPS Mapping', title: 'GPS-mapped Facility Assets' },
    { src: '/admindashboard.png', alt: 'Admin Interface - Dashboard', title: 'Admin Dashboard Overview' },
    { src: '/casuallabourercoordination.png', alt: 'Admin Interface - Workforce', title: 'Casual Labourer Coordination' },
    { src: '/inventoryactionlog.png', alt: 'Admin Interface - Tracking', title: 'Inventory Action Log' },
    { src: '/maintenancevisit.png', alt: 'Admin Interface - Maintenance', title: 'Scheduled Maintenance Visits' }
  ];

  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Multi-Hub Inventory Management',
      description: 'Real-time tracking of tools, spare parts, and assets across all facilities with automated stock alerts and condition monitoring.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Equipment Health Monitoring',
      description: 'Proactive battery and equipment maintenance with automated scheduling, health tracking, and failure prevention.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Workforce Coordination',
      description: 'Complete casual labor management including attendance tracking, safety compliance, and automated payroll preparation.'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Geographic Intelligence',
      description: 'GPS-mapped facility operations with real-time location tracking and inter-facility logistics coordination.'
    }
  ];

  const technologies = [
    { name: 'Laravel 10', category: 'Backend Framework' },
    { name: 'React', category: 'Frontend Library' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Caching' },
    { name: 'Inertia.js', category: 'Full-stack Integration' },
    { name: 'TailwindCSS', category: 'Styling' },
    { name: 'Spatie Permissions', category: 'Authorization' },
    { name: 'Progressive Web App', category: 'Mobile Experience' }
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                Enterprise Software
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                SokoFresh EA - Cold Storage & Advanced Inventory Management Platform
              </h1>
              <h2 className="text-2xl text-gray-700 mb-8">
                Enterprise-grade cold chain operations management
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A comprehensive Progressive Web Application that digitizes cold storage operations across multiple facilities. 
                Built for enterprise-scale cold chain businesses, it provides real-time visibility, automated workflows, 
                and centralized management of inventory, equipment, workforce, and logistics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Request Demo
                </Link>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Database className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Enterprise Dashboard</h3>
                    <p className="text-blue-100">Real-time Operations Control</p>
                  </div>
                </div>
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
                <p>Cold storage businesses face significant operational challenges:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Disconnected systems for tracking inventory, equipment, and personnel
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Manual paper-based processes prone to errors and data loss
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Lack of real-time visibility across multiple facilities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Inefficient maintenance scheduling leading to costly failures
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h3>
              <div className="space-y-4 text-gray-600">
                <p>SokoFresh EA transforms cold storage operations through:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Centralized digital platform for all operations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Real-time visibility across all facilities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Automated workflows and proactive maintenance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mobile-first design for field operations
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
            <p className="text-xl text-gray-600">Comprehensive cold storage operations management</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">System Screenshots</h3>
            <p className="text-xl text-gray-600">Explore the interface and functionality</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {screenshots.map((screenshot, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-12 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                      <Image 
                        src={screenshot.src} 
                        alt={screenshot.alt}
                        width={64}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{screenshot.title}</h4>
                      <p className="text-sm text-gray-600">{screenshot.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-full max-w-2xl mx-auto mb-4">
                  <Image 
                    src={screenshots[selectedImage].src} 
                    alt={screenshots[selectedImage].alt}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{screenshots[selectedImage].title}</h4>
                <p className="text-gray-600">{screenshots[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h3>
            <p className="text-xl text-gray-600">Built with modern, enterprise-grade technologies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Business Impact</h3>
            <p className="text-xl text-gray-600">Measurable results for cold storage operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">Reduction in manual paperwork</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Less equipment downtime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Real-time operational visibility</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
