export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'Financial' | 'Insurance' | 'Digital' | 'Real Estate' | 'Recruitment';
  image: string;
}

export interface JobOpportunity {
  id: string;
  title: string;
  description: string;
  earnings: string;
  trainingFee: string;
  type: 'Full Time' | 'Part Time' | 'Work From Home';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface AdminStats {
  visitors: number;
  leads: number;
  agents: number;
  revenue: number;
}