// src/features/educator/components/StatsCard.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  change?: number;
  suffix?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, change, suffix }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-semibold mt-1">
            {value}{suffix}
          </p>
          {change !== undefined && (
            <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? '+' : ''}{change}% from last month
            </p>
          )}
        </div>
        <div className="bg-primary-50 p-3 rounded-full">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;