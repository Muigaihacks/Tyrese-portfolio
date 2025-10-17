'use client';

import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Mobile Application',
    description: 'Developed a mobile application powered by AI and computer vision to analyze food images and accurately assess their glycemic impact.',
    fullDescription: 'This innovative solution aims to help individuals make informed dietary decisions, improving health outcomes.',
    image: '/project-1.jpg',
    technologies: ['React Native', 'AI/ML', 'Computer Vision', 'Firebase'],
    link: 'https://glycosafe.jhubafrica.com',
    category: 'Mobile App'
  },
  {
    id: 2,
    title: 'Corporate Website',
    description: 'Designed and developed a modern corporate website for ByteFlow, featuring a sleek dark mode interface and intuitive navigation.',
    fullDescription: 'The site serves as the central hub for showcasing our services, projects, and thought leadership in the tech space.',
    image: '/project-2.jpg',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript'],
    link: 'https://byteflow.co.ke',
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'SokoFresh Inventory System',
    description: 'A comprehensive inventory management system built for cold storage operations with real-time tracking.',
    fullDescription: 'Features include battery management, casual labor oversight, and advanced reporting capabilities.',
    image: '/project-3.jpg',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Redis'],
    link: null,
    category: 'Enterprise Software'
  },
  {
    id: 4,
    title: 'Liquor Store Management',
    description: 'Complete POS and inventory solution for retail liquor stores with automated stock tracking.',
    fullDescription: 'Streamlines operations with sales analytics and customer management features.',
    image: '/project-4.jpg',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    link: null,
    category: 'Business Software'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-gold">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="dark-card rounded-xl overflow-hidden cursor-pointer group"
            >
              {/* Project Image */}
              <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">📱</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full border border-gold/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gold/20 text-gold text-sm rounded border border-gold/30">
                      +{project.technologies.length - 3}
                    </span>
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

                {selectedProject.link && (
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
