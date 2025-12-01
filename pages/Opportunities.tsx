import React from 'react';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';
import { OPPORTUNITIES } from '../constants';
import { Link } from 'react-router-dom';

const Opportunities: React.FC = () => {
  return (
    <>
      <div className="bg-brand-orange text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-red-500"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-on-scroll">
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Career Growth</span>
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Be Your Own Boss</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Unlimited earning potential with SAA FORCE. Work from home or office with full flexibility.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {OPPORTUNITIES.map((opp, idx) => (
            <div key={opp.id} className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-2 transition-all duration-500 animate-on-scroll" style={{animationDelay: `${idx * 150}ms`}}>
              <div className="bg-brand-blue p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                <h3 className="text-2xl font-bold font-heading text-white relative z-10">{opp.title}</h3>
                <span className="inline-block mt-3 bg-brand-yellow text-brand-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase relative z-10 tracking-wider">
                  {opp.type}
                </span>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-gray-600 mb-8 text-sm flex-grow leading-relaxed">{opp.description}</p>
                
                <div className="space-y-4 mb-8 text-sm bg-gray-50 p-4 rounded-xl">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-semibold">Income</span>
                    <span className="font-bold text-green-600 text-right">{opp.earnings}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-semibold">Fees</span>
                    <span className="font-bold text-brand-blue">{opp.trainingFee}</span>
                  </div>
                </div>

                <Link to="/contact" className="block w-full text-center bg-brand-orange text-white py-3 rounded-xl font-bold hover:bg-brand-dark transition-colors shadow-lg hover:shadow-orange-500/30">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-gray-100 animate-on-scroll">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-heading text-brand-blue mb-8">Why Join Us?</h2>
              <ul className="space-y-6">
                {[
                  "No Age Bar, No Education Bar",
                  "100% Genuine Work - Zero Investment options",
                  "Earn by Socialising in your free time",
                  "Complete training provided",
                  "Weekly performance reviews"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <Icon name="CheckCircle" size={16} />
                    </div>
                    <span className="text-gray-700 text-lg group-hover:text-brand-dark transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                 <p className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wider">Training Available For:</p>
                 <div className="flex flex-wrap gap-3">
                    {['Digital Marketing', 'Sales Skills', 'Insurance Products', 'Communication'].map((tag, i) => (
                        <span key={i} className="bg-gray-100 hover:bg-brand-blue hover:text-white transition-colors px-4 py-2 rounded-full text-sm text-gray-600 font-semibold cursor-default">
                            {tag}
                        </span>
                    ))}
                 </div>
              </div>
            </div>
            
            <div className="bg-brand-light p-10 rounded-3xl shadow-inner">
               <h3 className="text-2xl font-bold font-heading text-brand-dark mb-8">Commission Structure</h3>
               <div className="space-y-8">
                  {/* Insurance */}
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-bold group-hover:text-brand-blue transition-colors">Insurance Advisor</span>
                      <span className="font-bold text-brand-orange">Up to 35%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-3 shadow-sm overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-orange to-red-500 h-3 rounded-full transition-all duration-1000 w-[35%] group-hover:w-[40%]"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">On Life, Health & General Insurance policies</p>
                  </div>
                  
                  {/* Property Rent */}
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-bold group-hover:text-brand-blue transition-colors">Property Rentals</span>
                      <span className="font-bold text-brand-blue">25% of Rent</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-3 shadow-sm overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-400 to-brand-blue h-3 rounded-full transition-all duration-1000 w-[25%] group-hover:w-[30%]"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Earn on every rental agreement</p>
                  </div>

                  {/* Property Sale */}
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-bold group-hover:text-brand-blue transition-colors">Property Sales</span>
                      <span className="font-bold text-green-600">1% of Value</span>
                    </div>
                     <div className="w-full bg-white rounded-full h-3 shadow-sm overflow-hidden">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000 w-[15%] group-hover:w-[20%]"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">High value transactions = High earnings</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Opportunities;