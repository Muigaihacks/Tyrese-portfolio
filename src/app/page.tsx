'use client';

import Image from 'next/image';
import { 
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation - Bigger and More Distinct */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b-2 border-gold shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-white">
                <span className="text-gold">OZONE</span> CONSULTANCY
              </div>
            </div>
            
            <div className="flex items-center gap-10">
              <a href="#home" className="text-white hover:text-gold transition-colors font-medium text-lg">
                Home
              </a>
              <a href="#about" className="text-white hover:text-gold transition-colors font-medium text-lg">
                About
              </a>
              <a href="#projects" className="text-white hover:text-gold transition-colors font-medium text-lg">
                Portfolio
              </a>
              <a href="#contact" className="bg-gold hover:bg-[#ff9d4d] text-black px-8 py-3 rounded-md font-bold text-lg transition-colors shadow-lg">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Photo RIGHT in CIRCLE, Text LEFT */}
      <section id="home" className="min-h-screen flex items-center pt-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 code-bg opacity-30"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div>
              <h1 className="text-6xl font-bold mb-6">
                <span className="text-gold">Tyrese</span> Muigai,
              </h1>
              <p className="text-3xl text-gray-300 mb-8 font-semibold">Software Developer</p>
              
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                I&apos;m a software developer with a passion for building innovative solutions, 
                sharing knowledge through blogs, and exploring the ever-evolving tech landscape.
              </p>

              {/* Social Links */}
              <div className="flex gap-5">
                <a
                  href="https://linkedin.com/in/tyrese-muigai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/5 hover:bg-gold/20 rounded-lg flex items-center justify-center transition-colors border-2 border-white/10 hover:border-gold"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/tyrese-muigai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/5 hover:bg-gold/20 rounded-lg flex items-center justify-center transition-colors border-2 border-white/10 hover:border-gold"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:tyrese@byteflow.co.ke"
                  className="w-14 h-14 bg-white/5 hover:bg-gold/20 rounded-lg flex items-center justify-center transition-colors border-2 border-white/10 hover:border-gold"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right - Circular Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gold">
                <Image 
                  src="/profile-photo.jpg" 
                  alt="Tyrese Muigai"
                  fill
                  className="object-cover object-top"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Tech Stack */}
      <TechStack />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024 Ozone Consultancy. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/tyrese-muigai" className="text-gray-500 hover:text-gold transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/tyrese-muigai" className="text-gray-500 hover:text-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:tyrese@byteflow.co.ke" className="text-gray-500 hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
