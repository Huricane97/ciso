import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Users, Award, TrendingUp, Shield, Zap, ArrowRight, Check, Twitter, Linkedin, Facebook, Instagram, Mail, Phone } from 'lucide-react';

const CTISummitLanding: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll handler for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section-id');
          if (sectionId) {
            setVisibleSections((prev) => new Set(prev).add(sectionId));
          }
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      company: 'Tech Innovations Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Leading expert in cybersecurity and threat intelligence with 15+ years of experience.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Security Architect',
      company: 'Global Security Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Specialist in threat detection and incident response strategies.',
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'Cyber Defense Labs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Pioneer in AI-driven threat intelligence and behavioral analysis.',
    },
    {
      name: 'James Thompson',
      role: 'Threat Intelligence Lead',
      company: 'SecureNet Systems',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Expert in APT analysis and threat hunting methodologies.',
    },
  ];

  const schedule = [
    {
      time: '09:00 - 09:30',
      title: 'Registration & Networking Breakfast',
      type: 'Networking',
    },
    {
      time: '09:30 - 10:15',
      title: 'Opening Keynote: The Future of Threat Intelligence',
      speaker: 'Dr. Sarah Chen',
      type: 'Keynote',
    },
    {
      time: '10:15 - 10:30',
      title: 'Coffee Break',
      type: 'Break',
    },
    {
      time: '10:30 - 11:30',
      title: 'Panel Discussion: Evolving Threat Landscape',
      speakers: ['Michael Rodriguez', 'Dr. Emily Watson', 'James Thompson'],
      type: 'Panel',
    },
    {
      time: '11:30 - 12:30',
      title: 'Workshop: Building Effective Threat Intelligence Programs',
      speaker: 'Michael Rodriguez',
      type: 'Workshop',
    },
    {
      time: '12:30 - 13:30',
      title: 'Lunch & Networking',
      type: 'Networking',
    },
    {
      time: '13:30 - 14:30',
      title: 'AI-Powered Threat Detection',
      speaker: 'Dr. Emily Watson',
      type: 'Presentation',
    },
    {
      time: '14:30 - 15:30',
      title: 'Advanced Threat Hunting Techniques',
      speaker: 'James Thompson',
      type: 'Presentation',
    },
    {
      time: '15:30 - 16:00',
      title: 'Afternoon Break',
      type: 'Break',
    },
    {
      time: '16:00 - 17:00',
      title: 'Closing Keynote: Next-Generation Security',
      speaker: 'Dr. Sarah Chen',
      type: 'Keynote',
    },
  ];

  const sponsors = [
    { name: 'TechCorp', tier: 'Platinum', logo: 'TC' },
    { name: 'SecureNet', tier: 'Gold', logo: 'SN' },
    { name: 'CyberShield', tier: 'Gold', logo: 'CS' },
    { name: 'DataGuard', tier: 'Silver', logo: 'DG' },
    { name: 'ThreatWatch', tier: 'Silver', logo: 'TW' },
    { name: 'InfoSec Pro', tier: 'Silver', logo: 'IP' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Threat Intelligence',
      description: 'Learn cutting-edge techniques for identifying and mitigating cyber threats.',
    },
    {
      icon: TrendingUp,
      title: 'Industry Trends',
      description: 'Stay ahead with insights into the latest security trends and technologies.',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with industry leaders, experts, and peers in cybersecurity.',
    },
    {
      icon: Award,
      title: 'Expert Speakers',
      description: 'Learn from renowned professionals with years of real-world experience.',
    },
  ];

  // Helper function to check if section is visible
  const isSectionVisible = (sectionId: string) => visibleSections.has(sectionId);

  // Helper function to set section ref
  const setSectionRef = (sectionId: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[sectionId] = el;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E23] via-[#0F172A] to-[#0A0E23] text-white">
      {/* Loading Screen */}
      {isLoading && (
        <div className={`fixed inset-0 z-[100] bg-gradient-to-b from-[#0A0E23] via-[#0F172A] to-[#0A0E23] flex items-center justify-center transition-opacity duration-1000 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-8">
              <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-400 animate-pulse" />
              </div>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              CTI Summit 2025
            </h2>
            <p className="text-gray-400 mt-2 animate-pulse">Loading...</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0E23]/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CTI Summit 2025
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#speakers" className="text-gray-300 hover:text-white transition-colors">Speakers</a>
              <a href="#schedule" className="text-gray-300 hover:text-white transition-colors">Schedule</a>
              <a href="#sponsors" className="text-gray-300 hover:text-white transition-colors">Sponsors</a>
              <a href="#register" className="btn-primary">Register Now</a>
            </div>
            <button className="md:hidden text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ${
          !isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse floating-orb"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse drift-orb"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl sparkle-orb"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              !isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`} style={{ transitionDelay: '200ms' }}>
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">December 3, 2025</span>
            </div>
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent transition-all duration-1000 ${
              !isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '400ms' }}>
              CISO Conclave
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Summit 2025 
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 ${
              !isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '600ms' }}>
              Join Chief Information Security Officers and industry leaders for a premier conclave 
              featuring cutting-edge insights, strategic threat intelligence and executive-level 
              networking in cybersecurity.
            </p>
            <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-1000 ${
              !isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '800ms' }}>
              <a href="#register" className="btn-primary inline-flex items-center space-x-2 group hover:scale-105 transition-transform duration-300">
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn-secondary inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                <span>Learn More</span>
              </a>
            </div>
            <div className={`mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400 transition-all duration-1000 ${
              !isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '1000ms' }}>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Mcs Qasid Complex, Rawalpindi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>1 Day</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>500+ Attendees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={setSectionRef('features')}
        data-section-id="features"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isSectionVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className={`card p-6 text-center transition-all duration-700 hover:scale-105 ${
                    isSectionVisible('features') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about"
        ref={setSectionRef('about')}
        data-section-id="about"
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-white/5 transition-all duration-1000 ${
          isSectionVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isSectionVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>About CTI Summit 2025</h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 ${
              isSectionVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              The premier CISO Conclave bringing together Chief Information Security Officers, 
              cybersecurity professionals, threat intelligence analysts, and security leaders.
            </p>
          </div>
          <div className="mb-12">
            <div className="card p-8 mb-8">
              <h3 className="text-3xl font-semibold mb-6 text-center">Central Topic & Theme</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">Central Topic</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    "Navigating the Evolving Cyber Threat Landscape: Strategic Intelligence, 
                    Proactive Defense, and Executive Leadership in the Age of Advanced Persistent Threats"
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-purple-400">Theme & Scope</h4>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    The CTI Summit 2025 CISO Conclave focuses on empowering security executives 
                    and leaders with actionable threat intelligence, strategic insights, and 
                    innovative defense methodologies. Our comprehensive scope encompasses:
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Strategic Threat Intelligence:</strong> Building and leveraging threat intelligence programs that drive executive decision-making and organizational resilience</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Advanced Persistent Threats (APTs):</strong> Understanding, detecting, and defending against sophisticated nation-state and criminal threat actors</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>AI-Powered Security:</strong> Leveraging artificial intelligence and machine learning for threat detection, analysis, and automated response</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Zero Trust Architecture:</strong> Implementing comprehensive zero-trust frameworks and identity-centric security models</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Incident Response & Crisis Management:</strong> Building effective response capabilities and executive communication strategies during security incidents</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Regulatory Compliance & Risk Management:</strong> Navigating complex regulatory landscapes while maintaining security posture</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Supply Chain Security:</strong> Managing third-party risks and securing the extended enterprise ecosystem</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Executive Leadership:</strong> Communicating security value to boards, managing budgets, and building security-first organizational cultures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Attend?</h3>
              <ul className="space-y-4">
                {[
                  'Learn from industry-leading CISOs and security executives',
                  'Discover the latest threat intelligence tools and techniques',
                  'Network with peers and industry leaders',
                  'Gain insights into emerging threats and attack vectors',
                  'Participate in hands-on workshops and training sessions',
                  'Access exclusive research and case studies',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-4">Event Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">500+ Professionals</h4>
                    <p className="text-gray-400 text-sm">Connect with industry leaders</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">15+ Expert Speakers</h4>
                    <p className="text-gray-400 text-sm">Learn from the best in the field</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">20+ Sessions</h4>
                    <p className="text-gray-400 text-sm">Keynotes, panels, and workshops</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section 
        id="speakers"
        ref={setSectionRef('speakers')}
        data-section-id="speakers"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isSectionVisible('speakers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isSectionVisible('speakers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>Featured Speakers</h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 ${
              isSectionVisible('speakers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              Learn from industry experts and thought leaders in cybersecurity and threat intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div 
                key={index} 
                className={`card p-6 text-center group hover:scale-105 transition-all duration-700 ${
                  isSectionVisible('speakers') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                <p className="text-blue-400 text-sm mb-1">{speaker.role}</p>
                <p className="text-gray-400 text-sm mb-3">{speaker.company}</p>
                <p className="text-gray-500 text-xs">{speaker.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section 
        id="schedule"
        ref={setSectionRef('schedule')}
        data-section-id="schedule"
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-white/5 transition-all duration-1000 ${
          isSectionVisible('schedule') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isSectionVisible('schedule') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>Event Schedule</h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 ${
              isSectionVisible('schedule') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              Two days packed with insightful sessions, workshops, and networking opportunities.
            </p>
          </div>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div 
                key={index} 
                className={`card p-6 hover:bg-white/10 transition-all duration-700 ${
                  isSectionVisible('schedule') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-24 text-blue-400 font-semibold">
                      {item.time}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      {item.speaker && (
                        <p className="text-gray-400 text-sm">Speaker: {item.speaker}</p>
                      )}
                      {item.speakers && (
                        <p className="text-gray-400 text-sm">
                          Speakers: {item.speakers.join(', ')}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'Keynote' ? 'bg-blue-500/20 text-blue-400' :
                      item.type === 'Panel' ? 'bg-purple-500/20 text-purple-400' :
                      item.type === 'Workshop' ? 'bg-green-500/20 text-green-400' :
                      item.type === 'Presentation' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section 
        id="sponsors"
        ref={setSectionRef('sponsors')}
        data-section-id="sponsors"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isSectionVisible('sponsors') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isSectionVisible('sponsors') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>Our Sponsors</h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 ${
              isSectionVisible('sponsors') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              Thank you to our amazing sponsors who make this event possible.
            </p>
          </div>
          <div className="space-y-12">
            {/* Platinum */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-400">Platinum Sponsors</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {sponsors.filter(s => s.tier === 'Platinum').map((sponsor, index) => (
                  <div key={index} className="card p-8 w-48 h-32 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">{sponsor.logo}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Gold */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-400">Gold Sponsors</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {sponsors.filter(s => s.tier === 'Gold').map((sponsor, index) => (
                  <div key={index} className="card p-6 w-40 h-28 flex items-center justify-center">
                    <span className="text-xl font-bold text-yellow-400">{sponsor.logo}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Silver */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-400">Silver Sponsors</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {sponsors.filter(s => s.tier === 'Silver').map((sponsor, index) => (
                  <div key={index} className="card p-4 w-32 h-24 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-400">{sponsor.logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section 
        id="register"
        ref={setSectionRef('register')}
        data-section-id="register"
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transition-all duration-1000 ${
          isSectionVisible('register') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isSectionVisible('register') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>Ready to Join Us?</h2>
          <p className={`text-xl text-gray-300 mb-8 transition-all duration-1000 ${
            isSectionVisible('register') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            Secure your spot at the most anticipated cybersecurity event of the year.
          </p>
          <div className="card p-8 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-field"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Company"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Job Title"
                className="input-field"
              />
              <button type="submit" className="btn-primary w-full">
                Register Now
              </button>
              <p className="text-sm text-gray-400">
                Early bird pricing available until October 15, 2025
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">CTI Summit</span>
              </div>
              <p className="text-gray-400 text-sm">
                The premier cybersecurity and threat intelligence conference.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Event</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
                <li><a href="#sponsors" className="hover:text-white transition-colors">Sponsors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Venue</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@ctisummit.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© 2025 CTI Summit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CTISummitLanding;

