import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icon';
import { BRAND } from '../constants';
import { Chatbot } from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Opportunities', path: '/opportunities' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Bar - Hidden on scroll for clean look */}
      <div className={`bg-gradient-to-r from-brand-blue to-blue-900 text-white py-2 text-sm hidden md:block transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href={`tel:${BRAND.phone1}`} className="flex items-center gap-2 hover:text-brand-yellow transition-colors"><Icon name="Phone" size={14} /> {BRAND.phone1}</a>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-brand-yellow transition-colors"><Icon name="Mail" size={14} /> {BRAND.email}</a>
          </div>
          <div className="flex space-x-4">
            <span>{BRAND.timings}</span>
            <span className="font-bold text-brand-yellow animate-pulse">JOIN REVOLUTION!</span>
          </div>
        </div>
      </div>

      {/* Navbar - Glassmorphism */}
      <nav className={`sticky top-0 z-40 transition-all duration-500 ${scrolled ? 'glass-effect py-2 shadow-lg' : 'bg-white py-4 shadow-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300 shadow-md">S</div>
              <div className="leading-tight">
                <h1 className="text-xl font-bold font-heading text-brand-blue group-hover:text-brand-orange transition-colors">SAA FORCE</h1>
                <p className="text-xs text-brand-orange font-semibold tracking-widest">JANN SHAKTI</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`font-semibold relative px-2 py-1 transition-colors ${isActive(link.path) ? 'text-brand-orange' : 'text-gray-600 hover:text-brand-blue'}`}
                >
                  {link.name}
                  {isActive(link.path) && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange rounded-full animate-fade-in-up"></span>}
                </Link>
              ))}
              <Link to="/contact" className="bg-gradient-to-r from-brand-orange to-red-500 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Join Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-brand-blue p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 absolute w-full shadow-2xl h-screen z-50 animate-fade-in-up">
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`font-semibold text-lg border-b border-gray-50 pb-2 ${isActive(link.path) ? 'text-brand-orange' : 'text-gray-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-brand-orange text-center text-white px-5 py-4 rounded-lg font-bold shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Now - Start Earning
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-blue text-white pt-20 pb-10 border-t-4 border-brand-orange relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 animate-on-scroll">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold font-heading text-brand-yellow">SAA FORCE</h3>
                <div className="h-1 w-20 bg-brand-orange rounded-full mt-2"></div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">{BRAND.tagline}</p>
              <div className="flex gap-4 pt-2">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:scale-110 cursor-pointer transition-all duration-300"><Icon name="Globe" size={18}/></div>
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:scale-110 cursor-pointer transition-all duration-300"><Icon name="Users" size={18}/></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold font-heading mb-6 text-white inline-block relative">
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brand-yellow"></span>
              </h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                {['About Us', 'Services', 'Careers', 'Contact'].map((item, idx) => (
                    <li key={idx}><Link to={`/${item.split(' ')[0].toLowerCase()}`} className="hover:text-brand-yellow transition-colors flex items-center gap-2 group"><Icon name="ChevronRight" size={12} className="group-hover:translate-x-1 transition-transform"/> {item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold font-heading mb-6 text-white inline-block relative">
                 Services
                 <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brand-yellow"></span>
              </h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                {['Income Tax (ITR)', 'GST Services', 'Life Insurance', 'Real Estate'].map((item, idx) => (
                     <li key={idx}><Link to="/services" className="hover:text-brand-yellow transition-colors group flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange group-hover:scale-150 transition-transform"></div> {item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold font-heading mb-6 text-white inline-block relative">
                Contact Us
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brand-yellow"></span>
              </h4>
              <div className="space-y-4 text-gray-300 text-sm">
                <div className="flex items-start gap-3 group">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-brand-orange transition-colors">
                     <Icon name="MapPin" size={16} />
                  </div>
                  <span className="leading-relaxed">{BRAND.address}</span>
                </div>
                <div className="flex items-center gap-3 group">
                   <div className="p-2 bg-white/10 rounded-lg group-hover:bg-brand-orange transition-colors">
                     <Icon name="Phone" size={16} />
                  </div>
                  <div>
                    <a href={`tel:${BRAND.phone1}`} className="block hover:text-white transition-colors">{BRAND.phone1}</a>
                    <a href={`tel:${BRAND.phone2}`} className="block hover:text-white transition-colors">{BRAND.phone2}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                   <div className="p-2 bg-white/10 rounded-lg group-hover:bg-brand-orange transition-colors">
                     <Icon name="Mail" size={16} />
                   </div>
                  <a href={`mailto:${BRAND.email}`} className="break-all hover:text-white transition-colors">{BRAND.email}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs animate-on-scroll">
            <p>&copy; SAA FORCE - Jann Shakti. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default Layout;