import { Service, JobOpportunity, Testimonial } from './types';
import { 
  FileText, Shield, Globe, Home, Briefcase, 
  TrendingUp, Users, DollarSign, Award, BookOpen
} from 'lucide-react';

export const BRAND = {
  name: "SAA FORCE - Jann Shakti",
  tagline: "The Ultimate Revolutionary Employment Solution",
  subTagline: "The Talent Hunt - Age No Bar, Education No Bar",
  phone1: "9235178779",
  phone2: "7071150824",
  email: "shree.adhikary@gmail.com",
  address: "A2/37, Sector F Extension LDA Colony Kanpur Road, Lucknow-226012",
  website: "www.justdemand.in",
  timings: "Office: 8am to 8pm • 24/7 Digital Presence"
};

// Images selected specifically for Indian Professional Context (Formal Wear)
export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Income Tax Returns (ITR)',
    description: 'Expert filing services. Personal returns from ₹500. Bulk discounts available.',
    iconName: 'FileText',
    category: 'Financial',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800' // Indian accountant/finance
  },
  {
    id: '2',
    title: 'Capital Gain Tax Planning',
    description: 'Strategic tax planning and savings on your capital gains.',
    iconName: 'TrendingUp',
    category: 'Financial',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800' // Corporate meeting
  },
  {
    id: '3',
    title: 'GST Registration & Returns',
    description: 'Seamless GST solutions for businesses of all sizes.',
    iconName: 'FileText',
    category: 'Financial',
    image: 'https://images.unsplash.com/photo-1554224154-260327c00c4b?auto=format&fit=crop&q=80&w=800' // Financial paperwork
  },
  {
    id: '4',
    title: 'Life Insurance (SAA PoSAA Y)',
    description: 'Secure lives with SAA Force - Jann Shakti policies.',
    iconName: 'Shield',
    category: 'Insurance',
    image: 'https://images.unsplash.com/photo-1622675363311-ac0519a7c968?auto=format&fit=crop&q=80&w=800' // Indian insurance agent
  },
  {
    id: '5',
    title: 'Health Insurance (Star Health)',
    description: 'Comprehensive health coverage from Star Health.',
    iconName: 'Shield',
    category: 'Insurance',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800' // Medical professional India
  },
  {
    id: '6',
    title: 'General Insurance (HDFC ERGO)',
    description: 'Protect assets with trusted HDFC ERGO general insurance.',
    iconName: 'Shield',
    category: 'Insurance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800' // Corporate agreement
  },
  {
    id: '7',
    title: 'Digital Marketing & Promotion',
    description: 'Website design, SEO, and advertising to bring businesses online.',
    iconName: 'Globe',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800' // Digital workspace
  },
  {
    id: '8',
    title: 'Sale of Listed Properties',
    description: 'Buy or sell properties. Agents earn 1% on sale value.',
    iconName: 'Home',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800' // Real estate keys
  },
  {
    id: '9',
    title: 'Contractual Demands',
    description: 'Leads to contractual demands and supplies management.',
    iconName: 'Briefcase',
    category: 'Recruitment',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800' // Business handshake India
  },
   {
    id: '10',
    title: 'Messiah Property Program',
    description: 'Searching property at lower price than market value. Instant cash for urgent sales.',
    iconName: 'DollarSign',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800' // Property investment
  }
];

export const OPPORTUNITIES: JobOpportunity[] = [
  {
    id: '1',
    title: 'Sales Executive',
    description: 'Drive sales for financial/insurance products. Full support provided.',
    earnings: 'Commission + Salary Potential',
    trainingFee: '₹1000 or Monthly Deductible',
    type: 'Full Time'
  },
  {
    id: '2',
    title: 'Marketing Executive',
    description: 'Promote our digital and financial services in the market.',
    earnings: 'Commission + Salary Potential',
    trainingFee: '₹1000',
    type: 'Full Time'
  },
  {
    id: '3',
    title: 'Business Associate',
    description: 'Refer clients for any service. Ideal for networking.',
    earnings: 'Referral Commission',
    trainingFee: 'Free Training',
    type: 'Part Time'
  },
  {
    id: '4',
    title: 'Sales Agent',
    description: 'Work from home selling any product. No targets.',
    earnings: 'Up to 35% Insurance, 25% Rent',
    trainingFee: 'Free Joining',
    type: 'Work From Home'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Vikram Malhotra',
    role: 'Insurance Advisor',
    quote: 'The commission structure is the best in the industry. SAA Force helped me achieve financial freedom.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200' // Indian Male Professional
  },
  {
    id: '2',
    name: 'Anjali Sharma',
    role: 'Business Associate',
    quote: 'As a housewife, I wanted to earn from home. The "Jann Shakti" platform gave me dignity and income.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' // Indian Female Professional (Formal)
  },
  {
    id: '3',
    name: 'Rohan Gupta',
    role: 'Property Agent',
    quote: 'Making 25% on rental deals is unheard of! The Messiah program is a game changer for real estate.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200' // Indian Male Professional
  }
];