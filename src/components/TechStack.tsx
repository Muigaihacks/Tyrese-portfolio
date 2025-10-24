'use client';

export default function TechStack() {
  const technologies = [
    {
      name: 'JavaScript',
      icon: '🟨',
      color: '#F7DF1E'
    },
    {
      name: 'Python',
      icon: '🐍',
      color: '#3776AB'
    },
    {
      name: 'Golang',
      icon: '🔷',
      color: '#00ADD8'
    },
    {
      name: 'React',
      icon: '⚛️',
      color: '#61DAFB'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      color: '#339933'
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
      name: 'Next.js',
      icon: '▲',
      color: '#FFFFFF'
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
      name: 'AWS',
      icon: '☁️',
      color: '#FF9900'
    },
    {
      name: 'GCP',
      icon: '🌩️',
      color: '#4285F4'
    }
  ];

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 code-bg opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gold">Languages</span> & Frameworks
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
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
    </section>
  );
}