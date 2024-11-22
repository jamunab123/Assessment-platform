// src/features/admin/components/SystemOverview.tsx
import React from 'react';
import { Users, FileText, Clock, Database } from 'lucide-react';
import type { SystemStats } from '../../../types/admin';

interface SystemOverviewProps {
  stats: SystemStats;
}

const SystemOverview: React.FC<SystemOverviewProps> = ({ stats }) => {
  const formatUptime = (hours: number) => {
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return `${days}d ${remainingHours}h`;
  };

  const formatStorage = (bytes: number) => {
    const gb = bytes / (1024 * 1024 * 1024);
    return `${gb.toFixed(1)} GB`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Users</p>
            <p className="text-2xl font-semibold mt-2">{stats.totalUsers}</p>
            <p className="text-sm text-gray-500 mt-1">
              {stats.activeUsers} active now
            </p>
          </div>
          <div className="bg-blue-50 p-3 rounded-full">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Assessments</p>
            <p className="text-2xl font-semibold mt-2">{stats.totalAssessments}</p>
            <p className="text-sm text-gray-500 mt-1">
              {stats.activeAssessments} active
            </p>
          </div>
          <div className="bg-green-50 p-3 rounded-full">
            <FileText className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">System Uptime</p>
            <p className="text-2xl font-semibold mt-2">
              {formatUptime(stats.systemUptime)}
            </p>
            <p className="text-sm text-gray-500 mt-1">Since last restart</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-full">
            <Clock className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Storage Used</p>
            <p className="text-2xl font-semibold mt-2">
              {formatStorage(stats.storageUsed)}
            </p>
            <p className="text-sm text-gray-500 mt-1">Of 1TB total</p>
          </div>
          <div className="bg-orange-50 p-3 rounded-full">
            <Database className="h-6 w-6 text-orange-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemOverview;