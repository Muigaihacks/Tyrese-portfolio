'use client';

export default function TechStack() {
  const frontendTechnologies = [
    {
      name: 'React',
      icon: '⚛️',
      color: '#61DAFB'
    },
    {
      name: 'Next.js',
      icon: '▲',
      color: '#FFFFFF'
    },
    {
      name: 'Angular',
      icon: '🅰️',
      color: '#DD0031'
    },
    {
      name: 'Svelte',
      icon: '🍊',
      color: '#FF3E00'
    },
    {
      name: 'Vue.js',
      icon: '💚',
      color: '#4FC08D'
    },
    {
      name: 'TypeScript',
      icon: '📘',
      color: '#3178C6'
    },
    {
      name: 'TailwindCSS',
      icon: '🌊',
      color: '#06B6D4'
    },
    {
      name: 'JavaScript',
      icon: '🟨',
      color: '#F7DF1E'
    }
  ];

  const backendTechnologies = [
    {
      name: 'Python',
      icon: '🐍',
      color: '#3776AB'
    },
    {
      name: 'Django',
      icon: '🎸',
      color: '#092E20'
    },
    {
      name: 'Laravel',
      icon: '🔴',
      color: '#FF2D20'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      color: '#339933'
    },
    {
      name: 'Golang',
      icon: '🔷',
      color: '#00ADD8'
    },
    {
      name: 'PostgreSQL',
      icon: '🐘',
      color: '#336791'
    },
    {
      name: 'Redis',
      icon: '🔴',
      color: '#DC382D'
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      color: '#47A248'
    },
    {
      name: 'Firebase',
      icon: '🔥',
      color: '#FFCA28'
    }
  ];

  const toolsAndPlatforms = [
    {
      name: 'Vercel',
      icon: '▲',
      color: '#000000'
    },
    {
      name: 'Render',
      icon: '🎨',
      color: '#46E3B7'
    },
    {
      name: 'Railway',
      icon: '🚂',
      color: '#0B0D0E'
    },
    {
      name: 'AWS',
      icon: '☁️',
      color: '#FF9900'
    },
    {
      name: 'GCP',
      icon: '🌩️',
      color: '#4285F4'
    },
    {
      name: 'Docker',
      icon: '🐳',
      color: '#2496ED'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 code-bg opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          <span className="text-gold">Skills</span> & Technologies
        </h2>

        {/* Frontend Technologies */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
            Frontend Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {frontendTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 dark-card rounded-xl transition-all hover:scale-105"
              >
                <div className="text-5xl mb-3">{tech.icon}</div>
                <h3 className="text-white font-semibold text-center">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
            Backend Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {backendTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 dark-card rounded-xl transition-all hover:scale-105"
              >
                <div className="text-5xl mb-3">{tech.icon}</div>
                <h3 className="text-white font-semibold text-center">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
            Tools & Deployment Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {toolsAndPlatforms.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 dark-card rounded-xl transition-all hover:scale-105"
              >
                <div className="text-5xl mb-3">{tech.icon}</div>
                <h3 className="text-white font-semibold text-center">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}