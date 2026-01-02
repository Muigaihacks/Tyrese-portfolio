'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Projects from '@/components/Projects';
import MultilingualText from '@/components/MultilingualText';
import KratosLogo from '@/components/KratosLogo';
import AtomLoader from '@/components/AtomLoader';
import Atom from '@/components/Atom';
import { 
  Github,
  Linkedin,
  Mail,
  Code2,
  Heart,
  Coffee,
  MapPin,
  Phone,
  FileDown,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AtomLoader show={loading} />
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.6s ease-out",
        }}
      >
        <div className="min-h-screen bg-white">
          {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center gap-2 sm:gap-3 group" onClick={() => setMobileMenuOpen(false)}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Atom 
                  size={60} 
                  className="relative z-10 sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px]" 
                  nucleusColor="#1e40af" 
                  electronColor="#2563eb"
                  orbitColor="rgba(37, 99, 235, 0.4)"
                />
              </div>
              <KratosLogo size="medium" />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Skills
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col gap-4 pt-4">
                <a 
                  href="#home" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#skills" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <div className="relative">
              <MultilingualText />

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                <a
                  href="mailto:tyresemuigai09@gmail.com"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors text-white"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/tyrese-muigai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-colors text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/tyrese-muigai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#projects"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  Get In Touch
                </a>
                <a
                  href="/Tyrese_Muigai_Resume.pdf"
                  download
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  <FileDown className="w-5 h-5" />
                  Resume
                </a>
              </div>
            </div>

            {/* Right - Profile Photo with Orbiting Tech Icons */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Orbiting Tech Icons */}
                <div className="absolute inset-0 animate-spin-slow">
                  {/* React Icon */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">
                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                      </svg>
                    </div>
                  </div>

                  {/* TypeScript Icon */}
                  <div className="absolute top-12 right-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg">TS</span>
                    </div>
                  </div>

                  {/* Node.js Icon */}
                  <div className="absolute right-0 top-1/2 translate-x-8 -translate-y-1/2">
                    <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Laravel Icon */}
                  <div className="absolute bottom-12 right-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-sm">PHP</span>
                    </div>
                  </div>

                  {/* AWS Icon */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8">
                    <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xs">AWS</span>
                    </div>
                  </div>

                  {/* Docker Icon */}
                  <div className="absolute bottom-12 left-4">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-.997.09-.297-2.2-1.746-3.358-1.818-3.414l-.338-.288-.186.387c-.23.47-.413.98-.534 1.512-.16.728-.096 1.446.19 2.114-.328.174-.632.316-.941.43-.576.211-1.221.322-1.897.322H.784l-.03.32a11.85 11.85 0 00.676 4.019c.6 1.618 1.686 2.804 3.23 3.52C6.347 19.19 8.52 19.5 10.66 19.5c8.195 0 14.01-4.97 14.01-11.982 0-.002 0-.003 0-.004 1.066-.14 1.668-.69 1.836-.963l.145-.293-.043-.03z"/>
                      </svg>
                    </div>
                  </div>

                  {/* MongoDB Icon */}
                  <div className="absolute left-0 top-1/2 -translate-x-8 -translate-y-1/2">
                    <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xs">DB</span>
                    </div>
                  </div>

                  {/* JavaScript Icon */}
                  <div className="absolute top-12 left-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <span className="text-gray-900 font-bold text-lg">JS</span>
                    </div>
                  </div>
                </div>

                {/* Profile Photo with Glow Effect */}
                <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-blue-400 ring-opacity-50 hover:ring-opacity-100 hover:ring-8 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
                  <Image 
                    src="/profile-photo.jpg" 
                    alt="Tyrese Muigai"
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">About Me</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Get to know more about my journey and what drives my passion for software development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left - My Journey */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  My journey into technology began with a deep curiosity about cybersecurity — 
                  understanding how systems work, how they can be exploited, and more importantly, 
                  how they can be protected. This foundation gave me a strong appreciation for 
                  building secure and reliable software from the ground up.
                </p>
                <p>
                  However, my perspective shifted when I developed my first functional system. I 
                  realized that beyond securing systems, I had the ability to create them — to bring 
                  ideas to life through code. From that point on, I dove fully into software 
                  development, combining creativity with technical depth to build impactful digital 
                  solutions.
                </p>
                <p>
                  Over time, I&apos;ve worked on projects ranging from machine learning platforms to 
                  business management systems, each strengthening my skills in full-stack development, 
                  cloud deployment, and data handling. My approach remains rooted in cybersecurity 
                  principles — ensuring that every product I build is both functional and secure.
                </p>
                <p>
                  Beyond development, I founded <span className="font-semibold text-blue-600">Kratos Systems</span> — 
                  a software development company focused on delivering scalable web applications, 
                  innovative digital products, and comprehensive business solutions. Kratos Systems 
                  represents the culmination of my work showcased in this portfolio — from AI-powered 
                  health platforms and real estate management systems to enterprise inventory solutions 
                  and retail POS systems. We transform complex ideas into seamless, production-ready 
                  systems that drive real business value.
                </p>
                <p>
                  Today, I continue to evolve as a developer — exploring modern frameworks, improving 
                  user experiences, and applying secure coding practices to every project I undertake.
                </p>
              </div>
            </div>

            {/* Right - Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative bg-white/20 backdrop-blur-2xl p-6 rounded-3xl border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group overflow-hidden">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/20">
                    <Code2 className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white drop-shadow-lg">Clean Code</h4>
                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
                    I write maintainable, scalable, and well-documented code.
                  </p>
                </div>
              </div>

              <div className="relative bg-white/20 backdrop-blur-2xl p-6 rounded-3xl border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group overflow-hidden">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/20">
                    <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                  <h4 className="font-bold text-lg mb-2 text-white drop-shadow-lg">Problem Solver</h4>
                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
                  I enjoy tackling complex challenges and finding innovative solutions.
                </p>
                </div>
              </div>

              <div className="relative bg-white/20 backdrop-blur-2xl p-6 rounded-3xl border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group overflow-hidden">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/20">
                    <Heart className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white drop-shadow-lg">Team Player</h4>
                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
                    I collaborate well with cross-functional teams and value communication.
                  </p>
                </div>
              </div>

              <div className="relative bg-white/20 backdrop-blur-2xl p-6 rounded-3xl border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group overflow-hidden">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/20">
                    <Coffee className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white drop-shadow-lg">Continuous Learner</h4>
                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
                    I stay updated with the latest technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">Skills & Technologies</h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">
              Here are the technologies and skills I work with to create amazing experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Frontend Development */}
            <div className="relative bg-white/15 backdrop-blur-2xl p-8 rounded-3xl border border-white/25 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group overflow-hidden">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">React</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">TypeScript</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">JavaScript</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">HTML5</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">CSS3</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Tailwind CSS</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Next.js</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Vue.js</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Angular</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Svelte</span>
                </div>
              </div>
            </div>

            {/* Backend Development */}
            <div className="relative bg-white/15 backdrop-blur-2xl p-8 rounded-3xl border border-white/25 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group overflow-hidden">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Backend Development</h3>
              <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Node.js</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Python</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Express.js</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Django</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Laravel</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">PHP</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">RESTful APIs</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">GraphQL</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">MongoDB</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">PostgreSQL</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">MySQL</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Redis</span>
                </div>
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div className="relative bg-white/15 backdrop-blur-2xl p-8 rounded-3xl border border-white/25 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group overflow-hidden">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Cloud Infrastructure</h3>
              <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">AWS</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Microsoft Azure</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Google Cloud Platform</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Docker</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Kubernetes</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">CI/CD</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Firebase</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Vercel</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Render</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Railway</span>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="relative bg-white/15 backdrop-blur-2xl p-8 rounded-3xl border border-white/25 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group overflow-hidden">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Git</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">GitHub</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Figma</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">VS Code</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Postman</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Linux</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Nginx</span>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="relative bg-white/15 backdrop-blur-2xl p-8 rounded-3xl border border-white/25 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group overflow-hidden">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Problem Solving</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Team Collaboration</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Communication</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Project Management</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Agile</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-2xl text-sm font-medium shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">Mentoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              I&apos;m always open to discussing new opportunities and interesting projects. Let&apos;s 
              connect and create something amazing together!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-600">tyresemuigai09@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-600">+254 718 004 282</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-gray-600">Nairobi, Kenya</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Enter your message"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <KratosLogo size="medium" showTagline={true} variant="dark" className="mb-2" />
              <p className="text-gray-400 mt-2">Tyrese Muigai • Software Developer • Nairobi, Kenya</p>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:tyresemuigai09@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Muigaihacks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tyrese-muigai-32a62630b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            © 2025 Kratos Systems. All rights reserved.
          </div>
        </div>
      </footer>
        </div>
      </div>
    </>
  );
}
