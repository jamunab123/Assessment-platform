// src/types/educator.ts
export interface AssessmentStats {
    totalAssessments: number;
    activeAssessments: number;
    completedAssessments: number;
    averageScore: number;
  }
  
  export interface AssessmentDetails {
    id: string;
    title: string;
    description: string;
    duration: number;
    totalQuestions: number;
    status: 'draft' | 'published' | 'ongoing' | 'completed';
    createdAt: string;
    startTime?: string;
    endTime?: string;
    totalCandidates?: number;
    completedCandidates?: number;
    averageScore?: number;
  }