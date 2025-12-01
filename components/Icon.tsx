import React from 'react';
import { 
  FileText, Shield, Globe, Home, Briefcase, 
  TrendingUp, Users, DollarSign, Award, BookOpen,
  Menu, X, Phone, Mail, MapPin, ChevronRight,
  CheckCircle, ArrowRight, Star, MessageCircle
} from 'lucide-react';

const icons: Record<string, React.ElementType> = {
  FileText, Shield, Globe, Home, Briefcase, 
  TrendingUp, Users, DollarSign, Award, BookOpen,
  Menu, X, Phone, Mail, MapPin, ChevronRight,
  CheckCircle, ArrowRight, Star, MessageCircle
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const LucideIcon = icons[name] || FileText;
  return <LucideIcon className={className} size={size} />;
};