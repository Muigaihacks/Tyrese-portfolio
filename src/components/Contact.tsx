'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 code-bg opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let&apos;s Build Something <span className="text-gold">Amazing</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Looking for a developer who can turn your vision into reality? With expertise across 
            the full stack and a proven track record, I&apos;m here to help.
          </p>
        </div>

        {/* Why Work With Me */}
        <div className="mb-12 p-8 dark-card rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6">Why Work With Me?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <span>Full-stack expertise with modern technologies</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <span>Co-founder of ByteFlow with real business experience</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <span>Delivered projects from health tech to e-commerce</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <span>Commitment to clean code and best practices</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 dark-card rounded-lg">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Email</p>
                  <a href="mailto:tyrese@byteflow.co.ke" className="text-white hover:text-gold transition-colors">
                    tyrese@byteflow.co.ke
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 dark-card rounded-lg">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Phone</p>
                  <a href="tel:+254700000000" className="text-white hover:text-gold transition-colors">
                    +254 700 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 dark-card rounded-lg">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Location</p>
                  <p className="text-white">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="dark-card rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400">Thank you for reaching out. I&apos;ll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                />
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors resize-none"
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-[#ff9d4d] disabled:bg-gray-700 text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
