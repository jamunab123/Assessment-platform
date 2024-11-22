// src/features/admin/AdminDashboard.tsx
import React from 'react';
import SystemOverview from './components/SystemOverview';
import UserManagement from './components/UserManagement';
import ActivityLog from './components/ActivityLog';
import type { SystemStats, UserDetails, SystemActivity } from '../../types/admin';

const AdminDashboard = () => {
  // Mock data - replace with API calls
  const mockStats: SystemStats = {
    totalUsers: 1250,
    activeUsers: 180,
    totalAssessments: 450,
    activeAssessments: 32,
    systemUptime: 168, // 7 days in hours
    storageUsed: 536870912000, // 500GB in bytes
  };

  const mockUsers: UserDetails[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'candidate',
      status: 'active',
      lastActive: '2024-11-22T10:30:00',
      createdAt: '2024-10-15T08:00:00',
      assessmentsTaken: 12,
    },
    // Add more mock users as needed
  ];

  const mockActivities: SystemActivity[] = [
    {
      id: '1',
      type: 'user_login',
      description: 'User logged in to the system',
      userId: '1',
      userName: 'John Doe',
      timestamp: '2024-11-22T10:30:00',
    },
    // Add more mock activities as needed
  ];

  const handleEditUser = (id: string) => {
    console.log('Edit user:', id);
  };

  const handleSuspendUser = (id: string) => {
    console.log('Suspend user:', id);
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">System overview and management</p>
      </div>

      <SystemOverview stats={mockStats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UserManagement
            users={mockUsers}
            onEditUser={handleEditUser}
            onSuspendUser={handleSuspendUser}
          />
        </div>
        <div className="lg:col-span-1">
          <ActivityLog activities={mockActivities} />
        </div>
      </div>
      <div className="mt-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">System Settings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Automatic Backups</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full 
                                peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                after:left-[2px] after:bg-white after:border-gray-300 after:border 
                                after:rounded-full after:h-5 after:w-5 after:transition-all 
                                peer-checked:bg-primary-600"></div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Email Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full 
                                peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                after:left-[2px] after:bg-white after:border-gray-300 after:border 
                                after:rounded-full after:h-5 after:w-5 after:transition-all 
                                peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Maintenance Mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full 
                                peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                after:left-[2px] after:bg-white after:border-gray-300 after:border 
                                after:rounded-full after:h-5 after:w-5 after:transition-all 
                                peer-checked:bg-primary-600"></div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Debug Mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full 
                                peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                after:left-[2px] after:bg-white after:border-gray-300 after:border 
                                after:rounded-full after:h-5 after:w-5 after:transition-all 
                                peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;