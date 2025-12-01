import React, { useState } from 'react';
import { Icon } from '../components/Icon';
import { SERVICES, OPPORTUNITIES } from '../constants';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const stats = [
    { label: 'Total Visitors', value: '12,453', icon: 'Users', color: 'bg-blue-500' },
    { label: 'New Leads', value: '148', icon: 'Mail', color: 'bg-green-500' },
    { label: 'Active Agents', value: '523', icon: 'Briefcase', color: 'bg-brand-orange' },
    { label: 'Revenue', value: '₹4.2L', icon: 'DollarSign', color: 'bg-brand-yellow' },
  ];

  const recentLeads = [
    { name: 'Amit Sharma', email: 'amit@test.com', service: 'Sales Agent' },
    { name: 'Sneha Gupta', email: 'sneha@test.com', service: 'ITR Filing' },
    { name: 'Rahul Verma', email: 'rahul@test.com', service: 'Property Sale' },
  ];

  const SidebarItem = ({ id, label, icon }: { id: string, label: string, icon: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-6 py-3 transition-colors ${
        activeTab === id 
        ? 'bg-brand-orange text-white border-r-4 border-brand-yellow' 
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <Icon name={icon} size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-brand-dark transition-all duration-300 flex flex-col`}>
        <div className="h-16 flex items-center justify-center border-b border-gray-800">
           {isSidebarOpen ? <span className="text-white font-bold font-heading text-xl">ADMIN PANEL</span> : <span className="text-white font-bold">AP</span>}
        </div>
        <div className="flex-1 py-6 space-y-2 overflow-y-auto">
          <SidebarItem id="dashboard" label={isSidebarOpen ? "Dashboard" : ""} icon="Home" />
          <SidebarItem id="pages" label={isSidebarOpen ? "Pages" : ""} icon="FileText" />
          <SidebarItem id="services" label={isSidebarOpen ? "Services" : ""} icon="Briefcase" />
          <SidebarItem id="leads" label={isSidebarOpen ? "Leads" : ""} icon="Users" />
          <SidebarItem id="settings" label={isSidebarOpen ? "Settings" : ""} icon="Award" />
        </div>
        <div className="p-4 border-t border-gray-800">
          <button className="flex items-center text-gray-400 hover:text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Icon name={isSidebarOpen ? "ChevronRight" : "Menu"} className={isSidebarOpen ? "rotate-180" : ""} />
            {isSidebarOpen && <span className="ml-2">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex justify-between items-center px-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 capitalize">{activeTab}</h2>
          <div className="flex items-center space-x-4">
             <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold">A</div>
             <span className="text-sm font-semibold">Admin User</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 overflow-auto p-8">
          
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                      <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                    </div>
                    <div className={`w-12 h-12 rounded-full ${stat.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon name={stat.icon} size={24} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Leads Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-bold text-lg">Recent Inquiries</h3>
                  <button className="text-brand-blue text-sm hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                      <tr>
                        <th className="px-6 py-4 font-semibold">Name</th>
                        <th className="px-6 py-4 font-semibold">Email</th>
                        <th className="px-6 py-4 font-semibold">Interest</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {recentLeads.map((lead, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-800">{lead.name}</td>
                          <td className="px-6 py-4 text-gray-600">{lead.email}</td>
                          <td className="px-6 py-4 text-gray-600">{lead.service}</td>
                          <td className="px-6 py-4">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">New</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between mb-6">
                <h3 className="font-bold text-lg">Manage Services</h3>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Add New Service</button>
              </div>
              <div className="grid gap-4">
                {SERVICES.map(service => (
                  <div key={service.id} className="border p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">{service.title}</h4>
                      <p className="text-sm text-gray-500">{service.category}</p>
                    </div>
                    <div className="space-x-2">
                       <button className="text-blue-500 hover:text-blue-700 text-sm">Edit</button>
                       <button className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Placeholders for other tabs */}
          {['pages', 'leads', 'settings'].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <Icon name="Briefcase" size={48} className="mb-4 opacity-50" />
              <p className="text-lg">This panel is under construction.</p>
              <p className="text-sm mt-2">The admin backend features (PHP/Node.js) would be integrated here.</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Admin;