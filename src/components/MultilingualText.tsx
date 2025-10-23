'use client';

import { useState, useEffect } from 'react';

const languages = [
  {
    name: 'English',
    greeting: "Hi, I'm",
    nameText: "Tyrese Muigai",
    title: "Software Developer",
    description: "I'm a passionate software developer based in Nairobi, Kenya. I love creating innovative solutions and bringing ideas to life through code. Let's build something amazing together!"
  },
  {
    name: 'French',
    greeting: "Salut, je suis",
    nameText: "Tyrese Muigai",
    title: "Développeur de Logiciels",
    description: "Je suis un développeur de logiciels passionné basé à Nairobi, au Kenya. J'aime créer des solutions innovantes et donner vie aux idées par le code. Construisons quelque chose d'incroyable ensemble !"
  },
  {
    name: 'Spanish',
    greeting: "Hola, soy",
    nameText: "Tyrese Muigai",
    title: "Desarrollador de Software",
    description: "Soy un desarrollador de software apasionado con sede en Nairobi, Kenia. Me encanta crear soluciones innovadoras y dar vida a las ideas a través del código. ¡Construyamos algo increíble juntos!"
  },
  {
    name: 'Mandarin',
    greeting: "你好，我是",
    nameText: "Tyrese Muigai",
    title: "软件开发者",
    description: "我是一名充满激情的软件开发者，位于肯尼亚内罗毕。我热爱创造创新解决方案，通过代码将想法变为现实。让我们一起构建一些令人惊叹的东西！"
  }
];

export default function MultilingualText() {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0); // 0: greeting, 1: name, 2: title, 3: description
  
  const currentLanguage = languages[currentLanguageIndex];

  useEffect(() => {
    const phases = [
      { text: currentLanguage.greeting, delay: 2000 },
      { text: currentLanguage.nameText, delay: 2000 },
      { text: currentLanguage.title, delay: 2000 },
      { text: currentLanguage.description, delay: 4000 }
    ];

    const currentPhaseData = phases[currentPhase];
    if (!currentPhaseData) return;

    let charIndex = 0;
    setIsTyping(true);
    setDisplayedText('');
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentPhaseData.text.length) {
        setDisplayedText(currentPhaseData.text.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Wait before moving to next phase
        setTimeout(() => {
          if (currentPhase < 3) {
            setCurrentPhase(prev => prev + 1);
          } else {
            // Move to next language
            setTimeout(() => {
              setCurrentLanguageIndex(prev => (prev + 1) % languages.length);
              setCurrentPhase(0);
            }, 2000);
          }
        }, currentPhaseData.delay);
      }
    }, 30);
    
    return () => clearInterval(typeInterval);
  }, [currentPhase, currentLanguageIndex, currentLanguage]);

  const renderContent = () => {
    const showGreeting = currentPhase >= 0;
    const showName = currentPhase >= 1;
    const showTitle = currentPhase >= 2;
    const showDescription = currentPhase >= 3;

    return (
      <div className="min-h-[400px]">
        {/* Greeting and Name */}
        <h1 className="text-6xl font-bold mb-4">
          {showGreeting && (
            <>
              {currentPhase === 0 ? displayedText : currentLanguage.greeting}
              {currentPhase === 0 && isTyping && <span className="animate-pulse">|</span>}
            </>
          )}
          {' '}
          <span className="text-blue-600">
            {showName && (
              <>
                {currentPhase === 1 ? displayedText : currentLanguage.nameText}
                {currentPhase === 1 && isTyping && <span className="animate-pulse">|</span>}
              </>
            )}
          </span>
        </h1>

        {/* Title */}
        {showTitle && (
          <p className="text-2xl text-gray-600 mb-6">
            {currentPhase === 2 ? displayedText : currentLanguage.title}
            {currentPhase === 2 && isTyping && <span className="animate-pulse">|</span>}
          </p>
        )}

        {/* Description */}
        {showDescription && (
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {currentPhase === 3 ? displayedText : currentLanguage.description}
            {currentPhase === 3 && isTyping && <span className="animate-pulse">|</span>}
          </p>
        )}
      </div>
    );
  };

  return renderContent();
}
