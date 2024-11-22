// src/features/candidate/CandidateDashboard.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Clock, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import type { RootState } from '../../store';
import type { Assessment, AssessmentCandidate } from '../../types/assessment';

const CandidateDashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  // Mock data - replace with API call
  const mockAssessments: AssessmentCandidate[] = [
    {
      id: '1',
      title: 'JavaScript Fundamentals',
      description: 'Test your knowledge of JavaScript basics',
      duration: 60,
      totalQuestions: 30,
      startTime: '2024-11-25T10:00:00',
      status: 'upcoming',
    },
    {
      id: '2',
      title: 'React Development',
      description: 'Advanced React concepts and best practices',
      duration: 90,
      totalQuestions: 40,
      startTime: '2024-11-20T14:00:00',
      status: 'completed',
      score: 85,
    },
  ];

  const UpcomingAssessments = () => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Upcoming Assessments</h2>
      <div className="space-y-4">
        {mockAssessments
          .filter(assessment => assessment.status === 'upcoming')
          .map(assessment => (
            <div
              key={assessment.id}
              className="border rounded-lg p-4 hover:border-primary-500 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{assessment.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{assessment.description}</p>
                </div>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
                  Start
                </button>
              </div>
              <div className="flex gap-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{assessment.duration} mins</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(assessment.startTime).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{assessment.totalQuestions} questions</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  const RecentResults = () => (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Results</h2>
      <div className="space-y-4">
        {mockAssessments
          .filter(assessment => assessment.status === 'completed')
          .map(assessment => (
            <div
              key={assessment.id}
              className="border rounded-lg p-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{assessment.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{assessment.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-lg font-semibold text-green-500">
                    {assessment.score}%
                  </span>
                </div>
              </div>
              <div className="flex gap-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Completed on {new Date(assessment.startTime).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.name}</h1>
        <p className="text-gray-600 mt-1">Here's an overview of your assessments</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UpcomingAssessments />
          <RecentResults />
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="text-gray-600">Completed Assessments</p>
                <p className="text-2xl font-semibold">
                  {mockAssessments.filter(a => a.status === 'completed').length}
                </p>
              </div>
              <div className="border-b pb-4">
                <p className="text-gray-600">Upcoming Assessments</p>
                <p className="text-2xl font-semibold">
                  {mockAssessments.filter(a => a.status === 'upcoming').length}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Average Score</p>
                <p className="text-2xl font-semibold">
                  {Math.round(
                    mockAssessments
                      .filter(a => a.status === 'completed')
                      .reduce((acc, curr) => acc + (curr.score || 0), 0) /
                    mockAssessments.filter(a => a.status === 'completed').length
                  )}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;