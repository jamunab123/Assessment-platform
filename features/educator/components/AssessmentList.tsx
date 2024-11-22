// src/features/educator/components/AssessmentList.tsx
import React from 'react';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';
import type { AssessmentDetails } from '../../../types/educator';

interface AssessmentListProps {
  assessments: AssessmentDetails[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const AssessmentList: React.FC<AssessmentListProps> = ({ assessments, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Candidates</th>
              <th className="text-left p-4">Average Score</th>
              <th className="text-left p-4">Created</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((assessment) => (
              <tr key={assessment.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <div>
                    <p className="font-medium">{assessment.title}</p>
                    <p className="text-sm text-gray-500">{assessment.description}</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`
                    px-2 py-1 rounded-full text-xs font-medium
                    ${assessment.status === 'published' ? 'bg-green-100 text-green-800' : ''}
                    ${assessment.status === 'draft' ? 'bg-gray-100 text-gray-800' : ''}
                    ${assessment.status === 'ongoing' ? 'bg-blue-100 text-blue-800' : ''}
                    ${assessment.status === 'completed' ? 'bg-purple-100 text-purple-800' : ''}
                  `}>
                    {assessment.status}
                  </span>
                </td>
                <td className="p-4">
                  {assessment.completedCandidates}/{assessment.totalCandidates}
                </td>
                <td className="p-4">
                  {assessment.averageScore ? `${assessment.averageScore}%` : '-'}
                </td>
                <td className="p-4">
                  {new Date(assessment.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(assessment.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Edit2 className="h-4 w-4 text-gray-500" />
                    </button>
                    <button
                      onClick={() => onDelete(assessment.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Trash2 className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssessmentList;