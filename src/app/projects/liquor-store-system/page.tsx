'use client';

import { useState } from 'react';
import { ArrowLeft, Github, ShoppingCart, BarChart, Users, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LiquorStoreSystemPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const screenshots = [
    { src: '/userdashboard.png', alt: 'User Dashboard', title: 'Employee Dashboard Overview' },
    { src: '/userbackup.png', alt: 'System Backup', title: 'Data Backup & Preservation' },
    { src: '/userinventory.png', alt: 'Inventory Management', title: 'Current Store Inventory' },
    { src: '/quicksale.png', alt: 'Quick Sales', title: 'Barcode Scanner Sales' },
    { src: '/salereceiptprint.png', alt: 'Receipt Printing', title: 'Customer Receipt Generation' },
    { src: '/registerloyaltypoints.png', alt: 'Loyalty Registration', title: 'Customer Onboarding' },
    { src: '/loyaltypoints.png', alt: 'Loyalty Points', title: 'Points Lookup & Redemption' }
  ];

  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Smart Barcode Intelligence',
      description: 'Advanced barcode scanning with automatic product recognition, price lookup, and inventory updates in real-time.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Loyalty Rewards System',
      description: 'Comprehensive customer loyalty program with points accumulation, tier-based rewards, and automated redemption tracking.'
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Real-time sales analytics with customer behavior insights, inventory performance, and profit margin optimization.'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Multi-Payment Integration',
      description: 'Seamless payment processing supporting cash, cards, mobile payments, and loyalty point redemption.'
    }
  ];

  const technologies = [
    { name: 'Django', category: 'Backend Framework' },
    { name: 'Vue.js', category: 'Frontend Framework' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Stripe API', category: 'Payment Processing' },
    { name: 'Chart.js', category: 'Data Visualization' },
    { name: 'Bootstrap', category: 'UI Framework' },
    { name: 'RESTful API', category: 'Integration' },
    { name: 'Responsive Design', category: 'Mobile Support' }
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                Business Software
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                SmartPOS with Loyalty Rewards & Barcode Intelligence
              </h1>
              <h2 className="text-2xl text-gray-700 mb-8">
                Advanced Point-of-Sale System with Customer Loyalty & Smart Scanning
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A comprehensive retail management system designed specifically for liquor stores, featuring integrated POS functionality, 
                automated inventory tracking, sales analytics, and customer relationship management. Streamlines daily operations while 
                providing valuable business insights through detailed reporting and analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
                <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">POS Dashboard</h3>
                    <p className="text-green-100">Complete Retail Management</p>
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
                <p>Liquor stores face unique operational challenges:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Complex inventory management with varying product types and regulations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Manual sales tracking and limited business insights
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Age verification and compliance requirements
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Seasonal demand fluctuations and inventory optimization
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h3>
              <div className="space-y-4 text-gray-600">
                <p>Comprehensive retail management platform featuring:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Integrated POS with barcode scanning and payment processing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Automated inventory tracking with low-stock alerts
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Customer management with loyalty programs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Real-time analytics and business intelligence
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
            <p className="text-xl text-gray-600">Complete retail management solution</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-green-600 mb-4">
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
                      ? 'border-green-500 bg-green-50' 
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
            <p className="text-xl text-gray-600">Built with modern web technologies</p>
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
            <p className="text-xl text-gray-600">Measurable results for retail operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
              <div className="text-gray-600">Faster checkout process</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
              <div className="text-gray-600">Reduction in inventory waste</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50%</div>
              <div className="text-gray-600">Better customer insights</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
