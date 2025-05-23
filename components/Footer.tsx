import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000435] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-white">
              © 2024 WhatBytes. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-100 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-blue-100 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-blue-100 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-blue-100 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;