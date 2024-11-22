// src/features/educator/EducatorDashboard.tsx
import React from 'react';
import { FileText, Users, CheckCircle, TrendingUp } from 'lucide-react';
import StatsCard from './components/StatsCard';
import AssessmentList from './components/AssessmentList';
import type { AssessmentDetails, AssessmentStats } from '../../types/educator';

const EducatorDashboard = () => {
  // Mock data - replace with API calls
  const stats: AssessmentStats = {
    totalAssessments: 25,
    activeAssessments: 8,
    completedAssessments: 17,
    averageScore: 82.5
  };

  const mockAssessments: AssessmentDetails[] = [
    {
      id: '1',
      title: 'JavaScript Advanced Concepts',
      description: 'Deep dive into JavaScript advanced topics',
      duration: 90,
      totalQuestions: 45,
      status: 'ongoing',
      createdAt: '2024-11-20T10:00:00',
      totalCandidates: 50,
      completedCandidates: 35,
      averageScore: 78.5
    },
    // Add more mock data as needed
  ];

  const handleEdit = (id: string) => {
    console.log('Edit assessment:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete assessment:', id);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Assessment Dashboard</h1>
        <p className="text-gray-600 mt-1">Monitor and manage your assessments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Assessments"
          value={stats.totalAssessments}
          icon={FileText}
        />
        <StatsCard
          title="Active Assessments"
          value={stats.activeAssessments}
          icon={Users}
          change={12}
        />
        <StatsCard
          title="Completed Assessments"
          value={stats.completedAssessments}
          icon={CheckCircle}
        />
        <StatsCard
          title="Average Score"
          value={stats.averageScore}
          icon={TrendingUp}
          suffix="%"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Recent Assessments</h2>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
            Create New
          </button>
        </div>
        
        <AssessmentList
          assessments={mockAssessments}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default EducatorDashboard;