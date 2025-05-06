"use client";

import { useState, useRef, useEffect } from 'react';
import { 
  Home, Search, User, Menu, X, ChevronRight, 
  Sparkles, Camera, Video, Star, MessageCircle, PenTool,
  TrendingUp, Heart, ArrowRight, Check, Play, Zap,
  ChevronLeft, Instagram, Youtube
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UGCWebsiteEnhanced() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <UGCShowcase />
      <FeaturesSection />
    </div>
  );
}

// Enhanced Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Initial setting
    setScrolled(window.scrollY > 20);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo with animation */}
            <div className="flex items-center group">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center transition-all duration-300 transform group-hover:rotate-6 ${
                scrolled ? 'shadow-md' : 'shadow-lg'
              }`}>
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className={`ml-2 font-bold text-xl transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Keltoum
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'Explore', 'Creators', 'Pricing'].map((item, index) => (
                <NavItem 
                  key={item} 
                  icon={[<Home key="home" size={18} />, <Search key="search" size={18} />, <User key="user" size={18} />, <TrendingUp key="trending" size={18} />][index]} 
                  label={item} 
                  active={index === 0} 
                  scrolled={scrolled} 
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className={`px-4 py-2 rounded-full border transition-all transform hover:scale-105 ${
                scrolled 
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-100' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}>
                Let's Connect
              </button>
              {/* <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg transition-all transform hover:scale-105 hover:shadow-pink-500/25">
                Sign Up
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full transition-all hover:bg-white/10"
            >
              {mobileMenuOpen ? (
                <X size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
               ) : (
                <Menu size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Animation */}
      <div 
        className={`fixed inset-0 z-40 bg-white md:hidden transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0px' }}
      >
        <div className="container mx-auto px-4 py-6 pt-20">
          <div className="flex flex-col space-y-4">
            {['Home', 'Explore', 'Creators', 'Pricing'].map((item, index) => (
              <MobileNavItem 
                key={item}
                icon={[<Home key="home" size={20} />, <Search key="search" size={20} />, <User key="user" size={20} />, <TrendingUp key="trending" size={20} />][index]}
                label={item}
                active={index === 0}
                delay={index * 0.1}
              />
            ))}
            
            <div className="border-t border-gray-100 pt-4 mt-2"></div>
            
            {/* <button className="w-full py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all transform hover:scale-105">
              Log In
            </button> */}
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-md transition-all transform hover:scale-105">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Desktop Navigation Item
function NavItem({ icon, label, active = false, scrolled = false } : any ) {
  return (
    <div className={`px-4 py-2 rounded-full flex items-center transition-all cursor-pointer hover:scale-105 ${
      active 
        ? 'bg-gradient-to-r from-pink-500/10 to-purple-600/10 font-medium' 
        : scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
    }`}>
      <span className={`mr-1.5 transition-colors duration-300 ${active 
        ? (scrolled ? 'text-purple-600' : 'text-white') 
        : (scrolled ? 'text-gray-600' : 'text-white/80')
      }`}>
        {icon}
      </span>
      <span className={`transition-colors duration-300 ${active 
        ? (scrolled ? 'text-purple-600' : 'text-white') 
        : (scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white')
      }`}>
        {label}
      </span>
    </div>
  );
}

// Mobile Navigation Item with Animation
function MobileNavItem({ icon, label, active = false, delay = 0 }: any) {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`px-4 py-3 rounded-lg flex items-center transition-all duration-500 transform ${
        animated ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
      } ${
        active ? 'bg-gradient-to-r from-pink-500/10 to-purple-600/10 text-purple-600 font-medium' : 'text-gray-700'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
      {active && (
        <span className="ml-auto p-1 rounded-full bg-purple-100">
          <Check size={16} className="text-purple-600" />
        </span>
      )}
    </div>
  );
}

// Enhanced Hero Section
function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const creatorImages = [
    'https://plus.unsplash.com/premium_photo-1685313983071-a9d6a9e700d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMGdlbmVyYXRlZCUyMGNvbnRlbnR8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1685080293061-afa87a9300ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMGdlbmVyYXRlZCUyMGNvbnRlbnR8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1684783848496-afeca1349af5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMGdlbmVyYXRlZCUyMGNvbnRlbnR8ZW58MHx8MHx8fDA%3D',
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-12 -left-12 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content container with entrance animations */}
      <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className={`md:w-1/2 mb-12 md:mb-0 z-10 transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 animate-pulse">
            <Sparkles size={18} className="text-yellow-300 mr-2" />
            <span className="text-white text-sm font-medium font-mono">Your Ultimate Choice For UGC</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {/* Creating & Sharing <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">Amazing</span> Content */}
            Creating & Sharing <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">Amazing</span> Stories That Stick
          </h1>
          
          <p className="text-lg text-white/80 mb-8 max-w-lg">
          I create authentic, eye-catching content that helps your brand stand out. Let's turn your products into stories that connect with your audience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg transition-all flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/25 transform hover:scale-105">
              Get Started
              <ChevronRight size={18} className="ml-1" />
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all transform hover:scale-105 group">
              Watch Demo
              <Play size={18} className="ml-2 inline-block transform group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          <div className="mt-12">
            <div className="text-white/70 mb-3 font-medium">Trusted by top brands</div>
            <div className="flex flex-wrap gap-8">
              {['BRAND', 'BRAND', 'BRAND'].map((item, index) => (
                <div 
                  key={`brand-${index}`}
                  className={`h-8 w-24 bg-white/10 rounded-md flex items-center justify-center text-white/90 font-bold transition-all duration-1000 transform ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.5 + index * 0.2}s` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Visual content with animations */}
        <div className={`md:w-1/2 relative z-10 transition-all duration-1000 transform ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}>
          <div className="relative bg-gradient-to-br from-indigo-600/40 to-purple-600/40 p-2 rounded-xl backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all hover:scale-[1.02]">
            {/* Creator showcase */}
            <div className="relative w-full h-96 md:h-80 lg:h-96 rounded-lg overflow-hidden">
              {creatorImages.map((img, idx) => (
                <div 
                  key={`image-${idx}`}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                    currentImageIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Creator content ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Image controls */}
              <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                {[0, 1, 2].map((idx) => (
                  <button 
                    key={`control-${idx}`}
                    onClick={() => setCurrentImageIndex(idx)} 
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === idx ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 z-10">
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center mr-3 border-2 border-white shadow-md">
                    <img src="https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/thmbnail/profile-djQXDvKIHLdIyfADkkqzzHohOQVnoB.jpeg" alt="Creator" className="rounded-full object-contain" />
                  </div>
                  <div>
                    <p className="text-white font-bold">@ugc_kaltoum</p>
                    <p className="text-white/70 text-sm">UGC Creator</p>
                  </div>
                  <button className="ml-auto bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-white text-sm hover:bg-white/20 transition-all flex items-center group">
                    <span>Follow</span>
                    <Heart size={14} className="ml-1 transform group-hover:scale-125 transition-all" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Stats bar with animations */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { icon: <Camera size={18} className="text-pink-400 mr-2" />, text: "20K+ Photos", color: "pink" },
                { icon: <Video size={18} className="text-blue-400 mr-2" />, text: "5K+ Videos", color: "blue" },
                { icon: <Star size={18} className="text-yellow-400 mr-2" />, text: "500+ Creators", color: "yellow" }
              ].map((item, idx) => (
                <div 
                  key={`stat-${idx}`}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center transition-all hover:bg-${item.color}-500/10 hover:scale-105 cursor-pointer`}
                >
                  {item.icon}
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* Floating elements with animations */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-xl shadow-lg transform rotate-6 hover:rotate-12 transition-all">
              <MessageCircle size={24} className="text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-xl shadow-lg transform -rotate-12 hover:rotate-0 transition-all">
              <Star size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animation classes */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

// New Features Section
function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('features-section');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <PenTool size={24} className="text-indigo-500" />,
      title: "Create Amazing Content",
      description: "Use our powerful tools to create stunning visual content that stands out.",
      delay: 0
    },
    {
      icon: <TrendingUp size={24} className="text-pink-500" />,
      title: "Grow Your Audience",
      description: "Connect with your brand and followers to expand your reach and influence.",
      delay: 0.2
    },
    {
      icon: <Zap size={24} className="text-yellow-500" />,
      title: "Monetize Your Passion",
      description: "We Turn your products into real income with our showcasing opportunities.",
      delay: 0.4
    }
  ];

  return (
    <section 
      id="features-section"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Love Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of content creators who are growing their audience and monetizing their passion with our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={`feature-${index}`}
              className={`p-6 rounded-xl transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } hover:shadow-xl bg-white border border-gray-100 hover:border-transparent group`}
              style={{ transitionDelay: `${feature.delay}s` }}
            >
              <div className="p-4 rounded-full inline-block bg-gray-50 mb-4 group-hover:bg-indigo-50 transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              <a href="#" className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                Learn more
                <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const categories = [
  { id: 'beauty', name: 'Beauty & Skincare' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'food', name: 'Food & Beverages' },
  { id: 'tech', name: 'Tech' },
  { id: 'lifestyle', name: 'Lifestyle' }
];

// Sample video data
const videos = [
  {
    id: 1,
    videoUrl: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/video01-EOAIngsQInTJNZlcCHtjQ7cNp9ejWN.mov",
    category: 'beauty',
    thumbnail: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/thmbnail/thumbnail_video01-mbyeYnfNs07r5PG55gu4D4m5OT4JP5.png",
    title: 'Skincare Routine with Product X',
    likes: 2300,
    platform: 'instagram'
  },
  {
    id: 2,
    videoUrl: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/video02-m3Sq75QP8j2JTpuDN4teKmhDzitcQT.mov",
    category: 'beauty',
    thumbnail: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/thmbnail/thumbnail_video02-INNacbDxw2xhDZZZszqVd7SrjN545O.png",
    title: 'Makeup Transformation',
    likes: 1850,
    platform: 'tiktok'
  },
  {
    id: 3,
    videoUrl: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/video3-NAIGTxWVIgOVAwxDkinAIZrVYOdzda.mp4",
    category: 'fashion',
    thumbnail: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/thmbnail/thumbnail_video03-tPaKwBe8VH2rFr78jtHSNIZpqUuK8W.png",
    title: 'Summer Outfit Ideas',
    likes: 3200,
    platform: 'instagram'
  },
  {
    id: 4,
    videoUrl: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/video4-xMLACceUIQRDNN9nQTy1vyg1k3sHqE.mp4",
    category: 'fashion',
    thumbnail: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/thmbnail/thumbnail_video04-aR5o8U7DwyjRO9jwtNuer7lhVCRqqN.png",
    title: 'Styling Tips for Office Wear',
    likes: 1450,
    platform: 'youtube'
  },
  {
    id: 5,
    videoUrl: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/video5-23xXkGUTJdbdgOTiDaNoNn7IGT5Kgp.mp4",
    category: 'food',
    thumbnail: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/thmbnail/thumbnail_video05-GO04PjdVAwMVp2oWd9AbZGSTFxWcGL.png",
    title: 'Quick Breakfast Ideas',
    likes: 2100,
    platform: 'tiktok'
  },
  {
    id: 6,
    videoUrl: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/video6-ZLbNOfv3fgCYXM1xVlaThVvAq2Guxq.mp4",
    category: 'food',
    thumbnail: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/thmbnail/thmbnail_video06-argqqpTbG1Q09CDBS9ZiXm6JPAVZkQ.png",
    title: 'Dinner Recipe Under 30 Minutes',
    likes: 1700,
    platform: 'instagram'
  },
  {
    id: 7,
    videoUrl: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/video3-NAIGTxWVIgOVAwxDkinAIZrVYOdzda.mp4",
    category: 'tech',
    thumbnail: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/thmbnail/thumbnail_video03-tPaKwBe8VH2rFr78jtHSNIZpqUuK8W.png",
    title: 'Latest Gadget Review',
    likes: 2800,
    platform: 'youtube'
  },
  {
    id: 8,
    videoUrl: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/video3-NAIGTxWVIgOVAwxDkinAIZrVYOdzda.mp4",
    category: 'tech',
    thumbnail: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/thmbnail/thumbnail_video03-tPaKwBe8VH2rFr78jtHSNIZpqUuK8W.png",
    title: 'Tech Unboxing',
    likes: 1950,
    platform: 'tiktok'
  },
  {
    id: 9,
    videoUrl: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/video3-NAIGTxWVIgOVAwxDkinAIZrVYOdzda.mp4",
    category: 'lifestyle',
    thumbnail: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/thmbnail/thumbnail_video03-tPaKwBe8VH2rFr78jtHSNIZpqUuK8W.png",
    title: 'Morning Routine',
    likes: 2650,
    platform: 'instagram'
  },
  {
    id: 10,
    videoUrl: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/video3-NAIGTxWVIgOVAwxDkinAIZrVYOdzda.mp4",
    category: 'lifestyle',
    thumbnail: "https://ub8jcp6z4pti2mte.public.blob.vercel-storage.com/ugc_portfolio/thmbnail/thumbnail_video03-tPaKwBe8VH2rFr78jtHSNIZpqUuK8W.png",
    title: 'Room Makeover',
    likes: 3100,
    platform: 'youtube'
  }
];

type PlatformIconProps = {
  platform: string;
};

const PlatformIcon = ({ platform }: PlatformIconProps) => {
  switch (platform) {
    case 'instagram':
      return <Instagram size={16} className="text-white" />;
    case 'tiktok':
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.589 6.686C19.3007 6.40258 19.0679 6.06435 18.9051 5.68527C18.7424 5.3062 18.6538 4.89725 18.645 4.482C18.6409 4.42093 18.6409 4.35975 18.645 4.299H15.029V15.294C15.0217 15.8566 14.8517 16.404 14.5408 16.8693C14.2299 17.3346 13.7936 17.697 13.286 17.913C12.7784 18.1291 12.2228 18.1902 11.6799 18.0896C11.1371 17.989 10.6338 17.7309 10.2331 17.3478C9.83234 16.9647 9.5524 16.4745 9.42963 15.9383C9.30686 15.4021 9.34679 14.8425 9.54403 14.3278C9.74128 13.8132 10.086 13.3662 10.5384 13.0428C10.9908 12.7194 11.5294 12.5346 12.084 12.511C12.1804 12.5072 12.2768 12.5072 12.373 12.511V8.92001C12.2833 8.91437 12.1935 8.91437 12.104 8.92001C11.2908 8.93371 10.4874 9.12119 9.7513 9.46894C9.01523 9.81669 8.36235 10.3159 7.83932 10.9309C7.31629 11.5459 6.93411 12.2603 6.72071 13.027C6.50731 13.7938 6.46786 14.5959 6.60518 15.3799C6.7425 16.1639 7.05296 16.9107 7.51471 17.5696C7.97647 18.2285 8.57823 18.7825 9.27585 19.193C9.97347 19.6036 10.7507 19.8611 11.557 19.9497C12.3633 20.0384 13.1797 19.9563 13.953 19.7085C14.7263 19.4607 15.4376 19.053 16.0387 18.5144C16.6397 17.9757 17.1171 17.3185 17.44 16.5875C17.7629 15.8564 17.9244 15.0691 17.914 14.274V10.104C18.9587 10.8722 20.1736 11.354 21.446 11.504V7.935C20.7914 7.92661 20.1458 7.78475 19.553 7.51937C19.5518 7.51937 19.59 6.686 19.589 6.686Z" fill="currentColor"/>
      </svg>;
    case 'youtube':
      return <Youtube size={16} className="text-white" />;
    default:
      return null;
  }
};

interface VideoPlayerProps {
  isPlaying: boolean;
  url: string;
  thumbnail: any;
  onPlay: () => void;
}


// video player
const VideoPlayer = ({ isPlaying, url, thumbnail, onPlay }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(err => console.error("Video play error:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="relative h-full w-full" onClick={onPlay}>
      {!isPlaying && (
        <img 
          src={thumbnail} 
          alt="Video thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <video 
        ref={videoRef}
        src={url} 
        className={`w-full h-full object-cover ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
        loop
        muted={!isPlaying}
        playsInline
        preload="metadata"
      />
    </div>
  );
};

function UGCShowcase() {
  const [activeCategory, setActiveCategory] = useState('beauty');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const filteredVideos = videos.filter(video => video.category === activeCategory);
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'right' ? 320 : -320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const handleVideoPlay = (id: number) => {
    if (playingVideo === id) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(id);
      // When playing a video on mobile, pause the autoplay
      setAutoplayPaused(true);
    }
  };
  
  const navigateReel = (direction: 'next' | 'prev', e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    
    // Reset playing state when navigating
    setPlayingVideo(null);
    
    if (direction === 'next') {
      setCurrentReelIndex(prev => 
        prev < filteredVideos.length - 1 ? prev + 1 : 0
      );
    } else {
      setCurrentReelIndex(prev => 
        prev > 0 ? prev - 1 : filteredVideos.length - 1
      );
    }
    
    // Reset autoplay pause when user manually navigates
    setAutoplayPaused(false);
  };
  
  // Category change handler
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentReelIndex(0);
    setPlayingVideo(null);
    setAutoplayPaused(false);
  };
  
  // Handle automatic switching between reels on mobile
  useEffect(() => {
    if (autoplayPaused) return;
    
    const timer = setTimeout(() => {
      navigateReel('next');
    }, 100000);
    
    return () => clearTimeout(timer);
  }, [currentReelIndex, autoplayPaused]);
  
  // Reset state when category changes
  useEffect(() => {
    setCurrentReelIndex(0);
    setPlayingVideo(null);
  }, [activeCategory]);
  
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-purple-900 to-purple-800">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Portfolio Showcase</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Browse through our collection of high-quality UGC content created for various brands and platforms.
          </p>
        </motion.div>
        
        {/* Category Tabs - Improved for mobile scrolling */}
        <div className="flex mb-8 overflow-x-auto py-2 scrollbar-hide no-scrollbar">
          <div className="flex space-x-2 md:space-x-4 mx-auto">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-pink-500 text-white shadow-lg'
                    : 'bg-purple-700/50 text-purple-100 hover:bg-purple-700'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Desktop View - Horizontal Scrolling Grid with improved card design */}
        <div className="hidden md:block relative">
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide"
              ref={scrollContainerRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {filteredVideos.map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="flex-shrink-0 w-64 relative rounded-xl overflow-hidden shadow-xl bg-purple-950"
                >
                  <div className="relative aspect-[9/16] cursor-pointer group">
                    {/* <VideoPlayer 
                      isPlaying={playingVideo === video.id}
                      url={video.videoUrl}
                      thumbnail={video.thumbnail}
                      onPlay={() => handleVideoPlay(video.id)}
                    /> */}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 group-hover:opacity-0 transition-opacity flex flex-col justify-end p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-purple-800 p-1 rounded">
                          <PlatformIcon platform={video.platform} />
                        </span>
                        <span className="text-xs text-purple-200 flex items-center">
                          <Heart size={12} className="mr-1 fill-pink-500 text-pink-500" />
                          {video.likes.toLocaleString()}
                        </span>
                      </div>
                      <h3 className="text-white font-medium text-sm">{video.title}</h3>
                    </div>
                    
                    <div 
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-pink-500 rounded-full p-3"
                      >
                        {playingVideo === video.id ? 
                          // <Pause size={24} className="text-white" /> : 
                          <></> : 
                          <Play size={24} className="text-white" />
                        }
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Desktop navigation buttons */}
            {filteredVideos.length > 3 && (
              <>
                <button 
                  onClick={() => handleScroll('left')} 
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-800/80 hover:bg-purple-700 text-white rounded-full p-2 shadow-lg z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => handleScroll('right')} 
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-800/80 hover:bg-purple-700 text-white rounded-full p-2 shadow-lg z-10"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Mobile View - Instagram/TikTok-like Stories Experience */}
        <div className="md:hidden">
          <div className="relative h-[70vh] max-w-sm mx-auto">
            <AnimatePresence mode="wait">
              {filteredVideos.length > 0 && (
                <motion.div
                  key={currentReelIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl overflow-hidden shadow-xl bg-purple-950 h-full"
                >
                  <div className="relative h-full" onClick={() => handleVideoPlay(filteredVideos[currentReelIndex].id)}>
                    <VideoPlayer 
                      isPlaying={playingVideo === filteredVideos[currentReelIndex].id}
                      url={filteredVideos[currentReelIndex].videoUrl}
                      thumbnail={filteredVideos[currentReelIndex].thumbnail}
                      onPlay={() => handleVideoPlay(filteredVideos[currentReelIndex].id)}
                    />
                    
                    {/* Video Info Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="bg-purple-800 p-1 rounded flex items-center justify-center">
                            <PlatformIcon platform={filteredVideos[currentReelIndex].platform} />
                          </span>
                          <span className="text-white font-medium">
                            {filteredVideos[currentReelIndex].platform.charAt(0).toUpperCase() + 
                             filteredVideos[currentReelIndex].platform.slice(1)}
                          </span>
                        </div>
                        <span className="flex items-center text-white bg-black/30 px-2 py-1 rounded-full">
                          <Heart size={14} className="mr-1 fill-pink-500 text-pink-500" />
                          {filteredVideos[currentReelIndex].likes.toLocaleString()}
                        </span>
                      </div>
                      <h3 className="text-white font-medium text-lg">{filteredVideos[currentReelIndex].title}</h3>
                    </div>
                    
                    {/* Play/Pause Button Overlay */}
                    {!playingVideo && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                          initial={{ opacity: 0.8 }}
                          animate={{ opacity: 0.8 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-pink-500/80 rounded-full p-4"
                        >
                          <Play size={32} className="text-white" />
                        </motion.div>
                      </div>
                    )}
                    
                    {/* Reel Navigation Buttons - More subtle */}
                    <div className="absolute inset-y-0 left-0 w-1/3 z-10" onClick={(e) => navigateReel('prev', e)} />
                    <div className="absolute inset-y-0 right-0 w-1/3 z-10" onClick={(e) => navigateReel('next', e)} />
                    
                    {/* Reel Progress Indicators */}
                    <div className="absolute top-2 inset-x-0 flex justify-center space-x-1 px-4">
                      {filteredVideos.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-1 rounded-full flex-1 ${
                            idx === currentReelIndex ? 'bg-pink-500' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Explicit mobile navigation buttons */}
            <div className="absolute inset-x-0 bottom-16 flex justify-center space-x-8 z-20">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateReel('prev');
                }}
                className="bg-purple-800/70 hover:bg-purple-700 text-white rounded-full p-3"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateReel('next');
                }}
                className="bg-purple-800/70 hover:bg-purple-700 text-white rounded-full p-3"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}