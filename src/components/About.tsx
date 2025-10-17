'use client';

import { Database, Cpu, Monitor, Shield, Cloud } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Backend Development',
    description: 'I develop robust and scalable backends that work seamlessly. With knowledge in various tech stacks I am able to develop solutions suitable for a particular use case.'
  },
  {
    icon: Cpu,
    title: 'AI Development & Integration',
    description: 'I build AI solutions to streamline operations and optimize processes for both businesses and individuals.'
  },
  {
    icon: Monitor,
    title: 'Frontend Development',
    description: 'I specialize in backend development but also have hands-on experience in crafting intuitive and responsive frontends.'
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture & Security',
    description: 'Design and implement secure, scalable cloud infrastructure solutions on AWS, GCP, and other platforms with best practices.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Implement security best practices, vulnerability assessments, and protection strategies to safeguard applications and data.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gold">About</span> Me
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I&apos;m Tyrese Muigai, a software developer with a passion for solving complex problems and 
              transforming ideas into impactful solutions. My expertise lies in full-stack development, 
              machine learning, and systems design, where I strive to build applications that are both 
              innovative and user-centric.
            </p>
            
            <p>
              I&apos;m also a Co-founder of{' '}
              <a href="https://byteflow.co.ke" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline font-semibold">
                ByteFlow
              </a>
              , a startup dedicated to delivering custom software solutions that empower businesses and 
              streamline their operations. Through ByteFlow, I&apos;ve had the privilege of working on diverse 
              projects that challenge my creativity and technical skills.
            </p>
            
            <p>
              Beyond the code, I enjoy immersing myself in learning, constantly exploring new technologies, 
              and growing as a developer. If you&apos;d like to collaborate or learn more about my work, 
              let&apos;s connect!
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-12">
            My <span className="text-gold">Services</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="dark-card rounded-xl p-8 transition-all hover:scale-105"
              >
                <div className="w-14 h-14 bg-gold/20 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gold to-[#ff9d4d] p-[2px] rounded-lg">
            <div className="bg-black px-8 py-4 rounded-lg">
              <p className="text-2xl font-bold mb-2">
                <span className="gradient-gold">Whatever you imagine, I can build</span>
              </p>
              <p className="text-gray-400">Let&apos;s turn your vision into reality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
