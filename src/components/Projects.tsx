'use client';

import { useState } from 'react';
import { ExternalLink, X, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'GlycoSafe - AI-powered Diabetes Management Platform',
    description: 'Revolutionary mobile application that uses AI and computer vision to analyze food images and provide real-time glycemic impact assessments for diabetes management.',
    fullDescription: 'GlycoSafe addresses the critical challenge of diabetes management by providing instant, AI-powered food analysis through smartphone cameras. The application combines advanced computer vision with machine learning algorithms to identify food items, estimate portion sizes, and calculate glycemic impact in real-time. This empowers users to make informed dietary decisions, track their glucose levels more effectively, and improve their overall health outcomes through personalized nutrition guidance.',
    image: '/glycosafecard.jpg',
    technologies: ['React Native', 'TensorFlow', 'Computer Vision', 'Firebase', 'Node.js', 'MongoDB'],
    features: [
      'AI-powered food recognition and analysis',
      'Real-time glycemic impact calculation',
      'Personalized nutrition recommendations',
      'Glucose level tracking and trends',
      'Offline functionality for remote areas',
      'Multi-language support',
      'Integration with health devices',
      'Secure cloud data synchronization'
    ],
    link: 'https://glycosafe.jhubafrica.com',
    category: 'Health Tech',
    demoVideo: 'https://youtu.be/LS817Ood-0A?si=ivn-ujEsP2O6dsuY',
    hasDetailedPage: false
  },
  {
    id: 2,
    title: 'Corporate Website',
    description: 'Designed and developed a modern corporate website for ByteFlow, featuring a sleek dark mode interface and intuitive navigation.',
    fullDescription: 'The site serves as the central hub for showcasing our services, projects, and thought leadership in the tech space.',
    image: '/byteflowcard.png',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript'],
    link: 'https://byteflow.co.ke',
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'SokoFresh EA - Cold Storage & Advanced Inventory Management Platform',
    description: 'Comprehensive cold chain operations management system for multi-facility cold storage businesses, featuring real-time inventory tracking, equipment monitoring, and workforce coordination.',
    fullDescription: 'A full-stack Progressive Web Application designed to digitize and streamline cold storage operations across multiple facilities. The system provides centralized management of inventory, equipment maintenance, workforce coordination, and inter-facility logistics through an intuitive, mobile-responsive interface. Built with enterprise-grade security and scalability in mind, it transforms reactive operations into proactive management with real-time visibility and automated workflows.',
    image: '/sokofreshcard.png',
    technologies: ['Laravel 10', 'React', 'PostgreSQL', 'Redis', 'Inertia.js', 'TailwindCSS', 'Spatie Permissions'],
    features: [
      'Multi-hub inventory management with real-time stock tracking',
      'Battery health monitoring and maintenance scheduling',
      'Casual labor attendance and payroll tracking',
      'Cold storage unit management with GPS coordinates',
      'Crate movement tracking between facilities',
      'Role-based access control (Admin, Manager, Technician)',
      'Advanced reporting and analytics dashboards',
      'Mobile-responsive Progressive Web App'
    ],
    link: '/projects/sokofresh-ea',
    category: 'Enterprise Software',
    demoVideo: null,
    screenshots: [
      '/sokofresh-dashboard.png',
      '/sokofresh-inventory.png',
      '/sokofresh-visits.png',
      '/sokofresh-labourers.png'
    ],
    hasDetailedPage: true
  },
  {
    id: 4,
    title: 'SmartPOS with Loyalty Rewards & Barcode Intelligence',
    description: 'Advanced point-of-sale system featuring customer loyalty points, intelligent barcode scanning, automated inventory tracking, and comprehensive retail analytics for liquor stores.',
    fullDescription: 'A comprehensive retail management system designed specifically for liquor stores, featuring integrated POS functionality, automated inventory tracking, sales analytics, and customer relationship management. The system streamlines daily operations while providing valuable business insights through detailed reporting and analytics.',
    image: '/liqourstorecardprofile.png',
    technologies: ['Django', 'Vue.js', 'PostgreSQL', 'Stripe API', 'Chart.js'],
    features: [
      'Smart barcode scanning with product recognition',
      'Customer loyalty points and rewards system',
      'Automated inventory tracking and low-stock alerts',
      'Real-time sales analytics and performance insights',
      'Customer purchase history and behavior analysis',
      'Multi-location inventory synchronization',
      'Integrated payment processing (cash, card, mobile)',
      'Mobile-responsive design for on-the-go management'
    ],
    link: '/projects/liquor-store-system',
    category: 'Business Software',
    demoVideo: null,
    screenshots: [
      '/liquor-store-dashboard.png',
      '/liquor-store-pos.png',
      '/liquor-store-inventory.png',
      '/liquor-store-analytics.png'
    ],
    hasDetailedPage: true
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-gold">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 hover:border-2 hover:border-orange-500"
            >
              {/* Project Image */}
              <div className="h-64 relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-gray-800 text-sm rounded border border-gray-400 shadow-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded border border-orange-300 font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.hasDetailedPage ? (
                    <Link
                      href={project.link!}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold text-center transition-colors"
                    >
                      View Details
                    </Link>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                    >
                      Learn More
                    </button>
                  )}
                  
                  {project.demoVideo && (
                    <a
                      href={project.demoVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {selectedProject.description}
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Key Features */}
                {selectedProject.features && (
                  <div className="mb-6">
                    <h4 className="font-bold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 flex items-start">
                          <span className="text-gold mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-bold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/5 text-gray-300 rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.link && !selectedProject.hasDetailedPage && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gold hover:bg-[#ff9d4d] text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Project
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
