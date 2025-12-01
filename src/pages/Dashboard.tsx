import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  DollarSign, 
  Activity, 
  AlertCircle,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { formatCurrency, cn } from '../lib/utils';
import { Metric } from '../types';

const METRICS: Metric[] = [
  { title: 'Total Users', value: '12,423', change: 12.5, icon: Users, trend: 'up' },
  { title: 'Total Revenue', value: formatCurrency(45231), change: 8.2, icon: DollarSign, trend: 'up' },
  { title: 'Active Sessions', value: '1,432', change: -2.4, icon: Activity, trend: 'down' },
  { title: 'System Errors', value: '23', change: -15, icon: AlertCircle, trend: 'up' },
];

const CHART_DATA = [
  { name: 'Jan', users: 4000, revenue: 2400 },
  { name: 'Feb', users: 3000, revenue: 1398 },
  { name: 'Mar', users: 2000, revenue: 9800 },
  { name: 'Apr', users: 2780, revenue: 3908 },
  { name: 'May', users: 1890, revenue: 4800 },
  { name: 'Jun', users: 2390, revenue: 3800 },
  { name: 'Jul', users: 3490, revenue: 4300 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export function Dashboard() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back to your command center.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((metric, index) => (
          <motion.div key={index} variants={item}>
            <Card className="p-6 glass-card hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{metric.value}</h3>
                </div>
                <div className="p-3 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl text-primary-600 dark:text-primary-400 shadow-inner">
                  <metric.icon size={24} />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className={cn(
                  "text-sm font-medium flex items-center gap-1 px-2 py-0.5 rounded-full",
                  metric.change >= 0 
                    ? "text-green-600 bg-green-50 dark:bg-green-900/20" 
                    : "text-red-600 bg-red-50 dark:bg-red-900/20"
                )}>
                  {metric.change >= 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                  {Math.abs(metric.change)}%
                </span>
                <span className="text-sm text-gray-500">vs last month</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={item}>
          <Card className="p-6 glass-card h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Revenue Analytics</h3>
              <select className="bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-sm p-2 focus:ring-0">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#0ea5e9" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 glass-card h-full">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">User Acquisition</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CHART_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                  <Tooltip 
                     cursor={{fill: 'rgba(255,255,255,0.05)'}}
                     contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '12px', color: '#fff' }}
                  />
                  <Bar dataKey="users" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}