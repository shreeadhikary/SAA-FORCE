import React from 'react';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';
import { BRAND } from '../constants';

const About: React.FC = () => {
  return (
    <>
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-20 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Revolutionizing employment in India through empowerment and entrepreneurship.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold font-heading text-brand-blue mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              SAA FORCE - Jann Shakti was founded with a singular vision: to generate triple employment power through Commission, Profit, and Salary. We believe that everyone has the power to sell, regardless of their age or educational background.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are not just a company; we are a movement ("Jann Shakti") aimed at providing dignity of labor and financial independence to housewives, retired personnel, students, and job seekers across India.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Indian Team" 
              className="rounded-2xl shadow-2xl object-cover h-96 w-full transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} />
               </div>
               <h3 className="text-xl font-bold mb-2">Social Impact</h3>
               <p className="text-gray-600">Creating jobs for thousands, fostering a self-reliant India.</p>
            </div>
            <div className="p-8 bg-orange-50 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} />
               </div>
               <h3 className="text-xl font-bold mb-2">Excellence</h3>
               <p className="text-gray-600">Commitment to top-tier service in finance and insurance.</p>
            </div>
            <div className="p-8 bg-yellow-50 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-brand-yellow text-brand-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} />
               </div>
               <h3 className="text-xl font-bold mb-2">Growth</h3>
               <p className="text-gray-600">Helping small businesses grow digitally and financially.</p>
            </div>
        </div>
      </Section>
    </>
  );
};

export default About;