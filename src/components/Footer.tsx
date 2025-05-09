
import React from 'react';
import { Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">DevPortfolio</h3>
            <p className="text-gray-300">Sr. Technology Lead at Appinventiv</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-tech-purple transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-tech-purple transition-colors">
              <Youtube size={24} />
            </a>
            <a href="#" className="hover:text-tech-purple transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0">
            © {currentYear} DevPortfolio. All rights reserved.
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
