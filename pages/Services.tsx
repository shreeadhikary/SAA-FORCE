import React from 'react';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';
import { SERVICES, BRAND } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const categories = Array.from(new Set(SERVICES.map(s => s.category)));

  return (
    <>
      <div className="bg-brand-blue text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600" alt="Services Background" className="w-full h-full object-cover opacity-20 transform scale-105 animate-pulse-slow" />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-on-scroll">
          <span className="text-brand-yellow font-bold tracking-widest uppercase mb-4 block">Premium Portfolio</span>
          <h1 className="text-5xl md:text-6xl font-extrabold font-heading mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            A comprehensive suite of financial, insurance, and digital solutions. Sell these products and earn high commissions.
          </p>
        </div>
      </div>

      <Section>
        <div className="space-y-24">
          {categories.map((category, catIdx) => (
            <div key={category} id={category.toLowerCase().replace(' ', '-')} className="animate-on-scroll">
              <div className="flex items-center gap-4 mb-10">
                  <div className="h-px bg-gray-200 flex-1"></div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-blue">
                    {category} <span className="text-brand-orange">Services</span>
                  </h2>
                  <div className="h-px bg-gray-200 flex-1"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {SERVICES.filter(s => s.category === category).map((service, idx) => (
                  <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-orange/30 flex flex-col h-full transform hover:-translate-y-2">
                    {/* Image Section */}
                    <div className="h-56 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full text-brand-blue shadow-lg group-hover:rotate-12 transition-transform">
                        <Icon name={service.iconName} size={24} />
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow relative">
                      <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                      <p className="text-gray-600 mb-8 flex-grow text-sm leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center text-sm text-gray-500">
                          <Icon name="CheckCircle" size={16} className="text-green-500 mr-2" />
                          <span>Professional Support</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Icon name="CheckCircle" size={16} className="text-green-500 mr-2" />
                          <span>High Commission Rates</span>
                        </div>
                      </div>

                      <div className="mt-auto grid grid-cols-2 gap-4">
                          <a 
                            href={`tel:${BRAND.phone1}`} 
                            className="flex flex-col items-center justify-center bg-gray-50 text-gray-700 py-3 rounded-xl hover:bg-brand-blue hover:text-white transition-all duration-300 group/btn"
                          >
                            <div className="flex items-center gap-1 text-xs opacity-80 mb-1 group-hover/btn:text-white/80">
                               <Icon name="Phone" size={12} /> Call Now
                            </div>
                            <span className="font-bold text-xs">{BRAND.phone1}</span>
                          </a>
                          <a 
                            href={`https://wa.me/91${BRAND.phone1}`} 
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col items-center justify-center bg-green-50 text-green-700 py-3 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 group/btn"
                          >
                            <div className="flex items-center gap-1 text-xs opacity-80 mb-1 group-hover/btn:text-white/80">
                               <Icon name="MessageCircle" size={12} /> WhatsApp
                            </div>
                            <span className="font-bold text-xs">{BRAND.phone1}</span>
                          </a>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Promotion Block */}
      <Section bg="blue" className="text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="relative z-10 max-w-4xl mx-auto animate-on-scroll">
            <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
                <Icon name="DollarSign" size={40} className="text-brand-yellow" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Special Offer: Messiah Program</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Get instant cash for urgent property sales at a discounted value. We help you sell your property fast!
            </p>
            <Link to="/contact" className="inline-block bg-white text-brand-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-yellow transition-colors shadow-2xl">
                Contact for Messiah Program
            </Link>
         </div>
      </Section>
    </>
  );
};

export default Services;