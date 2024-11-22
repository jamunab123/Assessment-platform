// src/features/admin/components/ActivityLog.tsx
import React from 'react';
import { 
  LogIn, FileText, CheckCircle, UserPlus, 
  AlertCircle
} from 'lucide-react';
import type { SystemActivity } from '../../../types/admin';

interface ActivityLogProps {
  activities: SystemActivity[];
}

const ActivityLog: React.FC<ActivityLogProps> = ({ activities }) => {
  const getActivityIcon = (type: SystemActivity['type']) => {
    switch (type) {
      case 'user_login':
        return <LogIn className="h-5 w-5 text-blue-500" />;
      case 'assessment_created':
        return <FileText className="h-5 w-5 text-green-500" />;
      case 'assessment_completed':
        return <CheckCircle className="h-5 w-5 text-purple-500" />;
      case 'user_registered':
        return <UserPlus className="h-5 w-5 text-orange-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <div className="bg-gray-50 p-2 rounded-full">
              {getActivityIcon(activity.type)}
            </div>
            <div>
              <p className="text-sm text-gray-900">{activity.description}</p>
              <div className="flex gap-2 mt-1 text-xs text-gray-500">
                <span>{activity.userName}</span>
                <span>•</span>
                <span>{new Date(activity.timestamp).toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;