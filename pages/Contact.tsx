import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';
import { BRAND } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xrbwayvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! There was a problem submitting your form. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="bg-brand-blue text-white py-16 text-center">
         <h1 className="text-4xl font-bold font-heading">Contact Us</h1>
         <p className="mt-2 text-blue-200">Get in touch to start your journey or inquire about services.</p>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-heading text-brand-blue mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you want to join our team, need financial advice, or have questions about our services, we are here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Visit Us</h4>
                  <p className="text-gray-600">{BRAND.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Call Us</h4>
                  <p className="text-gray-600">{BRAND.phone1}, {BRAND.phone2}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Email Us</h4>
                  <p className="text-gray-600">{BRAND.email}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-xl w-full flex items-center justify-center text-gray-500 overflow-hidden shadow-inner">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.472718101683!2d80.9427!3d26.8145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ4JzUyLjIiTiA4MMKwNTYnMzMuNyJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold font-heading text-brand-blue mb-6">Send Message</h3>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center animate-pulse">
                <Icon name="CheckCircle" size={48} className="mx-auto mb-4 text-green-500" />
                <h4 className="font-bold text-xl mb-2">Message Sent!</h4>
                <p>Thank you for contacting us. We will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-brand-orange font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                      placeholder="9876543210"
                    />
                  </div>
                   <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Interested In</label>
                  <select 
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Sales Agent Opportunity</option>
                    <option>Business Associate</option>
                    <option>Financial Services (ITR/GST)</option>
                    <option>Insurance (Life/Health)</option>
                    <option>Real Estate / Property</option>
                    <option>Messiah Program (Sell Property)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange text-white font-bold py-4 rounded-lg shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;