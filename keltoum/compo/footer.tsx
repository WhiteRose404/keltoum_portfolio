import React from 'react';
import { Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          {/* Logo and Description */}
          <div className="max-w-sm">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-2">
                U
              </div>
              <span className="text-white text-xl font-medium">Keltoum</span>
            </div>
            <p className="text-purple-200 mb-4">
              Creating authentic, eye-catching UGC content that helps brands stand out and connect with their audience.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto">
            <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-md w-full md:w-64 focus:outline-none"
              />
              <button className="bg-pink-500 hover:bg-pink-600 transition-colors text-white px-4 py-2 rounded-r-md flex items-center">
                Subscribe
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-b border-purple-800">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Food & Beverage UGC</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Beauty & Skincare Content</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Fashion Showcases</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Tech Reviews</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Lifestyle Content</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-purple-200">Email: hello@ugc-keltoum.com</li>
              <li className="text-purple-200">Based in: New York, NY</li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    <Youtube size={20} />
                  </a>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Terms */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 text-sm mb-4 md:mb-0">
            © 2025 Keltoum UGC Creator. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-purple-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-purple-300 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-purple-300 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;