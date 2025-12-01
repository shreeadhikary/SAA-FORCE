import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';
import { SERVICES, TESTIMONIALS, BRAND } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section - Parallax & Gradient Animation */}
      <div className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-blue-900 to-black z-0">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
             {/* Floating Blobs */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-float"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-8 animate-on-scroll">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-brand-yellow text-xs font-bold px-4 py-2 rounded-full tracking-wider mb-2 animate-pulse uppercase shadow-lg">
              India's #1 Employment Solution
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-tight text-white drop-shadow-2xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange mb-2 text-3xl md:text-4xl font-serif italic">"Mujhe Bhi Kuch Banna Hai"</span>
              Turn <span className="text-brand-orange">Ambition</span><br/> Into <span className="text-white">Income</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
              {BRAND.subTagline}. Unlock the triple power of Commission, Profit & Salary. Join the movement that pays you to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-6">
              <Link to="/opportunities" className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full shadow-orange-500/50 shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Start Earning <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-brand-blue font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105">
                Explore Services
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange to-brand-yellow opacity-30 rounded-[2rem] blur-2xl animate-pulse-slow"></div>
            {/* Indian Professional Image with Glass Effect Frame */}
            <div className="relative rounded-[2rem] overflow-hidden border-8 border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
                alt="Indian Corporate Professional" 
                className="w-full h-[600px] object-cover object-center hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                    <div className="glass-card p-4 rounded-xl inline-block text-brand-dark">
                        <p className="font-bold text-sm">Verified Opportunity</p>
                        <div className="flex items-center gap-1 text-xs text-brand-blue">
                             <Icon name="CheckCircle" size={12}/> 100% Genuine
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats Section */}
      <div className="container mx-auto px-4 relative z-20 -mt-20 mb-20 animate-on-scroll" style={{animationDelay: '0.4s'}}>
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {[
            { label: 'Investment', value: 'ZERO', icon: 'DollarSign' },
            { label: 'Core Services', value: '10+', icon: 'Briefcase' },
            { label: 'Age Limit', value: '18+', icon: 'Users' },
            { label: 'Satisfaction', value: '100%', icon: 'Star' }
          ].map((stat, idx) => (
             <div key={idx} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <Icon name={stat.icon} size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold font-heading text-brand-dark mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{stat.label}</div>
             </div>
          ))}
        </div>
      </div>

      {/* Who Can Join Section */}
      <Section className="text-center bg-brand-light">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-brand-blue mb-4 animate-on-scroll">Who Can Join?</h2>
        <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg animate-on-scroll">
          Breaking barriers in employment. No degree required. No experience needed.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { label: "Students", icon: "BookOpen", color: "text-blue-500", bg: "bg-blue-50" },
            { label: "Housewives", icon: "Home", color: "text-pink-500", bg: "bg-pink-50" },
            { label: "Retired", icon: "Users", color: "text-green-500", bg: "bg-green-50" },
            { label: "Businessmen", icon: "Briefcase", color: "text-purple-500", bg: "bg-purple-50" },
            { label: "Professionals", icon: "Award", color: "text-orange-500", bg: "bg-orange-50" },
            { label: "Job Seekers", icon: "TrendingUp", color: "text-red-500", bg: "bg-red-50" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-brand-orange group animate-on-scroll" style={{animationDelay: `${idx * 100}ms`}}>
              <div className={`w-16 h-16 mx-auto ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                <Icon name={item.icon} size={32} />
              </div>
              <h3 className="font-bold text-gray-800 text-lg">{item.label}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Highlight - 3D Cards */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2 animate-on-scroll">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-blue mb-4">Sell These Products</h2>
            <p className="text-gray-600 max-w-xl text-lg">
              Buy nothing, only sell. Choose from our wide range of services and start earning commissions immediately.
            </p>
          </div>
          <Link to="/services" className="hidden md:flex items-center text-white bg-brand-blue px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors mt-4 md:mt-0 shadow-lg">
            View All Products <Icon name="ArrowRight" size={18} className="ml-2"/>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service, idx) => (
            <div key={service.id} className="group h-[400px] perspective-1000 animate-on-scroll" style={{animationDelay: `${idx * 200}ms`}}>
               <div className="relative w-full h-full transition-transform duration-700 transform style-preserve-3d group-hover:rotate-y-180 bg-white rounded-2xl shadow-xl overflow-hidden">
                  
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                          <div className="flex items-center gap-2 mb-2 text-brand-yellow text-sm font-bold uppercase tracking-wider">
                              <Icon name={service.iconName} size={16} /> {service.category}
                          </div>
                          <h3 className="text-2xl font-bold font-heading">{service.title}</h3>
                          <div className="mt-4 flex items-center text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                              Hover for details <Icon name="ArrowRight" size={14} className="ml-2" />
                          </div>
                      </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-brand-blue backface-hidden rotate-y-180 p-8 flex flex-col justify-center text-center text-white">
                       <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Icon name={service.iconName} size={32} />
                       </div>
                       <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                       <p className="text-blue-100 mb-8">{service.description}</p>
                       <Link to="/services" className="inline-block bg-white text-brand-blue px-8 py-3 rounded-full font-bold hover:bg-brand-orange hover:text-white transition-colors">
                          Learn More
                       </Link>
                  </div>
               </div>
            </div>
          ))}
        </div>
        
         <div className="mt-12 text-center md:hidden animate-on-scroll">
          <Link to="/services" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-bold shadow-lg">
            View All Products
          </Link>
        </div>
      </Section>

      {/* Testimonials - Styled */}
      <Section bg="pattern" className="overflow-hidden">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-brand-blue">Success Stories</h2>
          <p className="text-gray-600 mt-4 text-lg">Real people, real earnings. Join the Jann Shakti family.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 pt-10">
          {TESTIMONIALS.map((t, idx) => (
            <div key={t.id} className="relative group animate-on-scroll" style={{animationDelay: `${idx * 200}ms`}}>
               <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-yellow rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
               <div className="relative bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center h-full">
                  <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-brand-orange to-brand-yellow -mt-20 mb-6 shadow-lg">
                      <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover border-4 border-white" />
                  </div>
                  <Icon name="MessageCircle" className="text-brand-light mb-4" size={40} />
                  <p className="italic text-gray-600 mb-6 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-xl text-brand-blue">{t.name}</h4>
                    <p className="text-sm text-brand-orange font-bold uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section - Gradient */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-900 py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
             {/* Animated Shapes */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8 leading-tight">
            Get Your Power to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-orange-400">SELL</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-orange-400">EARN!</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light">
            Work 2-3 hours/day. Earn extra income. Change your life as a Health and Wealth creator.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link to="/contact" className="bg-gradient-to-r from-brand-yellow to-brand-orange text-white font-bold py-5 px-12 rounded-full text-xl shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all">
                Join Now - Zero Investment
             </Link>
             <Link to="/opportunities" className="bg-transparent border-2 border-white/30 text-white font-bold py-5 px-12 rounded-full text-xl hover:bg-white hover:text-brand-blue transition-all">
                View Opportunities
             </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;