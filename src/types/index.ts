export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'MANAGER' | 'USER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: 'active' | 'inactive' | 'suspended';
  lastLogin: string;
  avatar?: string;
}

export interface Metric {
  title: string;
  value: string | number;
  change: number;
  icon: any;
  trend: 'up' | 'down' | 'neutral';
}

export interface ActivityLog {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
}